"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { useRouter } from "next/navigation";

const CreateNoticeSetting = () => {
  const route = useRouter();
  return (
    <div
      className={"max-w-[470px] pb-[42px] overflow-y-auto right-0 mx-auto w-full h-full fixed left-0 top-0 bg-[#1c1c1c] z-40"}>
      <div className={"flex justify-between p-4"}>
        <div className={"flex items-center gap-3"}>
          <button onClick={() => {
            route.back();
          }}>
            <ArrowLeft />
          </button>
          <p>채팅방 공지 관리</p>
        </div>
      </div>
      <div className={"px-4"}>
        <NoticeButton
          title="공지 내용이 들어갑니다!"
          time="12:00"
          body="알림 내용"
          actionButton={<div>
            <Image src={"/icon/right-arrow.svg"} alt={"샘플"} width={24} height={24} />
          </div>}
        />
      </div>
      <div className={"px-5 mt-6"}>
        {/*에디터는 설치 안했습니다. 뭘쓸지 몰라서 그냥 이미지 대체*/}
        <Image src={"/editor-sample.svg"} alt={"샘플"} width={100} className={"w-full"} height={400} />
      </div>
      <div className={"px-4 py-4"}>
        <Button className={"w-full"}>등록하기</Button>
      </div>
    </div>
  );
};

export default CreateNoticeSetting;
