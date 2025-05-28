import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData, Outlet } from "@remix-run/react"
import { EmailList } from "~/components/email-list"
import { TopNav } from "~/components/top-nav"
import { mockEmails } from "~/lib/mock-data"

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const folder = params.folder || "inbox"

  // Filter emails based on folder
  const filteredEmails = mockEmails.filter((email) => {
    switch (folder) {
      case "inbox":
        return !email.archived && !email.deleted && !email.spam
      case "sent":
        return email.folder === "sent"
      case "drafts":
        return email.folder === "drafts"
      case "junk":
        return email.spam
      case "trash":
        return email.deleted
      case "archive":
        return email.archived
      default:
        return email.labels?.includes(folder)
    }
  })

  return json({ emails: filteredEmails, folder })
}

export default function MailFolder() {
  const { emails, folder } = useLoaderData<typeof loader>()

  return (
    <>
      <div className="flex flex-col w-96 border-r">
        <TopNav folder={folder} />
        <EmailList emails={emails} folder={folder} />
      </div>
      <Outlet />
    </>
  )
}

