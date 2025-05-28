"use client"

import { Link, useParams } from "@remix-run/react"
import { cn } from "~/lib/utils"
import {
  Inbox,
  FileText,
  Send,
  Trash2,
  Archive,
  Users,
  Bell,
  MessageSquare,
  ShoppingBag,
  Tag,
  AlertTriangle,
} from "lucide-react"

const folders = [
  { name: "Inbox", icon: Inbox, count: 128, path: "inbox" },
  { name: "Drafts", icon: FileText, count: 9, path: "drafts" },
  { name: "Sent", icon: Send, count: null, path: "sent" },
  { name: "Junk", icon: AlertTriangle, count: 23, path: "junk" },
  { name: "Trash", icon: Trash2, count: null, path: "trash" },
  { name: "Archive", icon: Archive, count: null, path: "archive" },
]

const labels = [
  { name: "Social", icon: Users, count: 972, path: "social" },
  { name: "Updates", icon: Bell, count: 342, path: "updates" },
  { name: "Forums", icon: MessageSquare, count: 128, path: "forums" },
  { name: "Shopping", icon: ShoppingBag, count: 8, path: "shopping" },
  { name: "Promotions", icon: Tag, count: 21, path: "promotions" },
]

export function Sidebar() {
  const params = useParams()
  const currentFolder = params.folder

  return (
    <div className="w-64 border-r bg-muted/10 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Mail</h2>
      </div>

      <nav className="space-y-1">
        {folders.map((folder) => (
          <Link
            key={folder.path}
            to={`/mail/${folder.path}`}
            className={cn(
              "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              currentFolder === folder.path && "bg-accent text-accent-foreground",
            )}
          >
            <div className="flex items-center gap-3">
              <folder.icon className="h-4 w-4" />
              {folder.name}
            </div>
            {folder.count && <span className="text-xs text-muted-foreground">{folder.count}</span>}
          </Link>
        ))}

        <div className="pt-4">
          <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Labels</h3>
          {labels.map((label) => (
            <Link
              key={label.path}
              to={`/mail/${label.path}`}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                currentFolder === label.path && "bg-accent text-accent-foreground",
              )}
            >
              <div className="flex items-center gap-3">
                <label.icon className="h-4 w-4" />
                {label.name}
              </div>
              <span className="text-xs text-muted-foreground">{label.count}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
