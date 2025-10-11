"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"

export function MapFilters() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Filter className="h-4 w-4" />
          Filters & Search
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm">
            State
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="mp">Madhya Pradesh</SelectItem>
              <SelectItem value="od">Odisha</SelectItem>
              <SelectItem value="tg">Telangana</SelectItem>
              <SelectItem value="tr">Tripura</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="district" className="text-sm">
            District
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="district">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="d1">District 1</SelectItem>
              <SelectItem value="d2">District 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="block" className="text-sm">
            Block
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="block">
              <SelectValue placeholder="Select block" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Blocks</SelectItem>
              <SelectItem value="b1">Block 1</SelectItem>
              <SelectItem value="b2">Block 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="village-search" className="text-sm">
            Search Village
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="village-search" placeholder="Enter village name..." className="pl-9" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="claim-status" className="text-sm">
            Claim Status
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="claim-status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="granted">Granted</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tribal-group" className="text-sm">
            Tribal Group
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="tribal-group">
              <SelectValue placeholder="Select group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Groups</SelectItem>
              <SelectItem value="g1">Group 1</SelectItem>
              <SelectItem value="g2">Group 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
