import React from "react";

const HeaderTitle = () => {
  return (
    <div className={"flex items-center gap-2"}>
      <span className={"bg-[#985CFF] px-[6px] py-1 rounded-[4px]"}>초중 20이상</span>
      <p>오전 <rect className={"text-[#BB94FF]"}>02:58 </rect>기준</p>
    </div>
  );
};

export default HeaderTitle;
