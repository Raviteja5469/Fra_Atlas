"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail, Phone, MapPin, Building2 } from "lucide-react"

const mockStakeholders = [
  {
    name: "Dr. Rajesh Sharma",
    role: "State Nodal Officer",
    organization: "Ministry of Tribal Affairs - Madhya Pradesh",
    location: "Bhopal, Madhya Pradesh",
    email: "rajesh.sharma@tribal.mp.gov.in",
    phone: "+91-755-2661234",
    expertise: ["Policy Implementation", "FRA Compliance"],
  },
  {
    name: "Sunita Verma",
    role: "District Coordinator",
    organization: "District Administration - Balaghat",
    location: "Balaghat, Madhya Pradesh",
    email: "sunita.verma@balaghat.gov.in",
    phone: "+91-7632-245678",
    expertise: ["Field Operations", "Community Engagement"],
  },
  {
    name: "Prakash Nayak",
    role: "NGO Representative",
    organization: "Tribal Rights Foundation",
    location: "Koraput, Odisha",
    email: "prakash@tribalrights.org",
    phone: "+91-6852-234567",
    expertise: ["Legal Aid", "Advocacy"],
  },
  {
    name: "Dr. Meena Patel",
    role: "Research Coordinator",
    organization: "Indian Institute of Forest Management",
    location: "Bhopal, Madhya Pradesh",
    email: "meena.patel@iifm.ac.in",
    phone: "+91-755-2775716",
    expertise: ["Forest Management", "Data Analysis"],
  },
]

export function StakeholderDirectory() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by name, organization, or location" className="pl-9" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="government">Government Officials</SelectItem>
                <SelectItem value="ngo">NGO Representatives</SelectItem>
                <SelectItem value="research">Researchers</SelectItem>
                <SelectItem value="field">Field Officers</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="mp">Madhya Pradesh</SelectItem>
                <SelectItem value="od">Odisha</SelectItem>
                <SelectItem value="cg">Chhattisgarh</SelectItem>
                <SelectItem value="jh">Jharkhand</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {mockStakeholders.map((stakeholder, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">{stakeholder.name}</h4>
                  <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>{stakeholder.organization}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>{stakeholder.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href={`mailto:${stakeholder.email}`} className="text-primary hover:underline">
                      {stakeholder.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href={`tel:${stakeholder.phone}`} className="text-primary hover:underline">
                      {stakeholder.phone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {stakeholder.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
