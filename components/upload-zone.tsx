"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, ImageIcon, X } from "lucide-react"
import { useRef, useState } from "react"

interface UploadedFile {
  id: string
  name: string
  size: string
  type: string
  status: "uploading" | "processing" | "completed" | "error"
  progress: number
}

export function UploadZone() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const openPicker = () => inputRef.current?.click()

  const handlePickedFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files
    if (!selected || selected.length === 0) return
    const file = selected[0]
    const temp: UploadedFile = {
      id: Math.random().toString(),
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      type: file.type.includes("pdf") ? "pdf" : "image",
      status: "uploading",
      progress: 10,
    }
    setFiles((prev) => [...prev, temp])

    const form = new FormData()
    form.append("file", file)
    try {
      const res = await fetch("/api/repository/upload", { method: "POST", body: form })
      if (!res.ok) throw new Error("Upload failed")
      setFiles((prev) => prev.map((f) => (f.id === temp.id ? { ...f, status: "processing", progress: 65 } : f)))
      // Simulate processing complete
      setTimeout(() => {
        setFiles((prev) => prev.map((f) => (f.id === temp.id ? { ...f, status: "completed", progress: 100 } : f)))
      }, 800)
    } catch (e) {
      setFiles((prev) => prev.map((f) => (f.id === temp.id ? { ...f, status: "error", progress: 0 } : f)))
    } finally {
      if (inputRef.current) inputRef.current.value = ""
    }
  }

  const removeFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id))
  }

  return (
    <div className="space-y-4">
      <Card className="border-2 border-dashed border-border bg-muted/20 transition-colors hover:border-primary/50 hover:bg-muted/40">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Upload FRA Documents</h3>
          <p className="mb-4 text-center text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
          <p className="mb-4 text-xs text-muted-foreground">Supports PDF, JPG, PNG (Max 10MB per file)</p>
          <input ref={inputRef} type="file" accept=".pdf,image/*" className="hidden" onChange={handlePickedFiles} />
          <Button onClick={openPicker}>Select Files</Button>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Uploaded Files ({files.length})</h4>
          {files.map((file) => (
            <Card key={file.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {file.type === "pdf" ? (
                    <FileText className="h-5 w-5 text-primary" />
                  ) : (
                    <ImageIcon className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{file.name}</p>
                    <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => removeFile(file.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                  {file.status === "processing" && (
                    <div className="space-y-1">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-primary transition-all" style={{ width: `${file.progress}%` }} />
                      </div>
                      <p className="text-xs text-muted-foreground">Processing with OCR... {file.progress}%</p>
                    </div>
                  )}
                  {file.status === "completed" && (
                    <p className="text-xs font-medium text-green-600">Extraction completed</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
