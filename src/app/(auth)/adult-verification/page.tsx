"use client";

import { useEffect } from "react";
import AdultVerificationNotice from "@/app/(auth)/adult-verification/_components/adult-verification-notice";
import PhoneVerification from "@/app/(auth)/adult-verification/_components/phone-verification";
import GoToLoginHome from "@/app/(auth)/_components/go-to-login-home";
import AuthVerificationNumber from "@/app/(auth)/adult-verification/_components/auth-verification-number";

type Props = {
  searchParams: {
    type: 'user' | 'company';
    step: string;
  };
};

export default function VerificationPage({ searchParams }: Props) {
  const type = searchParams.type;
  const step = searchParams.step;

  useEffect(() => {
    if (step === "1") {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
    } else {
      document.body.style.backgroundColor = "#1b1b1e";
      document.body.style.color = "#FFFFFF";
    }
    return () => {
      document.body.style.backgroundColor = "#1b1b1e";
      document.body.style.color = "#FFFFFF";
    };
  }, [step]);

  return (
    <div>
      {step === "1" ? (
        <AdultVerificationNotice type={type}/>
      ) : step === "2" ? (
        <PhoneVerification type={type}/>
      ) : step === "3" ? (
        <AuthVerificationNumber type={type}/>
      ) : (
        <GoToLoginHome />
      )}
    </div>
  );
}
