"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ChatRoomSetting = () => {
  const [values, setValues] = React.useState({
    roomName: "",
    roomDescription: "",
  });

  // HTMLInputElement와 HTMLTextAreaElement를 모두 받도록 설정
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const route = useRouter();
  return (
    <div
      className={"max-w-[470px] pb-[42px] overflow-y-auto right-0 mx-auto w-full h-full fixed left-0 top-0 bg-[#1c1c1c] z-40"}>
      <div className={"w-full h-full"}>
        <div className={"flex justify-between p-4"}>
          <div className={"flex items-center gap-3"}>
            <button onClick={() => {
              route.back();
            }}>
              <ArrowLeft />
            </button>
            <p>채팅방 정보</p>
          </div>
          <Image src={"/icon/vector.svg"} alt={"vector"} width={24} height={24} />
        </div>
        {/*데일리톡 설명 제목*/}
        <div className="px-5 py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="px-1">채팅방명</h3>
          </div>
          <div className="flex flex-col justify-between items-center gap-4">
            <textarea
              name="roomName"
              value={values.roomName}
              onChange={handleChange}
              rows={3}
              className="resize-none w-full bg-[#302F36] rounded-[12px] px-4 py-[10px]"
            />
            <div className={"w-full"}>
              <h6 className="text-[12px]">채팅방 목록 소개글</h6>
              <Input
                name="roomDescription"
                value={values.roomDescription}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
        </div>
        {/*file*/}
        <div className={"px-5 py-4 flex justify-between"}>
          <div className={"flex items-center gap-3"}>
            <Image src={"/uploadImg.svg"} alt={"vector"} width={24} height={24} />
            <p className={"text-white/80"}>채팅방 배경 업로드</p>
          </div>
          <Image src={"/icon/upload.svg"} alt={"upload"} width={24} height={24} />
        </div>
        <div className={"py-4 px-5"}>
          <Button className={"w-full"}>저장하기</Button>
        </div>

        <div className={"px-5 py-4 flex justify-between flex-col gap-2"}>
          <Link href={"/chat/choice-2/detail/create-inner-contents"}
                className={"h-[42px] flex items-center justify-between bg-[#302F36] px-4 py-[10px] rounded-[4px]"}>
            <p className={"text-[14px]"}>내부 칸텐츠 작성</p>
            <Image src={"/round-arrow.svg"} alt={"left"} width={24} height={24} />
          </Link>
          <Link href={"/chat/choice-2/detail/chat-notice-setting"}
                className={"h-[42px]  flex items-center justify-between bg-[#302F36] px-4 py-[10px] rounded-[4px]"}>
            <p className={"text-[14px]"}>채팅방 공지 관리</p>
            <Image src={"/round-arrow.svg"} alt={"left"} width={24} height={24} />
          </Link>
          <Link href={"/chat/choice-2/detail/banned-member"}
                className={"h-[42px] flex items-center justify-between bg-[#302F36] px-4 py-[10px] rounded-[4px]"}>
            <p className={"text-[14px]"}>입장 제한 회원 목록관리</p>
            <Image src={"/round-arrow.svg"} alt={"left"} width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomSetting;
