"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, File, Info, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Camera } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CompanyAccountForm() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleImageSelect() {
    setIsDrawerOpen(false);
  }

  function handleClick() {
    router.push("/signup?type=company&step=2");
  }

  return (
    <div className="px-5">
      <header className="py-4 flex items-center gap-4">
        <button className="p-1">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">사업자 회원가입</h1>
      </header>

      <div className="space-y-4 mb-12">
        <h2 className="text-2xl font-bold leading-relaxed">사업자 정보 입력</h2>
        <p className="text-sm text-gray-500 !mt-0">
          회원 확인 및 가입을 진행합니다.
        </p>
      </div>

      <Label className="text-sm">업종</Label>
      <Input className="mt-2 mb-4" placeholder="업종을 입력해주세요" />

      <Label className="text-sm">사업자등록증</Label>

      <FileItem className="mt-2" name="사업자등록증.jpg" size="1.2MB" />
      <button
        className="mt-2 w-full bg-[#26252A] rounded-md h-[48px] flex items-center justify-center"
        onClick={() => setIsDrawerOpen(true)}
      >
        파일 업로드
        <Upload className="w-4 h-4 ml-2" />
      </button>

      <AlertBox
        color="red"
        text="기업회원(인증)으로의 전환은 영업일 기준 1~2일 내로 처 리됩니다. 전환 전까지는 일반 회원의 권한으로 활동하실 수 있습니다."
      />

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="p-0 bg-[#26252a] border-none">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">프로필 사진 업로드</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center gap-2 p-4 bg-[#1b1b1e] h-24 rounded-lg"
              >
                <ImageIcon className="w-6 h-6" />
                <span>사진 보관함</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-[#1b1b1e] h-24 rounded-lg">
                <Camera className="w-6 h-6" />
                <span>사진 촬영</span>
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageSelect}
        accept="image/*"
        className="hidden"
      />

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Button type="submit" className="w-full" onClick={handleClick}>
          인증하기
        </Button>
      </div>
    </div>
  );
}

function AlertBox({ color, text }: { color: "red" | "violet"; text: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-[#985CFF26] p-4 rounded-sm mt-4",
        color === "red" ? "bg-[#FF5C5C26]" : "bg-[#985CFF26]"
      )}
    >
      <Info className="w-10 h-10" />
      <p className="text-sm text-white">{text}</p>
    </div>
  );
}

function FileItem({
  name,
  size,
  className,
}: {
  name: string;
  size: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#26252A] h-[48px] rounded-md flex items-center justify-between px-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <File className="w-4 h-4" />
        <p className="text-base">{name}</p>
        <p className="text-xs text-gray-500">{size}</p>
      </div>
      <button className="p-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
