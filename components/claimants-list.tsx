"use client"

import { useMemo, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

type Claimant = {
  id: string
  name: string
  village: string
  state: string
  status: "Approved" | "Pending"
  stuckAt?: "Gram Panchayat" | "District" | "State"
  problem?: string
  solution?: string
}

const DATA: Claimant[] = [
  { id: "C-1001", name: "Sita Gond", village: "Bhanpur", state: "MP", status: "Approved" },
  {
    id: "C-1002",
    name: "Ramesh Munda",
    village: "Simdega",
    state: "OD",
    status: "Pending",
    stuckAt: "Gram Panchayat",
    problem: "Missing land sketch",
    solution: "Upload certified sketch from surveyor",
  },
  {
    id: "C-1003",
    name: "Kali Bai",
    village: "Udaigarh",
    state: "RJ",
    status: "Pending",
    stuckAt: "District",
    problem: "Title mismatch",
    solution: "Correct caste category in form 3B",
  },
]

export default function ClaimantsList() {
  const [selected, setSelected] = useState<Claimant | null>(null)

  const rows = useMemo(() => DATA, [])

  return (
    <Card className="overflow-hidden">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Claimants</h3>
        <p className="text-sm text-muted-foreground">Click a row to view full details</p>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-3 text-left font-medium">ID</th>
              <th className="p-3 text-left font-medium">Name</th>
              <th className="p-3 text-left font-medium">Village</th>
              <th className="p-3 text-left font-medium">State</th>
              <th className="p-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id} className="cursor-pointer hover:bg-muted/30" onClick={() => setSelected(c)}>
                <td className="p-3">{c.id}</td>
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.village}</td>
                <td className="p-3">{c.state}</td>
                <td className="p-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${c.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Claimant Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">ID</p>
                  <p className="font-medium">{selected.id}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-medium">{selected.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Village</p>
                  <p className="font-medium">{selected.village}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">State</p>
                  <p className="font-medium">{selected.state}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className={`font-medium ${selected.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {selected.status}
                  </p>
                </div>
                {selected.status === "Pending" && (
                  <>
                    <div>
                      <p className="text-xs text-muted-foreground">Stuck At</p>
                      <p className="font-medium">{selected.stuckAt}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground">Problem</p>
                      <p className="font-medium">{selected.problem}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground">Suggested Solution</p>
                      <p className="font-medium">{selected.solution}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}
