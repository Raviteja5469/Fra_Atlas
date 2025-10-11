"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, FileText, UserPlus, Edit, Trash2, Shield, Database } from "lucide-react"

const mockLogs = [
  {
    id: "LOG-2024-001234",
    timestamp: "2024-03-18 14:30:45",
    user: "Dr. Rajesh Sharma",
    userId: "USR-001",
    action: "User Created",
    category: "User Management",
    details: "Created new user account for Sunita Verma (District Officer)",
    ipAddress: "103.45.67.89",
    status: "success",
  },
  {
    id: "LOG-2024-001233",
    timestamp: "2024-03-18 14:15:22",
    user: "Sunita Verma",
    userId: "USR-002",
    action: "Data Export",
    category: "Data Access",
    details: "Exported 234 FRA claims data to CSV format",
    ipAddress: "103.45.67.90",
    status: "success",
  },
  {
    id: "LOG-2024-001232",
    timestamp: "2024-03-18 13:45:10",
    user: "System",
    userId: "SYSTEM",
    action: "Backup Completed",
    category: "System",
    details: "Automatic daily backup completed successfully (2.3 GB)",
    ipAddress: "127.0.0.1",
    status: "success",
  },
  {
    id: "LOG-2024-001231",
    timestamp: "2024-03-18 12:30:15",
    user: "Prakash Nayak",
    userId: "USR-003",
    action: "Login Failed",
    category: "Authentication",
    details: "Failed login attempt - incorrect password",
    ipAddress: "103.45.67.91",
    status: "warning",
  },
  {
    id: "LOG-2024-001230",
    timestamp: "2024-03-18 11:20:33",
    user: "Dr. Rajesh Sharma",
    userId: "USR-001",
    action: "Settings Updated",
    category: "Configuration",
    details: "Updated system notification settings",
    ipAddress: "103.45.67.89",
    status: "success",
  },
]

const getActionIcon = (action: string) => {
  if (action.includes("User")) return UserPlus
  if (action.includes("Edit") || action.includes("Updated")) return Edit
  if (action.includes("Delete")) return Trash2
  if (action.includes("Login") || action.includes("Authentication")) return Shield
  if (action.includes("Backup") || action.includes("Export")) return Database
  return FileText
}

export function AuditLogs() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search logs by user, action, or details" className="pl-9" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="user">User Management</SelectItem>
                <SelectItem value="data">Data Access</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
                <SelectItem value="config">Configuration</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {mockLogs.map((log) => {
          const Icon = getActionIcon(log.action)
          return (
            <Card key={log.id} className="transition-shadow hover:shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      log.status === "success"
                        ? "bg-green-600/10"
                        : log.status === "warning"
                          ? "bg-yellow-600/10"
                          : "bg-red-600/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        log.status === "success"
                          ? "text-green-600"
                          : log.status === "warning"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{log.action}</h4>
                          <Badge variant="outline" className="text-xs">
                            {log.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{log.details}</p>
                      </div>
                      <Badge
                        variant={log.status === "success" ? "default" : "secondary"}
                        className={log.status === "success" ? "bg-green-600" : ""}
                      >
                        {log.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span>
                        <strong>User:</strong> {log.user} ({log.userId})
                      </span>
                      <span>
                        <strong>Time:</strong> {log.timestamp}
                      </span>
                      <span>
                        <strong>IP:</strong> {log.ipAddress}
                      </span>
                      <span>
                        <strong>Log ID:</strong> {log.id}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
