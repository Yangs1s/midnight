"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateInnerContents = () => {
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
          <p>내부 컨텐츠 작성하기</p>
        </div>
      </div>
      <div className={"px-5 mt-6"}>
        {/*에디터는 설치 안했습니다. 뭘쓸지 몰라서 그냥 이미지 대체*/}
        <Image src={"/editor-sample.svg"} alt={"샘플"} width={100} className={"w-full"} height={400} />
      </div>
      <div className={"flex justify-between p-4 mt-2"}>
        <div className={"flex gap-2 items-center"}>
          <Image src={"/uploadImg.svg"} alt={"샘플"} className={"aspect-square"} width={24} height={24} />
          <p className={"text-white/80 text-[14px]"}>채팅방 노출 미리보기</p>
        </div>
        <button>
          <Image src={"/icon/upIcon2.svg"} alt={"샘플"} width={100} className={"w-full"} height={400} />
        </button>
      </div>
      <div className={"px-4 py-4"}>
        <Button className={"w-full"}>등록하기</Button>
      </div>
    </div>
  );
};

export default CreateInnerContents;
