import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { EmailDetail } from "~/components/email-detail"
import { mockEmails } from "~/lib/mock-data"

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const emailId = params.emailId
  const email = mockEmails.find((e) => e.id === emailId)

  if (!email) {
    throw new Response("Email not found", { status: 404 })
  }

  return json({ email })
}

export default function EmailDetailRoute() {
  const { email } = useLoaderData<typeof loader>()

  return <EmailDetail email={email} />
}

