import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./components/Button";
import { PillTabs } from "./components/PillTabs";
import { SideNav } from "./components/SideNav";
import { TopBar } from "./components/TopBar";
import { Agents } from "./sections/Agents";
import { Voice } from "./sections/Voice";
import { Wallboard } from "./sections/Wallboard";
import { Workspace } from "./sections/Workspace";

const tabs = [
  { id: "wallboard", label: "Wallboard" },
  { id: "agents", label: "Agents" },
  { id: "workspace", label: "Workspace" },
  { id: "voice", label: "Voice" }
];

const tabToNav: Record<string, string> = {
  wallboard: "dashboard",
  agents: "contacts",
  workspace: "messaging",
  voice: "voice"
};

const navToTab: Record<string, string> = {
  voice: "voice",
  messaging: "workspace",
  email: "workspace",
  teamchat: "workspace",
  contacts: "agents",
  dashboard: "wallboard",
  sms: "workspace",
  meeting: "workspace"
};

export default function App() {
  const [active, setActive] = useState("wallboard");
  const [navActive, setNavActive] = useState(tabToNav["wallboard"]);

  const handleTabChange = (id: string) => {
    setActive(id);
    setNavActive(tabToNav[id] ?? id);
  };

  const handleNavChange = (id: string) => {
    setNavActive(id);
    const mapped = navToTab[id];
    setActive(mapped ?? id);
  };

  return (
    <div className="min-h-screen bg-surface pl-[90px] pr-6">
      <SideNav active={navActive} onChange={handleNavChange} />
      <div className="mx-auto w-full py-8">
        <TopBar />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <PillTabs tabs={tabs} active={active} onChange={handleTabChange} />
          <div className="flex items-center gap-2">
            <Button variant="secondary">Customize layout</Button>
            <Button>Launch cmd palette</Button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {active === "wallboard" && <Wallboard />}
            {active === "agents" && <Agents />}
            {active === "workspace" && <Workspace />}
            {active === "voice" && <Voice />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
