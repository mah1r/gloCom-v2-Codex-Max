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
