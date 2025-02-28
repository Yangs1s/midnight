import React, { ChangeEvent, Fragment } from "react";
import ChatImoji from "@/app/chat/components/chat-imoji";
import Image from "next/image";
import useLongPress from "@/hooks/useLongPress";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Radio = [
  { id: "1", label: "부적절한 광고 및 스팸 활동" },
  { id: "2", label: "이용규칙 위반(도배,욕설,비방 등)" },
  { id: "3", label: "플랫폼 운영 원칙 위반" },
  { id: "4", label: "직접 입력" },
];
const SelectBox = [
  { value: "1", label: "1시간" },
  { value: "2", label: "1일" },
  { value: "3", label: "3일" },
  { value: "4", label: "영구제한" },
  { value: "4", label: "직접 입력(시간단위)" },
];

const OtherChatBox = ({ content, showMessageMenu, showProfile, onLongPress, time, imoji, onClick, photos }: {
  content: string,
  showProfile?: boolean,
  time?: string,
  imoji?: boolean
  onClick: () => void
  onLongPress?: () => void;
  photos?: string[]
  showMessageMenu: boolean
}) => {

  const [openBanned, setOpenBanned] = React.useState(false);
  const [value, setValue] = React.useState<string>();
  const { longPressTriggeredRef, ...longPressEvents } = useLongPress(() => {
    if (onLongPress) {
      onLongPress();
    }
  }, 2000);
  const [selected, setSelected] = React.useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  // onClick 핸들러에서 long press가 발생한 경우에는 실행하지 않도록 합니다.
  const menus = [
    {
      text: "메세지 복사", src: "/menu/copy.svg", onClick: () => {
        alert("menu");
      },
    },
    {
      text: "프로필 보기", src: "/menu/profile.svg", onClick: () => {
        alert("menu");
      },
    },
    {
      text: "메세지(DM) 보내기", src: "/menu/dm.svg", onClick: () => {
        alert("menu");
      },
    },
    {
      text: "회원 입장 제한 해제", src: "/menu/banned.svg", onClick: () => {
        setOpenBanned(true);
      },
    },
    {
      text: "해당 채팅 가리기", src: "/menu/eyeoff.svg", onClick: () => {
        alert("menu");
      },
    },
    {
      text: "신고하기", src: "/menu/warning.svg", onClick: () => {
        alert("menu");
      },
    },
  ];
  const handleClick = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }
    onClick();
  };

  return (
    <>
      <div role={"presentation"} className={"flex relative w-full cursor-pointer gap-2 mr-auto"} {
        ...longPressEvents
      }>
        <div className={"flex flex-col justify-center gap-1"}>
          {/*    profile */}
          {
            showProfile &&
            <div className={"flex gap-1 items-center"}>
              <img className={"w-[28px] h-[28px]"} src={"/icon/sampleProfile.svg"} alt={"샘플"} />
              <p className={"text-[14px]"}>신사동 장원영</p>
            </div>
          }
          <div className={"flex flex-col gap-1 ml-7 mt-1"} role={"presentation"} onClick={handleClick}>
            <div className={"flex gap-2"}>
              {photos && photos.length > 0 ? (
                <div className={"grid grid-cols-3 gap-1 w-full"}>
                  {photos?.map((photo, i) => (
                      <Image
                        src={photo}
                        key={i}
                        alt=""
                        width={300}
                        height={300}
                        className="object-cover rounded-[4px] w-full h-auto aspect-square"
                      />
                    ),
                  )}
                </div>
              ) : (
                <div className="bg-[#3E3E42] max-w-[256px] p-3 rounded-b-[8px] rounded-tr-[8px] text-[14px]">
                  <p>{content}</p>
                </div>
              )}
              {time && (
                <div className={"flex text-[10px] opacity-40 mt-auto"}>
                  <p className={"whitespace-nowrap"}>오전 10:38</p>
                  <img src={"/icon/threedot.svg"} />
                </div>
              )}
            </div>
            {
              imoji &&
              <div className={"flex gap-1"}>
                <ChatImoji url={"/icon/heartImoji.svg"} />
                <ChatImoji url={"/icon/smileImoji.svg"} />
              </div>
            }
          </div>


        </div>

      </div>
      {
        showMessageMenu && <div className={"absolute left-1/3 rounded-[8px]  w-[180px] z-40 mt-2"}>
          <ul className={"flex flex-col w-full    rounded-[12px]  bg-[#3d3c3c] h-full"}>
            {/*<li className={"w-full text-[12px] px-3 py-[12px] text-white"} onClick={() => {*/}
            {/*  alert("수정");*/}
            {/*}}>수정*/}
            {/*</li>*/}
            {/*<li className={"w-full text-[12px] px-3 py-[12px] border-t-[1px] border-white/40 text-white"}*/}
            {/*    onClick={() => {*/}
            {/*      alert("삭제");*/}
            {/*    }}>삭제*/}
            {/*</li>*/}
            {menus.map((item, i) => (
              <li key={i}
                  className={"w-full text-[12px] px-3 py-[12px] border-b-[1px] flex justify-between items-center last:border-b-0 border-white/40 text-white"}
                  onClick={item.onClick}>
                <p>
                  {item.text}
                </p>
                <Image src={item.src} alt={"menu" + i} width={14} height={14} />
              </li>
            ))}
          </ul>
        </div>
      }
      {
        openBanned && (
          <Drawer open={openBanned} onOpenChange={setOpenBanned}>
            <DrawerContent className={"bg-[#26252A]"}>
              <div className={"h-full px-6 py-8 gap-6  flex flex-col "}>
                <div className={"flex items-center gap-2  border-[1px] border-primary rounded-[8px] px-4 py-2"}>
                  <Image src={"https://picsum.photos/250/300"} alt={"img"} className={"rounded-full aspect-square"}
                         width={32}
                         height={32} />
                  <p>제재할 회원 닉네임</p>
                </div>
                <div className={" flex flex-col gap-4"}>
                  <h2 className={"text-[20px]"}>
                    입장제한 사유 선택
                  </h2>
                  <ul className={"flex flex-col gap-2"}>
                    {Radio.map((r) => (
                      <label
                        key={r.id}
                        htmlFor={r.id}
                        className="flex items-center justify-between rounded-sm px-4 py-1 cursor-pointer hover:bg-white/5"
                      >
                          <span className="text-white text-base font-normal">
                            {r.label}
                          </span>
                        <Checkbox
                          className={`rounded-full w-6  h-6 border-[#2F2F32] data-[state=unchecked]:before:text-[#2F2F32] data-[state=unchecked]:before:content-['✔']  data-[state=unchecked]:before:text-[13px]  data-[state=unchecked]:before:font-bold data-[state=unchecked]:text-primary-foreground  data-[state=checked]:before:content-[]  data-[state=checked]:before:bg-primary data-[state=checked]:text-primary-white data-[state=checked]:pl-[3px]`} />
                      </label>
                    ))}

                  </ul>
                </div>

                <div className={"flex flex-col gap-1"}>
                  <div className={"relative h-[100px]"}>
                  <textarea onChange={handleChange}
                            className={"outline-none rounded-[8px]  bg-[#302F36] px-4 py-[10px] w-full min-h-[90%] resize-none"}
                            placeholder={"메시지를 입력해주세요"} />
                    <div className="absolute right-4 bottom-4">
                        <span className="text-xs text-muted-foreground">
                          {value?.length || 0}/2000
                        </span>
                    </div>
                  </div>
                  <Select value={selected} onValueChange={setSelected}>
                    <SelectTrigger className={"bg-[#302F36] h-[48px]"}>
                      <SelectValue placeholder={"직접선택"} />
                    </SelectTrigger>
                    <SelectContent>
                      {SelectBox.map((item, i) => (
                        <SelectItem key={i} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                </div>
              </div>
              <div className={"px-6 pb-6"}>
                <Button className={"w-full"}>저장</Button>
              </div>
            </DrawerContent>
          </Drawer>
        )
      }

    </>
  );
};

export default OtherChatBox;
