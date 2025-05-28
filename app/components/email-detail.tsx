import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Reply, ReplyAll, Forward, MoreHorizontal, Archive, Trash2, Clock, AlertCircle } from "lucide-react"
import type { Email } from "~/lib/mock-data"

interface EmailDetailProps {
  email: Email
}

export function EmailDetail({ email }: EmailDetailProps) {
  const initials = email.sender
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="flex-1 p-6 border-r">
      <div className="max-w-4xl mx-auto">
        <div className="flex-column items-center justify-between mb-6">
          <div className="flex items-center justify-between pb-1 gap-4 border-b">
            {/* Action buttons on the left */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Archive className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <AlertCircle className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">
                <Reply className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ReplyAll className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Forward className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 border-b">
            <Avatar>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{email.sender}</h2>
              <p className="text-sm text-muted-foreground">{email.subject}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            {email.date} • {email.time}
          </p>
          {email.replyTo && <p className="text-sm text-muted-foreground">Reply-To: {email.replyTo}</p>}
        </div>

        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-sm leading-relaxed">{email.content}</div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <div className="flex gap-2">
            <Button>
              <Reply className="h-4 w-4 mr-2" />
              Reply
            </Button>
            <Button variant="outline">
              <ReplyAll className="h-4 w-4 mr-2" />
              Reply All
            </Button>
            <Button variant="outline">
              <Forward className="h-4 w-4 mr-2" />
              Forward
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

