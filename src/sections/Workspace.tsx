import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  SendHorizonal,
  Sparkles,
  User2
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { myMessages, unassignedMessages } from "../data/mock";

export function Workspace() {
  return (
    <section className="grid gap-4 lg:grid-cols-[340px_1fr_340px]">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </section>
  );
}

function LeftColumn() {
  const queues = [
    { label: "Live Chat", count: 6, tone: "available" },
    { label: "SMS", count: 3, tone: "warning" },
    { label: "Facebook", count: 1, tone: "warning" },
    { label: "WhatsApp", count: 2, tone: "warning" }
  ];

  return (
    <div className="space-y-4">
      <Card title="Messaging" subtitle="Queues & sessions">
        <div className="space-y-2">
          {queues.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100"
            >
              <span>{item.label}</span>
              <Badge tone={item.tone as any}>{item.count}</Badge>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Assigned to me" subtitle="Live messaging only">
        <div className="space-y-2">
          {myMessages.map((item, idx) => (
            <motion.div
              key={item.subject + idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100"
            >
              <div>
                <p className="font-semibold">{item.from}</p>
                <p className="text-neutral">{item.subject}</p>
                <p className="text-[11px] text-neutral/80">Updated {item.ago} ago</p>
                <p className="text-[11px] text-neutral/80">{item.preview}</p>
              </div>
              {channelBadge(item.channel)}
            </motion.div>
          ))}
          {myMessages.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border bg-white/5 px-3 py-6 text-center text-neutral">
              No assigned conversations
            </p>
          )}
        </div>
      </Card>

      <Card title="Unassigned" subtitle="Messaging only">
        <div className="space-y-2">
          {unassignedMessages.map((item, idx) => (
            <motion.div
              key={item.subject + idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100"
            >
              <div>
                <p className="font-semibold">{item.from}</p>
                <p className="text-neutral">{item.subject}</p>
                <p className="text-[11px] text-neutral/80">Updated {item.ago} ago</p>
                <p className="text-[11px] text-neutral/80">{item.preview}</p>
              </div>
              {channelBadge(item.channel)}
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MiddleColumn() {
  return (
    <Card title="Conversation" subtitle="Live session">
      <div className="flex h-[520px] flex-col items-center justify-center gap-3 text-center text-neutral">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white/5">
          <MessageSquare className="h-8 w-8 text-accent" />
        </div>
        <p className="text-lg text-slate-100">No messages</p>
        <p className="max-w-sm text-sm">
          Use the palette (⌘K) to assign yourself the next best conversation or pull from unassigned.
        </p>
        <div className="flex items-center gap-2">
          <Quick icon={<Check className="h-4 w-4" />} label="Take next best" />
          <Quick icon={<ArrowRight className="h-4 w-4" />} label="Assign to me" />
        </div>
      </div>
    </Card>
  );
}

function RightColumn() {
  return (
    <Card title="Profile" subtitle="CRM snapshot">
      <div className="space-y-3 text-sm text-slate-100">
        <Row icon={<User2 className="h-4 w-4 text-neutral" />} label="Name" value="M104 • Lead" />
        <Row icon={<Phone className="h-4 w-4 text-neutral" />} label="Phone" value="+1 23456789" />
        <Row icon={<Mail className="h-4 w-4 text-neutral" />} label="Email" value="mahir.mehanovic@bicomsystems.com" />
        <Row icon={<MapPin className="h-4 w-4 text-neutral" />} label="Location" value="Miami" />
        <Row icon={<Sparkles className="h-4 w-4 text-neutral" />} label="Tags" value={<Badge tone="ghost">High intent</Badge>} />
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.1em] text-neutral">Quick actions</p>
        <div className="flex flex-wrap gap-2">
          <Quick icon={<MessageCircle className="h-4 w-4" />} label="Start chat" />
          <Quick icon={<SendHorizonal className="h-4 w-4" />} label="Send email" />
        </div>
      </div>
    </Card>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white/5 px-3 py-2">
      <span className="flex items-center gap-2 text-neutral">
        {icon}
        {label}
      </span>
      <span className="truncate text-slate-100">{value}</span>
    </div>
  );
}

function Quick({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-accent hover:text-white"
    >
      {icon}
      {label}
    </motion.button>
  );
}

function channelBadge(channel: string) {
  const toneMap: Record<string, any> = {
    "Live Chat": "available",
    SMS: "warning",
    Facebook: "ghost",
    WhatsApp: "ghost"
  };
  return (
    <Badge tone={toneMap[channel] ?? "ghost"} className="bg-white/5 text-xs capitalize">
      {channel}
    </Badge>
  );
}
