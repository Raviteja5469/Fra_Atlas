import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MapPin, AlertCircle } from "lucide-react"

const updates = [
  {
    type: "data",
    icon: MapPin,
    title: "New villages mapped in Madhya Pradesh",
    description: "234 villages added to FRA Atlas",
    time: "2 hours ago",
    badge: "Data Update",
  },
  {
    type: "policy",
    icon: FileText,
    title: "MoTA circular on CFR implementation",
    description: "New guidelines for Community Forest Rights",
    time: "5 hours ago",
    badge: "Policy",
  },
  {
    type: "alert",
    icon: AlertCircle,
    title: "Verification pending for Odisha claims",
    description: "1,234 claims awaiting district approval",
    time: "1 day ago",
    badge: "Alert",
  },
]

export function RecentUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Updates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {updates.map((update, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <update.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-semibold leading-tight">{update.title}</h4>
                <Badge variant="secondary" className="shrink-0 text-xs">
                  {update.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{update.description}</p>
              <p className="text-xs text-muted-foreground">{update.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
