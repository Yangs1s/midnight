"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const InnerContents = ({ id }: { id: string }) => {
  const images = Array.from({ length: 2 }).map(
    (_, i) => `https://picsum.photos/250/300?random=${i}`,
  );
  const router = useRouter();
  console.log(id);
  return (
    <div className={` ${id !== "contents" ? "" : "mt-20"}`}>
      <div className={`flex  flex-col gap-4 overflow-y-scroll relative ${id !== "contents" ? "h-[80vh]" : ""}`}>
        <div className={"text-[14px] px-4 leading-tight tracking-[0.56px]"}>
          주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을
          비방/음해/조롱,<br /> 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱,
          사회적 정서에
          반하는
          내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우
          운영
          정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이
          제한
          될
          수 있으니 주의해주세요.
        </div>
        <div className={"flex px-4 flex-col gap-2"}>
          {
            images.map((i, idx) => (
              <div className={"w-full flex flex-col gap-2"} key={idx}>
                <Image src={i} className={"w-full aspect-square rounded-[8px]"} width={400} height={250} alt={"pic"} />
              </div>
            ))
          }
        </div>
        <div
          className={`${id === "contents" ? "fixed px-4 max-w-[470px] mx-auto w-full left-0 right-0" : "sticky  w-full"} bottom-0   bg-[#262626] pt-4`}>
          <Button className={"w-full bg-[#302F36]"} onClick={() => {
            if (id === "contents") {
              router.back();
            }
          }}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InnerContents;
