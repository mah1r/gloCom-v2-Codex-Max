import { Headset, LayoutDashboard, Mail, MessageSquare, MessagesSquare, Settings, Smartphone, Users, Video } from "lucide-react";
import { clsx } from "clsx";

const nav = [
  { id: "voice", label: "Voice", icon: Headset },
  { id: "messaging", label: "Messaging", icon: MessageSquare },
  { id: "email", label: "Email", icon: Mail },
  { id: "teamchat", label: "Team chat", icon: MessagesSquare },
  { id: "contacts", label: "Contacts", icon: Users },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "sms", label: "SMS", icon: Smartphone },
  { id: "meeting", label: "Meeting", icon: Video }
];

interface SideNavProps {
  active: string;
  onChange: (id: string) => void;
}

export function SideNav({ active, onChange }: SideNavProps) {
  return (
    <aside className="grain glass fixed left-0 top-0 flex h-screen w-[82px] flex-col justify-between border-r border-border px-2 py-4">
      <div className="flex flex-col gap-2">
        <div className="glass mx-2 mb-3 rounded-2xl px-3 py-2 text-center text-xs font-semibold text-white">
          glo
        </div>
        {nav.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={clsx(
                "group relative flex h-12 items-center justify-center rounded-2xl text-slate-300 transition-all hover:bg-white/5",
                isActive && "bg-white/10 text-white shadow-soft"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute left-[80px] z-20 origin-left scale-0 rounded-full bg-ink-soft px-3 py-1 text-xs text-white shadow-soft transition-all group-hover:scale-100">
                {item.label}
              </span>
              {isActive && <span className="absolute right-2 h-1.5 w-1.5 rounded-full bg-accent" />}
            </button>
          );
        })}
      </div>
      <button className="group flex h-12 items-center justify-center rounded-2xl text-slate-300 transition-all hover:bg-white/5">
        <Settings className="h-5 w-5" />
        <span className="pointer-events-none absolute left-[80px] z-20 origin-left scale-0 rounded-full bg-ink-soft px-3 py-1 text-xs text-white shadow-soft transition-all group-hover:scale-100">
          Settings
        </span>
      </button>
    </aside>
  );
}
