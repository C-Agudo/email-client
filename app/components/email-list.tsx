"use client"

import { Link, useParams } from "@remix-run/react"
import { cn } from "~/lib/utils"
import { Badge } from "~/components/ui/badge"
import type { Email } from "~/lib/mock-data"

interface EmailListProps {
  emails: Email[]
  folder: string
}

export function EmailList({ emails, folder }: EmailListProps) {
  const params = useParams()
  const selectedEmailId = params.emailId

  return (
    <div className="overflow-auto flex-1">
      <div className="divide-y">
        {emails.map((email) => (
          <Link
            key={email.id}
            to={`/mail/${folder}/${email.id}`}
            className={cn("block p-4 hover:bg-muted/50 transition-colors", selectedEmailId === email.id && "bg-muted")}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("font-medium text-sm truncate", !email.read && "font-semibold")}>
                    {email.sender}
                  </span>
                  <span className="text-xs text-muted-foreground">{email.time}</span>
                </div>

                <div className="mb-2">
                  <p className={cn("text-sm truncate", !email.read && "font-medium")}>{email.subject}</p>
                  <p className="text-xs text-muted-foreground truncate mt-1">{email.preview}</p>
                </div>

                {email.tags && email.tags.length > 0 && (
                  <div className="flex gap-1 flex-wrap">
                    {email.tags.map((tag) => (
                      <Badge key={tag} className={tag === "" ? "bg-primary text-white" : "bg-secondary text-black"}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {!email.read && <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1 flex-shrink-0" />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
