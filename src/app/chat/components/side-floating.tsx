"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const SideFloating = ({ isSideOpen, setIsSideOpen }: {
  isSideOpen: boolean,
  setIsSideOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const closeSide = () => {
    setIsSideOpen(p => !p);
  };
  return (

    isSideOpen ? <div className={"ml-auto mt-[18px] w-fit mr-4 z-20"}>
        <div className={"bg-[#0F0F0F80] px-2 py-3 rounded-[8px] flex flex-col gap-4"}>
          <div className={"flex flex-col items-center gap-2"}>
            <div className={"bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]"}>
              <Image src={"/icon/userIcon2.svg"} alt={"유저"} width={16} height={16} />
            </div>
            <p className={"text-[10px]"}>담당리스트</p>
          </div>
          <div className={"flex flex-col items-center gap-2"}>
            <div className={"bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]"}>
              <Image src={"/icon/note_red.svg"} alt={"유저"} width={24} height={24} />
            </div>
            <p className={"text-[10px]"}>용어설명</p>
          </div>
          <div className={"flex flex-col items-center gap-2"}>
            <div className={"bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]"}>
              <Image src={"/icon/thunder.svg"} alt={"유저"} width={14} height={23} />
            </div>
            <p className={"text-[10px]"}>광고 문의</p>
          </div>
        </div>
        <button onClick={closeSide} className={"mx-auto flex items-center justify-center mt-1"}>
          <Image src={"/icon/closeIcon.svg"} alt={"유저"} width={16} height={16} />
        </button>
      </div> :
      <div className={"ml-auto mt-[18px]  w-5 mr-0 z-20"}>
        <div role={"presentation"} onClick={closeSide}
             className={"bg-[#0F0F0F80] h-[50px]  rounded-l-[4px] flex justify-center items-center gap-4"}>
          <Image src={"/icon/leftArrow.svg"} alt={"유저"} width={7} height={11} />
        </div>
      </div>
  );
};

export default SideFloating;
