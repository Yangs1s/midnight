"use client";
import React from "react";

const VoteHeader = () => {
  return (
    <div className={"flex items-center gap-2"}>
      <span className={"bg-[#985CFF] px-[6px] py-1 rounded-[4px]"}>투표중</span>
      <p className={"text-white/40"}>종료 10일 전 300명 참여</p>
    </div>
  );
};

export default VoteHeader;
