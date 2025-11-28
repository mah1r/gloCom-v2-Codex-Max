import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Flame, Timer } from "lucide-react";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { kpis, queues } from "../data/mock";

export function Wallboard() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral">Control Center</p>
          <h1 className="text-3xl font-semibold text-white">Live wallboard</h1>
        </div>
        <Badge tone="available" icon={<Activity className="h-4 w-4" />}>
          Live updating
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <motion.div
            key={kpi.label}
            className="glass rounded-3xl p-5"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral">{kpi.label}</p>
              <Badge tone="available" className="bg-accent/10 text-accent">
                {kpi.delta}
              </Badge>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">{kpi.value}</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/5">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent to-accent2" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          title="Queues"
          subtitle="Live load across channels"
          className="lg:col-span-2"
          action={<Badge tone="available">Auto-balancing</Badge>}
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {queues.map((queue) => (
              <div key={queue.name} className="rounded-2xl border border-border bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral">{queue.name}</p>
                  <Badge tone="ghost" className="bg-white/5">
                    wait {queue.wait}
                  </Badge>
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{queue.load}% load</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                    style={{ width: `${queue.load}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-neutral">{queue.backlog} in backlog</p>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Incident radar"
          subtitle="Latency spikes"
          action={<Badge tone="danger">Critical</Badge>}
        >
          <div className="rounded-2xl border border-border bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <Flame className="h-6 w-6 text-accent2" />
              <div>
                <p className="text-sm text-neutral">Email latency</p>
                <p className="text-lg font-semibold text-white">+2400ms</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-neutral">
              <Timer className="h-4 w-4" />
              Auto-remediation rerouting voice to Tier 1, email throttle reduced.
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          title="Performance"
          subtitle="Load vs service"
          className="lg:col-span-2"
          action={
            <Badge tone="ghost" className="bg-white/5">
              15m window
            </Badge>
          }
        >
          <div className="h-48 rounded-2xl border border-border bg-gradient-to-br from-surface-200 to-surface-100">
            <div className="flex h-full items-center justify-center text-neutral">
              Mini area chart placeholder
            </div>
          </div>
        </Card>
        <Card title="Actions" subtitle="What needs you">
          <div className="space-y-3">
            {[
              { label: "Rebalance queues", icon: <ArrowUpRight className="h-4 w-4" /> },
              { label: "Follow up with QA findings", icon: <ArrowUpRight className="h-4 w-4" /> },
              { label: "Assign 3 unowned chats", icon: <ArrowUpRight className="h-4 w-4" /> }
            ].map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-left text-sm text-slate-100 transition hover:border-accent hover:text-white"
              >
                {item.label}
                {item.icon}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
