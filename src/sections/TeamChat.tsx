import { Flame, Hash, MessageCircle, Mic, Paperclip, Phone, Pin, Send, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { teamActivity, teamDirects, teamThreads } from "../data/mock";

export function TeamChat() {
  return (
    <section className="grid gap-4 lg:grid-cols-[320px_1fr_320px]">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </section>
  );
}

function LeftColumn() {
  return (
    <div className="space-y-4">
      <Card title="Team rooms" subtitle="Channels">
        <div className="space-y-2">
          {teamThreads.map((thread, idx) => (
            <motion.div
              key={thread.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-white">{thread.title}</p>
                <p className="text-xs text-neutral flex items-center gap-1">
                  <Hash className="h-3 w-3" />
                  {thread.channel}
                </p>
                <p className="text-xs text-neutral/80">
                  {thread.last.name} • {thread.last.role} • {thread.last.time}
                </p>
                <p className="text-xs text-slate-100">{thread.last.text}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                {thread.unread > 0 && (
                  <Badge tone="warning" className="px-2 py-0.5 text-[11px]">
                    {thread.unread} new
                  </Badge>
                )}
                <Button variant="ghost" className="px-2 py-1 text-xs text-neutral hover:text-white">
                  Open
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      <Card title="Direct messages" subtitle="Internal">
        <div className="space-y-2">
          {teamDirects.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-200 text-sm font-semibold text-white">
                  {person.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                  <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border border-surface bg-surface-200">
                    <span
                      className="block h-3 w-3 rounded-full"
                      style={{ background: presenceColor(person.status) }}
                    />
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{person.name}</p>
                  <p className="text-xs text-neutral">{person.role}</p>
                  <p className="text-[11px] text-neutral/80">{person.last}</p>
                </div>
              </div>
              <Badge tone="ghost" className="bg-white/5 text-xs">
                Ping
              </Badge>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MiddleColumn() {
  return (
    <Card title="Channel" subtitle="#reliability">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="available" icon={<Users className="h-3 w-3" />}>
            12 online
          </Badge>
          <Badge tone="ghost">Pinned • 4</Badge>
          <Badge tone="warning" icon={<Flame className="h-3 w-3" />}>
            Incident room
          </Badge>
        </div>
        <div className="rounded-3xl border border-border bg-surface-200/60 p-4">
          <div className="mb-3 flex items-center justify-between text-sm text-neutral">
            <div className="flex items-center gap-2">
              <Pin className="h-4 w-4 text-accent" />
              Pinned: Postmortem template
            </div>
            <span className="flex items-center gap-1 text-xs">
              <Sparkles className="h-3 w-3 text-accent2" />
              AI summary ready
            </span>
          </div>
          <div className="space-y-3">
            {teamActivity.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.actor + idx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-border bg-white/5 p-3"
              >
                <p className="text-sm text-slate-100">{item.actor}</p>
                <p className="text-xs text-neutral">{item.action}</p>
                <p className="text-[11px] text-neutral/80">{item.ago} ago</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface-100 px-3 py-2 text-sm text-neutral">
              <MessageCircle className="h-4 w-4 text-accent" />
              Draft a reply...
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" icon={<Send className="h-4 w-4" />}>
                Send
              </Button>
              <Button variant="ghost" icon={<Mic className="h-4 w-4" />}>
                Huddle
              </Button>
              <Button variant="ghost" icon={<Paperclip className="h-4 w-4" />}>
                Attach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function RightColumn() {
  return (
    <div className="space-y-4">
      <Card title="Presence" subtitle="Who is online">
        <div className="space-y-2">
          {teamDirects.slice(0, 3).map((person) => (
            <div key={person.name} className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100">
              <span className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: presenceColor(person.status) }}
                  aria-hidden
                />
                {person.name}
              </span>
              <Badge tone="ghost" className="bg-white/5 text-xs">
                {person.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Quick actions" subtitle="Move faster">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" icon={<Phone className="h-4 w-4" />}>
            Call incident bridge
          </Button>
          <Button variant="ghost" icon={<Sparkles className="h-4 w-4 text-accent2" />}>
            Summarize thread
          </Button>
        </div>
      </Card>
    </div>
  );
}

function presenceColor(status: string) {
  if (status === "available") return "rgb(var(--success))";
  if (status === "busy") return "rgb(var(--warning))";
  if (status === "away") return "rgb(var(--neutral))";
  return "rgb(var(--neutral))";
}
