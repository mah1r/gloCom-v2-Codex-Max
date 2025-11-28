import { BadgeCheck, ChevronRight, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { agents } from "../data/mock";

export function Agents() {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral">People</p>
          <h2 className="text-2xl font-semibold text-white">Agents & Skills</h2>
        </div>
        <Badge tone="ghost" className="bg-white/5" icon={<Filter className="h-4 w-4" />}>
          Saved filters
        </Badge>
      </div>

      <Card title="Availability" subtitle="Realtime roster">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/5 text-neutral">
              <tr>
                <th className="px-4 py-3">Agent</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Presence</th>
                <th className="px-4 py-3">Skills</th>
                <th className="px-4 py-3">AHT</th>
                <th className="px-4 py-3 text-right">Insights</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, idx) => (
                <motion.tr
                  key={agent.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-t border-border/60 bg-surface-100/60 transition hover:bg-white/5"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={agent.name} size="sm" />
                      <div>
                        <p className="font-semibold text-white">{agent.name}</p>
                        <p className="text-xs text-neutral">Team: Growth</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-100">{agent.title}</td>
                  <td className="px-4 py-3">
                    <Badge tone={agent.presence as any}>{agent.presence}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {agent.skills.map((skill) => (
                        <Badge key={skill} tone="ghost" className="bg-white/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-100">{agent.aht} min</td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-white">
                      open
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Skill coverage" subtitle="Channels staffed">
          <div className="space-y-3 text-sm text-slate-100">
            <Progress label="Voice" value={82} />
            <Progress label="Messaging" value={76} />
            <Progress label="Email" value={64} />
          </div>
        </Card>
        <Card title="QA health" subtitle="Rolling 7d">
          <div className="space-y-3 text-sm text-slate-100">
            <div className="flex items-center justify-between">
              <span>Pass rate</span>
              <Badge tone="available">96%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Coaching items</span>
              <Badge tone="warning">8</Badge>
            </div>
          </div>
        </Card>
        <Card title="Certifications" subtitle="Up to date">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-8 w-8 text-accent" />
            <p className="text-sm text-slate-100">Security, Compliance, and Product L3 refreshed</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <span className="text-neutral">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
