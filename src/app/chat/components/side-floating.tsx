"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SideFloatingProps {
  isSideOpen: boolean;
  setIsSideOpen: Dispatch<SetStateAction<boolean>>;
}

const SideFloating: React.FC<SideFloatingProps> = ({ isSideOpen, setIsSideOpen }) => {
  const router = useRouter();
  const [word, setWord] = useState<boolean>(false);

  const closeSide = () => {
    setIsSideOpen((prev) => !prev);
  };

  return (
    <>
    {isSideOpen ? (
      <div className="ml-auto mt-[18px] w-fit mr-4 z-20">
        <div className="bg-[#0F0F0F80] px-2 py-3 rounded-[8px] flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]">
              <Image src="/icon/userIcon2.svg" alt="유저" width={16} height={16} />
            </div>
            <p className="text-[10px]">담당리스트</p>
          </div>
          <div
            role="presentation"
            onClick={() => setWord((prev) => !prev)}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]">
              <Image src="/icon/note_red.svg" alt="용어설명" width={24} height={24} />
            </div>
            <p className="text-[10px]">용어설명</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white rounded-[8px] flex items-center justify-center w-[32px] h-[32px]">
              <Image src="/icon/thunder.svg" alt="광고 문의" width={14} height={23} />
            </div>
            <p className="text-[10px]">광고 문의</p>
          </div>
        </div>
        <button
          onClick={closeSide}
          className="mx-auto flex items-center justify-center mt-1"
        >
          <Image src="/icon/closeIcon.svg" alt="닫기" width={16} height={16} />
        </button>
      </div>
    ) : (
      <div className="ml-auto mt-[18px] w-5 mr-0 z-20">
        <div
          role="presentation"
          onClick={closeSide}
          className="bg-[#0F0F0F80] h-[50px] rounded-l-[4px] flex justify-center items-center gap-4"
        >
          <Image src="/icon/leftArrow.svg" alt="열기" width={7} height={11} />
        </div>
      </div>
    )}

      <Drawer open={word} onOpenChange={setWord}>
        <DrawerContent>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-[20px]">용어 설명</h3>
              <Image src="/icon/xIcon.svg" alt="닫기" width={24} height={24} />
            </div>
            <div className="w-full">
              <Image className="w-full" src="/word-notice.svg" alt="공지" width={16} height={16} />
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="four-line-ellipsis">
                모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은
                환경보전을 위하여 노력하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에
                대한 보상은 법률로써 정당한 보상을 지급하여야...
              </div>
              <div>
                <button
                  className="flex gap-1 ml-auto"
                  onClick={() => router.push("/word")}
                >
                  <p className="text-[14px] text-white/80">전체보기</p>
                  <Image src="/icon/right-arrow.svg" alt="더보기" width={16} height={16} />
                </button>
              </div>
            </div>
            <div>
              <Button className="w-full bg-[#3E3E42]" onClick={() => setWord(false)}>
                닫기
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideFloating;
