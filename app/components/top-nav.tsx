import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Search } from "lucide-react"

interface TopNavProps {
  folder: string
}

export function TopNav({ folder }: TopNavProps) {
  // Capitalize first letter of folder name
  const displayFolder = folder.charAt(0).toUpperCase() + folder.slice(1)

  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{displayFolder}</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            All mail
          </Button>
          <Button variant="ghost" size="sm">
            Unread
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9" />
        </div>
      </div>
    </div>
  )
}
