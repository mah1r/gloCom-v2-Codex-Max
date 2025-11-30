export const kpis = [
  { label: "Today Volume", value: "842", delta: "+18%", tone: "success" },
  { label: "SLA", value: "94%", delta: "+2.1%", tone: "success" },
  { label: "Avg Handle", value: "03:21", delta: "-12%", tone: "success" },
  { label: "CSAT", value: "4.7", delta: "+0.3", tone: "success" }
];

export const queues = [
  { name: "Voice", load: 68, wait: "01:12", backlog: 14 },
  { name: "Messaging", load: 54, wait: "00:43", backlog: 9 },
  { name: "Email", load: 37, wait: "02:04", backlog: 22 }
];

export const agents = [
  { name: "Alex Moran", title: "Supervisor", presence: "available", skills: ["EN", "Billing"], aht: 3.2 },
  { name: "Priya Shah", title: "Senior Agent", presence: "busy", skills: ["ES", "Voice"], aht: 4.1 },
  { name: "Jordan Lee", title: "Agent", presence: "available", skills: ["EN", "Chat"], aht: 3.6 },
  { name: "Maya Ito", title: "Agent", presence: "away", skills: ["FR", "Email"], aht: 5.1 },
  { name: "Finn O'Neill", title: "QA", presence: "available", skills: ["EN", "QA"], aht: 2.8 }
];

export const myMessages = [
  { from: "Jordan Lee", subject: "Product question", ago: "3m", channel: "Live Chat", preview: "Can I upgrade seats mid-cycle?" },
  { from: "ACME Ops", subject: "SMS: outage alert", ago: "12m", channel: "SMS", preview: "Service degraded in EU-West" }
];

export const unassignedMessages = [
  { from: "New User", subject: "No subject", ago: "8m", channel: "Live Chat", preview: "Need help with setup" },
  { from: "Whiter Mark", subject: "Correct Option Message", ago: "14m", channel: "Facebook", preview: "Can you share pricing?" },
  { from: "Mahir", subject: "hello", ago: "22m", channel: "WhatsApp", preview: "Take a minute right now" },
  { from: "Ben Jakett", subject: "No subject", ago: "35m", channel: "Live Chat", preview: "Need to reset my PIN" },
  { from: "16465894168", subject: "Take a minute right now", ago: "1h", channel: "SMS", preview: "Follow-up on shipment status" }
];

export const history = [
  { number: "+38761888888", type: "in", at: "2:29 PM", duration: "00:07" },
  { number: "+38761888888", type: "out", at: "9:34 AM", duration: "00:00" },
  { number: "035100100", type: "missed", at: "9:27 AM", duration: "00:03" }
];

export const myEmails = [
  {
    from: "Ava Patel",
    email: "ava.patel@acme.io",
    subject: "Invoice question on May billing",
    preview: "Can you confirm the updated seats count and taxes?",
    ago: "12m",
    priority: "High"
  },
  {
    from: "Leo Martinez",
    email: "leo@productsuite.com",
    subject: "Onboarding: need SSO instructions",
    preview: "We'd like to connect our Okta environment this week.",
    ago: "26m",
    priority: "Normal"
  }
];

export const unassignedEmails = [
  {
    from: "Mailer Daemon",
    email: "mailer-daemon@googlemail.com",
    subject: "Delivery incomplete",
    preview: "Message not delivered to support@example.com because...",
    ago: "4m",
    priority: "Low"
  },
  {
    from: "Chris Howell",
    email: "chris@zenly.app",
    subject: "Plan upgrade approval",
    preview: "Finance approved. Please proceed with change today.",
    ago: "18m",
    priority: "High"
  },
  {
    from: "Support Request",
    email: "user1293@unknown.net",
    subject: "Address not found",
    preview: "Address not found for ticket follow-up.",
    ago: "22m",
    priority: "Low"
  },
  {
    from: "Status Alerts",
    email: "alerts@status.io",
    subject: "Delivery status notification",
    preview: "Technical details: SMTP 550 5.1.1",
    ago: "40m",
    priority: "Normal"
  }
];

export const emailProfile = {
  name: "Mahir Mehanovic",
  phone: "+1 23456789",
  email: "mahir.mehanovic@bicomsystems.com",
  company: "Doe Company",
  role: "Lead",
  location: "Miami",
  tags: ["Email", "Priority", "CRM linked"]
};

export const teamThreads = [
  {
    title: "Onboarding playbook",
    channel: "#success",
    unread: 3,
    last: { name: "Ava Thompson", role: "CSM", time: "2m ago", text: "Shared updated checklist for May cohort" }
  },
  {
    title: "Voice incidents",
    channel: "#reliability",
    unread: 1,
    last: { name: "Mahir Mehanovic", role: "Lead", time: "8m ago", text: "EU-West recovered. Postmortem at 4pm." }
  },
  {
    title: "Sales handoffs",
    channel: "#revenue",
    unread: 0,
    last: { name: "Noah Carter", role: "AE", time: "21m ago", text: "Handoff: Zenly (24 seats) wants SSO" }
  }
];

export const teamDirects = [
  { name: "Mahir Mehanovic", role: "Lead", status: "available", last: "Let me sync with support and revert." },
  { name: "Liam Johnson", role: "Engineer", status: "busy", last: "Pushed a fix to reduce retries." },
  { name: "Olivia Davis", role: "CS Ops", status: "away", last: "Out for lunch, back in 30." },
  { name: "Ethan Wilson", role: "QA", status: "available", last: "Validated on staging. Green." }
];

export const teamActivity = [
  { actor: "Ava Thompson", action: "uploaded playbook.pdf to #success", ago: "5m" },
  { actor: "Mahir Mehanovic", action: "pinned postmortem notes in #reliability", ago: "12m" },
  { actor: "Liam Johnson", action: "commented in Voice incidents", ago: "19m" },
  { actor: "Olivia Davis", action: "started a huddle in #ops", ago: "32m" }
];

export const smsInbox = [
  {
    name: "Harper Reed",
    number: "+1 (305) 555-1180",
    label: "VIP",
    last: "Can you text me the onboarding doc?",
    ago: "2m",
    unread: 2
  },
  { name: "No Caller ID", number: "+1 (718) 555-0042", label: "Unknown", last: "Stop. Wrong number?", ago: "7m", unread: 0 },
  {
    name: "Mahir Mehanovic",
    number: "+1 (754) 555-1444",
    label: "Lead",
    last: "Need SMS template for Miami campaign",
    ago: "15m",
    unread: 1
  },
  { name: "Alexis Turner", number: "+1 (929) 555-2288", label: "Customer", last: "Got the tracking link. Thanks!", ago: "24m", unread: 0 }
];

export const smsThread = [
  { from: "Harper Reed", direction: "in", time: "12:01 PM", text: "Can you text me the onboarding doc?" },
  { from: "You", direction: "out", time: "12:02 PM", text: "On it. Do you need the pricing appendix too?" },
  { from: "Harper Reed", direction: "in", time: "12:03 PM", text: "Just the doc. Thanks!" }
];

export const meetings = [
  {
    title: "Weekly Reliability Sync",
    time: "Today • 3:00 PM",
    duration: "45m",
    host: "Mahir Mehanovic",
    attendees: ["Ava Thompson", "Liam Johnson", "Olivia Davis"],
    link: "meet.glo/rel-123",
    status: "upcoming"
  },
  {
    title: "Customer Handoff: Zenly",
    time: "Today • 5:30 PM",
    duration: "30m",
    host: "Ethan Wilson",
    attendees: ["Mahir Mehanovic", "Noah Carter"],
    link: "meet.glo/zenly",
    status: "upcoming"
  },
  {
    title: "Postmortem: Voice EU-West",
    time: "Yesterday • 4:00 PM",
    duration: "60m",
    host: "Mahir Mehanovic",
    attendees: ["Harper Reed", "Liam Johnson", "Ava Thompson"],
    link: "meet.glo/pm-euw",
    status: "past"
  }
];
