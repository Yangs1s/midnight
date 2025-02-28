"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ExplainWord = () => {
  const route = useRouter();
  return (
    <div className={"w-full h-full"}>
      <div className={"p-6 flex h-full flex-col  gap-9"}>
        <div className={"flex justify-between"}>
          <h3 className={"text-[20px]"}>용어 설명</h3>
          <Image src={"/icon/xIcon.svg"} alt={"x"} width={24} height={24} />
        </div>
        <div className={"h-full overflow-y-auto flex gap-4 flex-col"}>
          <div className={"w-full"}>
            <Image className={"w-full"} src={"/word-notice.svg"} alt={"유저"} width={16} height={16} />
          </div>
          <div className={"w-full flex h-full flex-col gap-4"}>
            <div className={"h-full"}>
              모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여
              환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여
              환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여
              환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여
              환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여
              환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써
              하되, 정당한 보상을 지급하여야정당한 보상을 지급하여야정당한 보상을 지급하여야정당한 보상을 지급하여야정당한 보상을 지급하여야정당한 보상을 지급하여야
            </div>

          </div>
        </div>
        <div>
          <Button className={"w-full bg-[#3E3E42]"} onClick={() => {
            route.back();
          }}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExplainWord;
