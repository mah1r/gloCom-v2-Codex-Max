import { CalendarClock, Clock3, Copy, Link2, Plus, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { meetings } from "../data/mock";

export function Meetings() {
  const upcoming = meetings.filter((m) => m.status === "upcoming");
  const past = meetings.filter((m) => m.status === "past");
  const next = upcoming[0];

  return (
    <section className="grid gap-4 lg:grid-cols-[340px_1fr_320px]">
      <LeftColumn upcoming={upcoming} past={past} />
      <MiddleColumn meeting={next} />
      <RightColumn />
    </section>
  );
}

function LeftColumn({ upcoming, past }: { upcoming: typeof meetings; past: typeof meetings }) {
  return (
    <div className="space-y-4">
      <Card title="Upcoming" subtitle="Video meetings">
        <div className="space-y-2">
          {upcoming.map((meet, idx) => (
            <MeetingRow key={meet.title} meeting={meet} delay={idx * 0.05} />
          ))}
          {upcoming.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border bg-white/5 px-3 py-6 text-center text-neutral">
              No upcoming meetings
            </p>
          )}
        </div>
      </Card>

      <Card title="Recent" subtitle="Past sessions">
        <div className="space-y-2">
          {past.map((meet, idx) => (
            <MeetingRow key={meet.title} meeting={meet} delay={idx * 0.05} muted />
          ))}
        </div>
      </Card>
    </div>
  );
}

function MeetingRow({
  meeting,
  muted = false,
  delay = 0
}: {
  meeting: (typeof meetings)[number];
  muted?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start justify-between rounded-2xl border border-border bg-white/5 px-3 py-2"
    >
      <div>
        <p className="text-sm font-semibold text-white">{meeting.title}</p>
        <p className={muted ? "text-xs text-neutral/70" : "text-xs text-neutral"}>{meeting.time}</p>
        <p className="text-[11px] text-neutral/80">
          Host: {meeting.host} • {meeting.duration}
        </p>
      </div>
      <Badge tone={muted ? "ghost" : "available"} className="bg-white/5 text-xs">
        {muted ? "View" : "Join"}
      </Badge>
    </motion.div>
  );
}

function MiddleColumn({ meeting }: { meeting: (typeof meetings)[number] | undefined }) {
  if (!meeting) {
    return (
      <Card title="Meeting" subtitle="No selection">
        <div className="flex h-[320px] flex-col items-center justify-center gap-2 text-neutral">
          <CalendarClock className="h-10 w-10 text-accent" />
          <p className="text-slate-100">No meeting selected</p>
          <p className="text-sm">Pick one from the left or schedule a new one.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Next up" subtitle={meeting.title}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="available" icon={<Clock3 className="h-3 w-3" />}>
            {meeting.time}
          </Badge>
          <Badge tone="ghost" className="bg-white/5 text-xs">
            {meeting.duration}
          </Badge>
          <Badge tone="warning" icon={<Sparkles className="h-3 w-3" />}>
            Prep AI notes
          </Badge>
        </div>
        <div className="rounded-3xl border border-border bg-surface-200/60 p-4">
          <div className="mb-3 flex items-center justify-between text-sm text-neutral">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              Host: <span className="text-slate-100">{meeting.host}</span>
            </span>
            <span className="text-xs text-neutral">{meeting.link}</span>
          </div>
          <div className="space-y-2 text-sm text-slate-100">
            <p className="text-xs uppercase tracking-[0.08em] text-neutral">Attendees</p>
            <div className="flex flex-wrap gap-2">
              {meeting.attendees.map((name) => (
                <Badge key={name} tone="ghost" className="bg-white/5">
                  {name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button>Join video</Button>
            <Button variant="secondary" icon={<Copy className="h-4 w-4" />}>
              Copy link
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
      <Card title="Quick actions" subtitle="Video">
        <div className="flex flex-wrap gap-2">
          <Button icon={<Plus className="h-4 w-4" />}>Start instant meeting</Button>
          <Button variant="secondary" icon={<CalendarClock className="h-4 w-4" />}>
            Schedule
          </Button>
          <Button variant="ghost" icon={<Sparkles className="h-4 w-4 text-accent2" />}>
            AI agenda
          </Button>
        </div>
      </Card>
      <Card title="Best practices" subtitle="Video hygiene">
        <ul className="space-y-2 text-sm text-neutral">
          <li>• Share links 5 minutes before start</li>
          <li>• Record incident calls by default</li>
          <li>• Capture action items in chat</li>
        </ul>
      </Card>
    </div>
  );
}
