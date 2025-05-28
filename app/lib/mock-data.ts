export interface Email {
  id: string
  sender: string
  subject: string
  preview: string
  content: string
  time: string
  date: string
  read: boolean
  tags?: string[]
  folder?: string
  archived?: boolean
  deleted?: boolean
  spam?: boolean
  labels?: string[]
  replyTo?: string
}

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
    content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    time: "Oct 22, 2023, 9:00:00 AM",
    date: "Oct 22, 2023",
    read: false,
    tags: ["meeting", "work", "important"],
    replyTo: "williamsmith@example.com",
  },
  {
    id: "2",
    sender: "Alice Smith",
    subject: "Re: Project Update",
    preview:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I believe we're on track for the upcoming milestones.",
    content: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I believe we're on track for the upcoming milestones.

I have a few minor suggestions that could enhance the overall presentation. Let's discuss these during our next team meeting.

Best regards, Alice`,
    time: "over 1 year ago",
    date: "Oct 20, 2022",
    read: true,
    tags: ["work", "important"],
  },
  {
    id: "3",
    sender: "Bob Johnson",
    subject: "Weekend Plans",
    preview:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

If you're interested, let me know and we can plan the details. The weather looks perfect for a hiking adventure!

Cheers, Bob`,
    time: "about 2 years ago",
    date: "Oct 15, 2021",
    read: true,
    tags: ["personal"],
    labels: ["social"],
  },
  {
    id: "4",
    sender: "Emily Davis",
    subject: "Re: Question about Budget",
    preview:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget breakdown and noticed some areas that need clarification.",
    content: `I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget breakdown and noticed some areas that need clarification.

Could we schedule a meeting to go over these details? I want to ensure we're aligned on the financial aspects before moving forward.

Best regards, Emily`,
    time: "about 2 years ago",
    date: "Oct 10, 2021",
    read: false,
    tags: ["budget"],
  },
  {
    id: "5",
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview:
      "I have an important announcement to make during our team meeting. Please make sure to attend as this will impact everyone.",
    content: `I have an important announcement to make during our team meeting. Please make sure to attend as this will impact everyone.

The announcement concerns some exciting changes coming to our department that will enhance our workflow and productivity.

See you at the meeting, Michael`,
    time: "about 2 years ago",
    date: "Oct 8, 2021",
    read: true,
    tags: ["announcement", "important"],
    labels: ["updates"],
  },
  {
    id: "6",
    sender: "Sarah Brown",
    subject: "Re: Feedback on Proposal",
    preview:
      "Thank you for your feedback on the proposal. I've made the necessary changes and attached the updated version.",
    content: `Thank you for your feedback on the proposal. I've made the necessary changes and attached the updated version.

I believe the revisions address all the concerns you raised. Please review and let me know if there are any additional modifications needed.

Best regards, Sarah`,
    time: "about 2 years ago",
    date: "Oct 5, 2021",
    read: true,
    tags: ["proposal", "feedback"],
  },
]

