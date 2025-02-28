"use client";

import Link from "next/link";
import { ArrowLeft, Camera, ImageIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Toggle from "@/app/(main)/manage-list/_components/toggle";
import ArrowIcon from "@/app/(main)/manage-list/_components/icons/ArrowIcon";

const job = {
  image: "/images.jpeg",
  region: "서울 강남구",
  title: "공고 제목이 들어갑니다",
  name: "JYP 2팀 홍길동",
  salaryType: "월급",
  salary: "500만원",
};

export default function ProfileAdd() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(
    "/random-profile.png"
  );
  const [toggleActive, setToggleActive] = useState<boolean>(false);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        setIsDrawerOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    router.push(`/manage-list`);
  };

  return (
    <div className="h-dvh bg-[#1b1b1e] text-white">
      <div className="mb-8 flex items-center justify-between">
        <div className={"flex items-center"}>
          <Link href="/manage-list/profile-add?step=1">
            <ArrowLeft className="w-6 h-6 mr-4" />
          </Link>
          <span className="font-semibold">[채팅방명] 프로필 등록</span>
        </div>

        <div className={"text-primary font-semibold text-[15px]"}>임시저장</div>
      </div>

      <div className={"pb-[90px]"}>
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
                "flex items-center justify-center w-6 h-6 bg-[#313131] text-[14px] rounded-full z-[1]"
              }
            >
              1
            </div>
            <div
              className={
                "flex items-center justify-center w-6 h-6 bg-primary text-[14px] rounded-full z-[1]"
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

        <div className={"flex flex-col w-full gap-6"}>
          <div className="relative flex items-center justify-center">
            <div
              className={`w-24 h-24 rounded-full ${
                selectedImage ? "" : "bg-[#26252a]"
              } flex items-center justify-center overflow-hidden`}
            >
              <Image
                src={selectedImage}
                alt="Selected profile"
                width={72}
                height={72}
                className="w-full h-full object-cover"
              />

              <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                  <button className="absolute bottom-0 left-[calc(50%+20px)] w-8 h-8 bg-primary rounded-full p-0 flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="p-0 bg-[#26252a] border-none">
                  <div className="px-4 pt-6 pb-5">
                    <h3 className="text-lg font-semibold mb-4">
                      프로필 사진 업로드
                    </h3>
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
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageSelect}
                    accept="image/*"
                    className="hidden"
                  />
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          <div className={"flex items-center justify-end gap-1"}>
            <Checkbox />
            <Label className={"text-[15px] text-white/60 font-normal"}>
              내 기본 프로필 정보 입력
            </Label>
          </div>

          <form onSubmit={onSubmit} className={"flex flex-col gap-6"}>
            <div className={"relative"}>
              <Label
                htmlFor="nickname"
                className="block mb-2 text-[13px] font-semibold"
              >
                닉네임(필수)
              </Label>
              <Input
                id="nickname"
                className="w-full bg-[#26252A] px-4 py-3 pr-12"
                placeholder="닉네임을 입력해주세요"
              />
              <div
                className={
                  "absolute right-[16px] top-[44px] text-white/30 text-[12px]"
                }
              >
                0/12
              </div>

              <div
                className={
                  "bg-[#985CFF26] px-4 py-2 mt-2 rounded-[4px] text-[13px]"
                }
              >
                채팅방과 관련된 닉네임으로 적으시는 것을 권장합니다.
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="block mb-2">
                연락처(필수)
              </Label>
              <Input
                id="phone"
                className="w-full bg-[#26252A] px-4 py-3"
                placeholder="연락받으실 전화번호를 입력해주세요"
              />
            </div>

            <div>
              <Label htmlFor="bio" className="block mb-2">
                자기소개(필수)
              </Label>
              <Textarea
                className={
                  "bg-[#26252A] outline-0 border-0 resize-none h-[250px] placeholder:text-white/30 text-[14px]"
                }
                placeholder={"자기소개 내용을 입력해주세요."}
              />
            </div>

            <div>
              <Label htmlFor="kakao" className="block mb-2">
                카카오톡 아이디
              </Label>
              <Input
                id="kakao"
                className="w-full bg-[#26252A] px-4 py-3"
                placeholder="카카오톡 아이디를 입력해주세요"
              />
            </div>

            <div>
              <Label htmlFor="insta" className="block mb-2">
                인스타그램 아이디
              </Label>
              <Input
                id="insta"
                className="w-full bg-[#26252A] px-4 py-3"
                placeholder="인스타그램 아이디를 입력해주세요"
              />
            </div>

            <div
              className={
                "bg-[#26252A] rounded-[4px] flex items-center justify-between p-4"
              }
            >
              <div className={"text-[15px]"}>채용 공고 연결 활성화</div>
              <Toggle
                id={"connect"}
                isChecked={toggleActive}
                onChange={() => {
                  setToggleActive(!toggleActive);
                }}
              />
            </div>

            <div className={"flex flex-col gap-4"}>
              <div className={"flex items-center justify-between"}>
                <div className={"font-semibold"}>연결한 모집공고</div>
                <Link
                  href={"/manage-list/profile-add/job"}
                  className={
                    "flex items-center rounded-full px-3 py-2 bg-[#26252A]"
                  }
                >
                  <span className={"text-[12px]"}>공고선택</span>
                  <ArrowIcon className={"w-3 h-3 -rotate-90 stroke-[3]"} />
                </Link>
              </div>

              {job && (
                <div className={"w-full flex flex-col gap-4"}>
                  <div
                    className={
                      "bg-[#26252A] px-4 py-3 rounded-[8px] flex items-center gap-3"
                    }
                  >
                    <Image
                      src={job.image}
                      alt={""}
                      width={40}
                      height={40}
                      className={"w-10 h-10 rounded-[12px]"}
                    />

                    <div className={"flex flex-col gap-1"}>
                      <div className={"text-[11px] text-white/60"}>
                        {job.region}
                      </div>

                      <div className={"font-semibold"}>{job.title}</div>

                      <div className={"flex items-center gap-1 text-[12px]"}>
                        <div className={"font-medium text-white/60"}>
                          {job.name}
                        </div>
                        <div className={"text-white/30"}>·</div>
                        <div className={"text-primary font-semibold"}>
                          {job.salaryType}
                        </div>
                        <div
                          className={"text-white/70 font-semibold text-[12px]"}
                        >
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={"flex items-center gap-2"}>
              <Button
                type="button"
                className="w-full mt-4 text-[14px] bg-[#35343A]"
                onClick={() => {
                  router.push(`/manage-list/profile-add?step=1`);
                }}
              >
                이전
              </Button>
              <Button
                type="button"
                className="w-full mt-4 text-[14px] font-semibold"
                onClick={() => {
                  router.push(`/manage-list`);
                }}
              >
                다음
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
