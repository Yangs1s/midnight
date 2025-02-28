import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface CollapsibleChatListProps {
  badge: string;
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function CollapsibleWidget({
  badge,
  title,
  trigger,
  children,
}: CollapsibleChatListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full p-4 border-b border-white/20">
          <div className="flex items-center gap-2 w-full">
            <div className="flex justify-center items-center px-2 py-0.5 bg-primary rounded-[4px]">
              <p className="text-[13px] font-semibold">{badge}</p>
            </div>
            <p className="text-[16px] font-semibold">{title}</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {trigger}
      </CollapsibleTrigger>
      <AnimatePresence initial={false}>
        <motion.div
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <CollapsibleContent forceMount>{children}</CollapsibleContent>
        </motion.div>
      </AnimatePresence>
    </Collapsible>
  );
}
