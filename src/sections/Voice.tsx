import { Phone, PhoneCall, PhoneForwarded, Voicemail } from "lucide-react";
import { Card } from "../components/Card";
import { history } from "../data/mock";
import { Badge } from "../components/Badge";

export function Voice() {
  return (
    <section className="grid gap-4 lg:grid-cols-[320px_1fr]">
      <Card title="Dialer" subtitle="T9 + presets">
        <div className="grid grid-cols-3 gap-3 text-center">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((digit) => (
            <button
              key={digit}
              className="flex h-16 items-center justify-center rounded-2xl border border-border bg-white/5 text-xl font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              {digit}
            </button>
          ))}
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 py-3 text-lg font-semibold text-ink shadow-soft">
          <Phone className="h-5 w-5" />
          Call
        </button>
      </Card>

      <Card title="History" subtitle="Last touchpoints">
        <div className="flex items-center gap-3">
          <Badge tone="ghost" className="bg-white/5">
            All
          </Badge>
          <Badge tone="ghost" className="bg-white/5">
            Missed
          </Badge>
          <Badge tone="ghost" className="bg-white/5">
            Dialed
          </Badge>
        </div>
        <div className="mt-4 space-y-2">
          {history.map((item) => (
            <div
              key={`${item.number}-${item.at}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-white/5 px-3 py-2 text-sm text-slate-100"
            >
              <div className="flex items-center gap-3">
                <Icon type={item.type} />
                <div>
                  <p className="font-semibold">{item.number}</p>
                  <p className="text-[11px] text-neutral">
                    {item.at} • {item.duration}
                  </p>
                </div>
              </div>
              <Badge tone="ghost" className="bg-white/5">
                {item.type}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function Icon({ type }: { type: string }) {
  if (type === "in") return <PhoneCall className="h-5 w-5 text-success" />;
  if (type === "out") return <PhoneForwarded className="h-5 w-5 text-accent" />;
  if (type === "missed") return <Voicemail className="h-5 w-5 text-warning" />;
  return <Phone className="h-5 w-5 text-neutral" />;
}
