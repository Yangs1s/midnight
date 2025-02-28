import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CollapsibleChatListProps {
  title: string;
  children: React.ReactNode;
}

export default function ChoiceChatCollapsible({
  title,
  children,
}: CollapsibleChatListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerClassName =
    "rounded-full w-12 py-2  bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-[1px] data-[state=active]:border-white data-[state=active]:relative data-[state=active]:top-[1px] text-sm text-[#A5A5A5]";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div
        className={`${isOpen ? "border-none bg-[#26252A] rounded-[8px] mb-2" : "border-b border-b-white/10 bg-transparent"}`}
      >
        <div className="flex items-center justify-between w-full p-4">
          <p className="text-lg font-semibold text-white text-nowrap">
            {title}
          </p>
          {isOpen && (
            <Tabs defaultValue="all" className="w-full !ml-4">
              <TabsList className="w-full bg-transparent flex justify-start gap-2 !p-0">
                <TabsTrigger value="all" className={triggerClassName}>
                  전체
                </TabsTrigger>
                <TabsTrigger value="1" className={triggerClassName}>
                  강남구
                </TabsTrigger>
                <TabsTrigger value="2" className={triggerClassName}>
                  송파구
                </TabsTrigger>
                <TabsTrigger value="3" className={triggerClassName}>
                  서초구
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}
          <CollapsibleTrigger>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
        </div>
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
            <CollapsibleContent forceMount>
              <div>{children}</div>
            </CollapsibleContent>
          </motion.div>
        </AnimatePresence>
      </div>
    </Collapsible>
  );
}
