"use client";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { Send } from "../../../../public/icon/emoji/send";

const Photos = [
  "https://picsum.photos/250/300",
  "https://picsum.photos/250/300?blur=3",
  "https://picsum.photos/250/300?grayscale=1",
  "https://picsum.photos/250/300?blur=4",
  "https://picsum.photos/250/300",
  "https://picsum.photos/250/300?blur=3",
  "https://picsum.photos/250/300?grayscale=1",
];

const BottomContents = ({ setOpenSheet }: { setOpenSheet: Dispatch<SetStateAction<number>> }) => {
  const [isExtended, setIsExtended] = useState(false);
  const [extendedTab, setExtendedTab] = useState<number>(-1);
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (<div
      className={" border-t-[1px] border-t-white/30  h-full"}>
      <div className={"px-4 flex items-center py-3 justify-between w-full"}>
        <div className={"flex  items-center gap-1"}>
          <p className={"text-[14px]"}>남은 채팅 수 <em className={"text-[#BB94FF]"}>20</em>/100
          </p>
          <Image width={16} height={16} src="/icon/info.svg" alt="전송 아이콘" />
        </div>
        <button onClick={() => {
          setIsExtended(p => !p);
        }}>
          <Image width={24} height={24} src="/icon/dragDrop.svg" alt="전송 아이콘" />
        </button>
      </div>
      <ul className={"flex items-center justify-around w-full  py-5 px-4"}>
        <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
          setOpenSheet(0);
        }}>
          <Image width={24} height={24} src="/icon/userIcon.svg" alt="전송 아이콘" />
          <p className={"text-[14px]"}>닉네임 변경</p>
        </li>
        <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
          setOpenSheet(1);
        }}>
          <Image width={24} height={24} src="/icon/picture.svg" alt="전송 아이콘" />
          <p className={"text-[14px]"}>사진첨부</p>
        </li>
        <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
          setOpenSheet(2);
        }}>
          <Image width={24} height={24} src="/icon/pencil.svg" alt="전송 아이콘" />
          <p className={"text-[14px]"}>자주쓰는 문구</p>
        </li>
      </ul>

      {
        <Drawer open={isExtended} onOpenChange={setIsExtended}>
          <DrawerContent className={"h-full bg-[#262626] flex flex-col gap-4"}>
            <div className={"flex justify-between px-2"}>
              <DrawerHeader className={"text-[18px] font-light"}>채팅 확장</DrawerHeader>
              <DrawerClose className={"flex items-center gap-1 pr-2"}>
                <Image src={"/icon/minimalize.svg"} alt={"줄이기"} height={16} width={16} />
                <p className={"text-[14px] font-light"}>채팅창 줄이기</p>
              </DrawerClose>
            </div>
            <div>
              <ul className={"flex justify-around gap-1 px-4"}>
                <li className={"bg-[#151515] gap-2 flex justify-center items-center p-2 h-10 text-[13px] px-5"}
                    onClick={() => {
                      setExtendedTab(1);
                    }}>
                  <Image
                    width={16} height={16} src="/icon/userIcon.svg" alt="전송 아이콘" />
                  <p className={"text-[12px] whitespace-nowrap"}>닉네임 변경</p>
                </li>
                <li className={"bg-[#151515] gap-2 flex justify-center items-center p-2 h-10 text-[13px] px-5"}
                    onClick={() => {
                      setExtendedTab(1);
                    }}>
                  <Image width={16} height={16} src="/icon/picture.svg" alt="전송 아이콘" />
                  <p className={"text-[12px] whitespace-nowrap"}>사진첨부</p>
                </li>
                <li className={"bg-[#151515] gap-2 flex justify-center items-center p-2 h-10 text-[13px] px-5"}
                    onClick={() => {
                      setExtendedTab(1);
                    }}>
                  <Image width={16} height={16} src="/icon/pencil.svg" alt="전송 아이콘" />
                  <p className={"text-[12px] whitespace-nowrap"}>자주쓰는 문구</p>
                </li>
              </ul>
            </div>
            <div>

            </div>
            <div className={"px-4 h-full"}>
              <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
                        className={"outline-none bg-[#262626] w-full min-h-[90%] resize-none"}
                        placeholder={"메시지를 입력해주세요"} />
              <div className="absolute left-4 bottom-4">
                      <span className="text-xs text-muted-foreground">
                        {value?.length || 0}/2000
                      </span>
              </div>
              <button
                className="absolute rounded-2xl gap-2 py-2 bg-gray-600/20 px-3 right-4 bottom-4 flex items-center">
                <p className={"text-[15px]"}>전송하기</p>
                <Send value={value as string} />
              </button>
            </div>
            {/* 이미지 모음 (절대 위치) */}
            {extendedTab === 1 && (
              <div className="absolute z-[90] left-0 right-0 bottom-[80px] flex gap-2 px-2 overflow-x-auto">
                {Photos.map((photo, i) => (
                  <div key={i} className="relative w-[60px] h-[60px] flex-shrink-0">
                    <button className="absolute top-1 right-1">
                      <Image
                        width={16}
                        height={16}
                        src="/icon/closeIcon.svg"
                        alt="닫기 아이콘"
                      />
                    </button>
                    <Image
                      src={photo}
                      alt=""
                      width={60}
                      height={60}
                      className="object-cover rounded aspect-square"
                    />
                  </div>
                ))}
              </div>
            )}
          </DrawerContent>
        </Drawer>
      }
    </div>
  );
};

export default BottomContents;
