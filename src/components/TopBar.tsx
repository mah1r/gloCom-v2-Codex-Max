import { Bell, Circle, Command, Search } from "lucide-react";
import { Badge } from "./Badge";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 mb-6 flex items-center justify-between rounded-3xl border border-border bg-surface-100/80 px-5 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface-200 px-3 py-2">
          <Search className="h-4 w-4 text-neutral" />
          <input
            placeholder="Search across agents, chats, tickets..."
            className="w-72 bg-transparent text-sm text-slate-100 placeholder:text-neutral focus:outline-none"
          />
          <span className="flex items-center gap-1 rounded-xl bg-white/5 px-2 py-1 text-[11px] uppercase tracking-wide text-neutral">
            <Command size={12} />
            K
          </span>
        </div>
        <Badge tone="available" icon={<Circle className="h-3 w-3 fill-success/20 text-success" />}>
          Available
        </Badge>
        <Badge tone="ghost" className="bg-white/5 text-slate-200">
          IN
        </Badge>
        <Badge tone="ghost" className="bg-white/5 text-slate-200">
          OUT
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="hidden md:inline-flex">
          Customize
        </Button>
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface-200 px-3 py-2">
          <Avatar name="Mahir Mehanovic" size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">Mahir Mehanovic</p>
            <p className="text-xs text-neutral">Lead • Miami</p>
          </div>
        </div>
      </div>
    </header>
  );
}
