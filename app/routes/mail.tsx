import { Outlet } from "@remix-run/react"
import { Sidebar } from "~/components/sidebar"
import { TopNav } from "~/components/top-nav"

export default function MailLayout() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex">
        <Outlet />
      </div>
    </div>
  )
}

