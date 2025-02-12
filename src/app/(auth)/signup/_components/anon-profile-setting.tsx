"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Link2 } from "lucide-react";
import { useState } from "react";

export default function AnonProfileSetting() {
  const [error, setError] = useState(false);

  function handleClick() {
    setError(true);
  }

  return (
    <div className="px-5">
      <header className="py-4 flex items-center gap-4">
        <button className="p-1">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">프로필 닉네임 설정</h1>
      </header>

      <div className="space-y-4 mb-12">
        <h2 className="text-2xl font-bold leading-relaxed">
          나를 표현할 수 있는 <br /> 닉네임을 넣어주세요!
        </h2>
      </div>
      <Label>닉네임</Label>
      <Input className="mt-2" placeholder="조용한 크림파스타" />
      {error && (
        <p className="text-sm font-medium text-destructive mt-2">
          닉네임을 입력해주세요.
        </p>
      )}
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 bg-[#26252a] rounded-full mx-auto mt-4"
      >
        <Link2 className="w-4 h-4" />
        <span className="text-sm">닉네임 랜덤 배정</span>
      </button>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Button type="submit" className="w-full" onClick={handleClick}>
          가입완료
        </Button>
      </div>
    </div>
  );
}
