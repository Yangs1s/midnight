"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlobalHeader({
  title,
  className,
  backUrl,
}: {
  title: string;
  className?: string;
  backUrl?: string;
}) {
  const router = useRouter();
  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
      return;
    }
    router.back();
  };
  return (
    <header
      className={`flex items-center py-4 border-b border-white/10 ${className}`}
    >
      <div className="flex items-center gap-2" onClick={handleBack}>
        <ArrowLeft className="w-6 h-6 mr-4" />
        <span className="text-lg">{title}</span>
      </div>
    </header>
  );
}
