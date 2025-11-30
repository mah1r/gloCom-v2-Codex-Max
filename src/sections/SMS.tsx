import { MessageSquare, Phone, Send, Sparkles, User2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { smsInbox, smsThread } from "../data/mock";

export function SMS() {
  const active = smsInbox[0];
  return (
    <section className="grid gap-4 lg:grid-cols-[320px_1fr_320px]">
      <LeftColumn />
      <MiddleColumn contact={active} />
      <RightColumn contact={active} />
    </section>
  );
}

function LeftColumn() {
  return (
    <Card title="SMS Inbox" subtitle="Single channel">
      <div className="space-y-2">
        {smsInbox.map((chat, idx) => (
          <motion.div
            key={chat.number}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2"
          >
            <div>
              <p className="text-sm font-semibold text-white">{chat.name}</p>
              <p className="text-xs text-neutral">{chat.number}</p>
              <p className="text-xs text-neutral/80">{chat.last}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge tone="ghost" className="bg-white/5 text-[11px]">
                {chat.label}
              </Badge>
              <span className="text-[11px] text-neutral">{chat.ago}</span>
              {chat.unread > 0 && (
                <Badge tone="warning" className="px-2 py-0.5 text-[11px]">
                  {chat.unread} new
                </Badge>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

function MiddleColumn({ contact }: { contact: (typeof smsInbox)[number] }) {
  return (
    <Card title="Conversation" subtitle={contact.name}>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge tone="available" icon={<Phone className="h-3 w-3" />}>
            SMS only
          </Badge>
          <Badge tone="ghost" className="bg-white/5 text-xs">
            {contact.label}
          </Badge>
        </div>
        <div className="rounded-3xl border border-border bg-surface-200/60 p-4">
          <div className="space-y-3">
            {smsThread.map((msg, idx) => (
              <motion.div
                key={msg.time + idx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-white/5 p-3"
              >
                <div className="flex items-center justify-between text-xs text-neutral">
                  <span className="text-slate-100">
                    {msg.from} {msg.direction === "out" && "(you)"}
                  </span>
                  <span>{msg.time}</span>
                </div>
                <p className="text-sm text-slate-100">{msg.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface-100 px-3 py-2 text-sm text-neutral">
              <MessageSquare className="h-4 w-4 text-accent" />
              Type a quick reply...
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" icon={<Send className="h-4 w-4" />}>
                Send SMS
              </Button>
              <Button variant="ghost" icon={<Sparkles className="h-4 w-4 text-accent2" />}>
                Suggest reply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function RightColumn({ contact }: { contact: (typeof smsInbox)[number] }) {
  return (
    <div className="space-y-4">
      <Card title="Contact" subtitle="Details">
        <div className="space-y-2 text-sm text-slate-100">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-200 text-sm font-semibold text-white">
              {contact.name
                .split(" ")
                .map((c) => c[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <p className="font-semibold">{contact.name}</p>
              <p className="text-xs text-neutral">{contact.number}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="ghost">{contact.label}</Badge>
            <Badge tone="available" icon={<User2 className="h-3 w-3" />}>
              Contact
            </Badge>
          </div>
        </div>
      </Card>
      <Card title="Ops" subtitle="Actions">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" icon={<Phone className="h-4 w-4" />}>
            Call back
          </Button>
          <Button variant="ghost" icon={<Sparkles className="h-4 w-4 text-accent" />}>
            Template
          </Button>
        </div>
      </Card>
    </div>
  );
}
