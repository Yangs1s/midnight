"use client";
import React, { Fragment } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const profiles = [
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "일반",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "기업",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "일반",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "일반",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "일반",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
  {
    profileUrl: "/icon/sampleProfile.svg",
    memberType: "일반",
    nickname: "신사동 장원영",
    reason: "제한 사유가 노출됩니다.",
    created: "2일 3시간",
  },
];


const BannedMember = () => {
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
          <p>입장 제한 회원 관리</p>
        </div>
      </div>
      <div className={"flex flex-col"}>
        {
          profiles.map((p, i) => {
            return (
              <Fragment key={i}>
                <ProfileItem info={p} />
              </Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

export default BannedMember;


const ProfileItem = ({ info }: { info: { [key: string]: string } }) => {

  return <div className={"flex w-full gap-3 border-b-[1px] p-4 border-white/20"}>
    <div className={"flex items-start"}>
      <Image src={info.profileUrl} alt={"user"} width={32} height={32} />
    </div>
    <div className={"flex items-center w-full"}>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex flex-col gap-[7px]"}>
          <div className={"flex gap-1 items-end"}>
            <p className={"text-[15px]"}>{info.nickname}</p>
            <div
              className={`text-[11px] px-1 py-[1px] rounded-[4px] ${info.memberType === "일반" ? "bg-primary" : "bg-[#438ADC]"}`}>
              {info.memberType}
            </div>
          </div>
          <p className={"text-white/70 text-[12px]"}>사유 : {info.reason}</p>
        </div>
      </div>
      <div className={"ml-auto flex items-start h-full justify-center gap-2"}>
        <div className={"flex items-center gap-2"}>
          <p className={"text-[12px] text-white/40"}>
            {info.created}
          </p>
          <button className={"text-[12px] h-[30px] p-2 bg-[#262626] flex justify-center items-center rounded-[12px] "}>
            <div>
              해제
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>;
};
