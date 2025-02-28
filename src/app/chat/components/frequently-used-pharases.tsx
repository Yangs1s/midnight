import React from "react";
import Image from "next/image";


const FrequentlyUsedPharases = () => {
  return (
    <div>
      <ul className={"px-6"}>
        <li className={"flex w-full py-4"}>
          <p className={"text-ellipsis whitespace-nowrap overflow-hidden break-words text-[15px]"}>
            자주 쓰는 문구 상단 내용 자주 쓰는 문구 상단 내용 자주 쓰는 문구 상단 내용 자주 쓰는 문구 상단 내용 자주 쓰는 문구 상단 내용
          </p>
          <Image src={"/icon/threedot2.svg"} width={20} alt={""} height={20} />
        </li>
        <li className={"flex w-full py-4 justify-between"}>
          <p className={"text-ellipsis whitespace-nowrap overflow-hidden break-words text-[15px]"}>
            자주 쓰는 쓰는 문구 상단 내용
          </p>
          <Image src={"/icon/threedot2.svg"} width={20} alt={""} height={20} />
        </li>
      </ul>

    </div>
  );
};

export default FrequentlyUsedPharases;
