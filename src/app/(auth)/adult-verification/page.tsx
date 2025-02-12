"use client";

import AdultVerificationNotice from "@/app/(auth)/adult-verification/_components/adult-verification-notice";
import PhoneVerification from "@/app/(auth)/adult-verification/_components/phone-verification";
import TermsAgreement from "@/app/(auth)/adult-verification/_components/terms-agreement";
import { useState } from "react";

type Props = {
  searchParams: {
    step: string;
  };
};

export default function VerificationPage({ searchParams }: Props) {
  const step = searchParams.step;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleVerificationStart() {
    setIsDrawerOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white">
      {step === "1" ? (
        <>
          <AdultVerificationNotice
            onVerificationStart={handleVerificationStart}
          />
          <TermsAgreement open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
        </>
      ) : (
        <PhoneVerification />
      )}
    </div>
  );
}
