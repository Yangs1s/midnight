import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArrowIcon from "@/app/(main)/manage-list/_components/icons/ArrowIcon";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ProfileBiz() {
  const router = useRouter();

  const onSubmit = () => {
    // router.push(`/manage-list/profile-add?step=2`);
    router.replace("/manage-list/profile-add?step=2");
  };

  return (
    <div className="h-dvh bg-[#1b1b1e] text-white">
      <div className="mb-8 flex items-center justify-between">
        <div className={"flex items-center"}>
          <Link href="/manage-list">
            <ArrowLeft className="w-6 h-6 mr-4" />
          </Link>
          <span className="font-semibold">[채팅방명] 프로필 등록</span>
        </div>

        <div className={"text-primary font-semibold text-[15px]"}>임시저장</div>
      </div>

      <div>
        <div
          className={
            "py-4 flex items-center justify-between border-b border-white/10 mb-7"
          }
        >
          <div className={"text-[14px] font-semibold"}>업체정보</div>
          <div className={"flex items-center gap-2 relative"}>
            <div className={"absolute w-full h-[2px] bg-[#313131]"}></div>
            <div
              className={
                "flex items-center justify-center w-6 h-6 bg-primary text-[14px] rounded-full z-[1]"
              }
            >
              1
            </div>
            <div
              className={
                "flex items-center justify-center w-6 h-6 bg-[#313131] text-[14px] rounded-full z-[1]"
              }
            >
              2
            </div>
            <div
              className={
                "flex items-center justify-center w-6 h-6 bg-[#313131] text-[14px] rounded-full z-[1]"
              }
            >
              3
            </div>
            <div
              className={
                "flex items-center justify-center w-6 h-6 bg-[#313131] text-[14px] rounded-full z-[1]"
              }
            >
              4
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-2 mb-2"}>
          <div className={"text-[24px] font-semibold"}>사업자 정보(필수)</div>
          <div className={"text-[14px] text-white/60"}>
            선택한 사업자 정보로 기업정보가 등록됩니다.
          </div>
        </div>

        <form className={"rounded-[4px]"} onSubmit={onSubmit}>
          <div
            className={
              "p-4 w-full bg-[#302F35] flex items-center justify-between rounded-t-[4px]"
            }
          >
            <div className={"text-[15px] font-semibold"}>달리는 토끼</div>
            <div>
              <ArrowIcon
                className={"-rotate-90 text-white w-4 h-4 stroke-[3]"}
              />
            </div>
          </div>

          <div
            className={
              "p-4 pb-5 flex flex-col gap-4 bg-[#26252A] rounded-b-[4px]"
            }
          >
            <div>
              <Label
                htmlFor="name"
                className="block mb-2 text-[13px] font-semibold"
              >
                담당자명(필수)
              </Label>
              <Input
                id="name"
                className="w-full bg-[#302F35] px-4 py-3"
                placeholder="담당자명을 입력해주세요"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block mb-2">
                연락처(필수)
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  className="w-full bg-[#302F35] px-4 py-3"
                  placeholder="연락받으실 전화번호를 입력해주세요"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block mb-2">
                카카오톡 아이디
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  className="w-full bg-[#302F35] px-4 py-3"
                  placeholder="아이디를 입력해주세요"
                />
              </div>
            </div>
          </div>

          <Button
            type="button"
            className="w-full mt-4 text-[14px] font-semibold"
            onClick={() => {
              router.push("/manage-list/profile-add?step=2");
            }}
          >
            다음
          </Button>
        </form>
      </div>
    </div>
  );
}
