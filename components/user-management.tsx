"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, UserPlus, Edit, Trash2, Shield, CheckCircle2, XCircle } from "lucide-react"

const mockUsers = [
  {
    id: "USR-001",
    name: "Dr. Rajesh Sharma",
    email: "rajesh.sharma@tribal.mp.gov.in",
    role: "State Admin",
    state: "Madhya Pradesh",
    status: "active",
    lastLogin: "2024-03-18 14:30",
    permissions: ["Full Access", "User Management", "Data Export"],
  },
  {
    id: "USR-002",
    name: "Sunita Verma",
    email: "sunita.verma@balaghat.gov.in",
    role: "District Officer",
    state: "Madhya Pradesh",
    status: "active",
    lastLogin: "2024-03-18 10:15",
    permissions: ["View Data", "Edit Claims", "Generate Reports"],
  },
  {
    id: "USR-003",
    name: "Prakash Nayak",
    email: "prakash@tribalrights.org",
    role: "NGO Partner",
    state: "Odisha",
    status: "active",
    lastLogin: "2024-03-17 16:45",
    permissions: ["View Data", "Submit Feedback"],
  },
  {
    id: "USR-004",
    name: "Meena Patel",
    email: "meena.patel@iifm.ac.in",
    role: "Researcher",
    state: "All States",
    status: "inactive",
    lastLogin: "2024-03-10 09:20",
    permissions: ["View Data", "Export Analytics"],
  },
]

export function UserManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search users by name, email, or ID" className="pl-9" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">State Admin</SelectItem>
                <SelectItem value="district">District Officer</SelectItem>
                <SelectItem value="ngo">NGO Partner</SelectItem>
                <SelectItem value="researcher">Researcher</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {mockUsers.map((user) => (
          <Card key={user.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{user.name}</h4>
                        {user.status === "active" ? (
                          <Badge variant="default" className="bg-green-600">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Active
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <XCircle className="mr-1 h-3 w-3" />
                            Inactive
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">ID: {user.id}</p>
                    </div>
                    <Badge variant="outline">{user.role}</Badge>
                  </div>

                  <div className="grid gap-2 text-sm md:grid-cols-2">
                    <div>
                      <span className="text-muted-foreground">State:</span>{" "}
                      <span className="font-medium">{user.state}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Login:</span>{" "}
                      <span className="font-medium">{user.lastLogin}</span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs font-medium text-muted-foreground">Permissions:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {user.permissions.map((permission, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      Permissions
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-destructive hover:text-destructive bg-transparent"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
