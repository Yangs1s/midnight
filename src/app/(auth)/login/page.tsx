"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/app/(auth)/login/_components/login-form";
import Image from "next/image";

type LoginFormValues = {
  username: string;
  password: string;
  autoLogin: boolean;
};

export default function LoginPage() {
  const [selectedTab, setSelectedTab] = useState<"normal" | "business">(
    "normal"
  );

  function onSubmit(data: LoginFormValues) {
    console.log(data);
  }

  return (
    <main className="min-h-screen bg-[#1b1b1e] text-white p-4">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" className="text-white">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-medium text-center flex-1 mr-6">로그인</h1>
      </div>

      <div className="w-full max-w-md mx-auto">
        <div className="flex mb-8 border-b border-gray-800">
          <button
            onClick={() => setSelectedTab("normal")}
            className={`flex-1 pb-2 text-center ${
              selectedTab === "normal"
                ? "text-primary border-b-2 border-primary"
                : "text-[#999999]"
            }`}
          >
            일반 회원
          </button>
          <button
            onClick={() => setSelectedTab("business")}
            className={`flex-1 pb-2 text-center ${
              selectedTab === "business"
                ? "text-primary border-b-2 border-primary"
                : "text-[#999999]"
            }`}
          >
            기업 회원
          </button>
        </div>

        <LoginForm
          key={selectedTab}
          onSubmit={onSubmit}
          userType={selectedTab}
        />

        <div className="flex justify-center space-x-4 mt-8">
          <button className="">
            <Image
              src="/icon/apple.svg"
              alt="Apple"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </button>
          <button className="">
            <Image
              src="/icon/google.svg"
              alt="Google"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </button>
          <button className="">
            <Image
              src="/icon/kakao.svg"
              alt="KakaoTalk"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </button>
          <button className="">
            <Image
              src="/icon/naver.svg"
              alt="Naver"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex justify-center space-x-2 text-sm text-[#999999] mt-8">
          <a href="/non-member" className="hover:text-white">
            비회원 로그인
          </a>
          <span>|</span>
          <a href="/signup-type" className="hover:text-white">
            회원가입
          </a>
          <span>|</span>
          <a href="/forgot" className="hover:text-white">
            아이디/비번 찾기
          </a>
        </div>
      </div>
    </main>
  );
}
