import {
  AlertCircle,
  AtSign,
  BookOpen,
  Check,
  Clock,
  Flame,
  Inbox,
  Mail,
  MapPin,
  Phone,
  Reply,
  Send,
  Sparkles,
  Tag
} from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { emailProfile, myEmails, unassignedEmails } from "../data/mock";

const thread = [
  { from: "Ava Patel", time: "12:04 PM", body: "Can you confirm the updated seats count and taxes for May?" },
  { from: "You", time: "12:06 PM", body: "Absolutely. We see 24 active seats. Taxes follow FL rules; attaching a PDF." }
];

export function Email() {
  return (
    <section className="grid gap-4 lg:grid-cols-[360px_1fr_320px]">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </section>
  );
}

function LeftColumn() {
  const headerStats = [
    { label: "Assigned", value: myEmails.length, tone: "available" },
    { label: "Unassigned", value: unassignedEmails.length, tone: "warning" },
    { label: "SLA", value: "92%", tone: "success" }
  ];

  return (
    <div className="space-y-4">
      <Card title="Work queue" subtitle="Email overview">
        <div className="mb-3 grid grid-cols-3 gap-2 text-sm">
          {headerStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-white/5 px-3 py-2">
              <p className="text-neutral">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-dashed border-border bg-white/5 px-3 py-2 text-sm text-neutral">
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            Smart triage on
          </span>
          <Badge tone="ghost">Rules • 3</Badge>
        </div>
      </Card>

      <Card title="My Emails" subtitle="Assigned to me">
        <div className="space-y-2">
          {myEmails.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border bg-white/5 px-3 py-6 text-center text-neutral">
              No assigned conversations
            </p>
          )}
          {myEmails.map((item, idx) => (
            <EmailRow key={item.subject + idx} item={item} />
          ))}
        </div>
      </Card>

      <Card title="Unassigned" subtitle="Waiting pickup">
        <div className="space-y-2">
          {unassignedEmails.map((item, idx) => (
            <EmailRow key={item.subject + idx} item={item} muted />
          ))}
        </div>
      </Card>
    </div>
  );
}

function MiddleColumn() {
  return (
    <Card title="Conversation" subtitle="Email thread">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="available" icon={<Inbox className="h-3 w-3" />}>
            Inbox • Priority
          </Badge>
          <Badge tone="ghost" className="bg-white/5 text-slate-200">
            SLA 45m
          </Badge>
          <Badge tone="warning" icon={<AlertCircle className="h-3 w-3" />}>
            Waiting reply
          </Badge>
        </div>
        <div className="rounded-3xl border border-border bg-surface-200/60 p-4">
          <div className="mb-3 flex items-center justify-between text-sm text-neutral">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              Delivery incomplete — May billing
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Updated 12:06 PM
            </span>
          </div>
          <div className="space-y-3">
            {thread.map((msg, idx) => (
              <motion.div
                key={msg.time + idx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-border bg-white/5 p-3"
              >
                <div className="flex items-center justify-between text-sm text-neutral">
                  <span className="text-slate-100">{msg.from}</span>
                  <span>{msg.time}</span>
                </div>
                <p className="mt-1 text-sm text-slate-100">{msg.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button variant="secondary" icon={<Reply className="h-4 w-4" />}>
              Reply
            </Button>
            <Button icon={<Send className="h-4 w-4" />}>Send update</Button>
            <Button variant="ghost" className="text-sm" icon={<Flame className="h-4 w-4 text-accent" />}>
              Escalate
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function RightColumn() {
  return (
    <div className="space-y-4">
      <Card title="Profile" subtitle="CRM snapshot">
        <div className="space-y-3 text-sm text-slate-100">
          <Row icon={<Inbox className="h-4 w-4 text-neutral" />} label="Queue" value="Priority inbox" />
          <Row icon={<AtSign className="h-4 w-4 text-neutral" />} label="Email" value={emailProfile.email} />
          <Row icon={<Phone className="h-4 w-4 text-neutral" />} label="Phone" value={emailProfile.phone} />
          <Row icon={<MapPin className="h-4 w-4 text-neutral" />} label="Location" value={emailProfile.location} />
          <Row icon={<Tag className="h-4 w-4 text-neutral" />} label="Tags" value={emailProfile.tags.join(", ")} />
        </div>
      </Card>

      <Card title="CRM integration" subtitle="Live sync">
        <div className="space-y-2 text-sm text-slate-100">
          <div className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2">
            <span className="flex items-center gap-2 text-neutral">
              <BookOpen className="h-4 w-4 text-accent" />
              CRM Ticket
            </span>
            <Badge tone="available">Linked</Badge>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2">
            <span className="flex items-center gap-2 text-neutral">
              <Sparkles className="h-4 w-4 text-accent2" />
              AI draft
            </span>
            <Badge tone="ghost">Ready</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}

function EmailRow({
  item,
  muted = false
}: {
  item: (typeof myEmails)[number];
  muted?: boolean;
}) {
  const tone = priorityTone(item.priority);
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface-200 text-xs font-semibold uppercase text-white">
            {item.from.slice(0, 2)}
          </span>
          <div>
            <p className="font-semibold">{item.subject}</p>
            <p className={clsx("text-[11px]", muted ? "text-neutral/70" : "text-neutral")}>{item.from}</p>
          </div>
        </div>
        <p className="text-[12px] text-neutral">{item.preview}</p>
        <div className="flex items-center gap-2 text-[11px] text-neutral">
          <Clock className="h-3 w-3" />
          {item.ago} ago
          <Badge tone={tone} className="px-2 py-0.5 text-[11px]">
            {item.priority}
          </Badge>
        </div>
      </div>
      <Badge tone={muted ? "ghost" : "available"} className="bg-white/5 text-xs">
        Assign
      </Badge>
    </motion.div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2">
      <span className="flex items-center gap-2 text-neutral">
        {icon}
        {label}
      </span>
      <span className="text-slate-100">{value}</span>
    </div>
  );
}

function priorityTone(priority: string) {
  if (priority === "High") return "warning";
  if (priority === "Low") return "ghost";
  return "available";
}
