"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { DrawerTrigger } from "@/components/ui/drawer";

const ChangeNickName = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [value, setValue] = React.useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={"px-4 pb-1 "}>
        <ul className={" w-full h-auto flex flex-col gap-2 py-4"}>
          <li className={"flex items-center w-full justify-between p-2"}>
            <div className={"flex gap-[10px] items-center"}>
              <div className={"w-10 h-10 rounded-full bg-white"}></div>
              <p>고정 닉네</p>
            </div>
            {/*TODO 이거 다른거로 바꾸던가 해야겠음 디자인 시안대로 만들기가 힘듭니다.*/}
            <Checkbox
              className={`rounded-full w-6  h-6 border-[#2F2F32] data-[state=unchecked]:before:text-[#2F2F32] data-[state=unchecked]:before:content-['✔']  data-[state=unchecked]:before:text-[13px]  data-[state=unchecked]:before:font-bold data-[state=unchecked]:text-primary-foreground  data-[state=checked]:before:content-[]  data-[state=checked]:before:bg-primary data-[state=checked]:text-primary-white data-[state=checked]:pl-[3px]`} />
          </li>
          <li className={"flex items-center w-full justify-between border-[1px] border-primary p-2 rounded-[12px]"}>
            <div className={"flex gap-[10px] items-center"}>
              <div className={"w-10 h-10 rounded-full bg-white"}></div>
              <p>고정 닉네</p>
            </div>
            <div className={"flex gap-4 "}>
              <div
                className={"flex gap-[2px] text-[11px] bg-[#414141] px-[5px] py-1 rounded-[24px] items-center"}>
                <Image src={"/icon/return.svg"} alt={"리턴"} width={18} height={18} />
                <p>
                  랜덤
                </p>
              </div>
              {/*TODO 이거 다른거로 바꾸던가 해야겠음 디자인 시안대로 만들기가 힘듭니다.*/}
              <Checkbox
                className={`rounded-full  w-6 h-6 border-[#2F2F32] data-[state=unchecked]:before:text-[#2F2F32] data-[state=unchecked]:before:content-['✔']  data-[state=unchecked]:before:text-[13px]  data-[state=unchecked]:before:font-bold data-[state=unchecked]:text-primary-foreground  data-[state=checked]:before:content-[]  data-[state=checked]:before:bg-primary data-[state=checked]:text-primary-white data-[state=checked]:pl-[3px]`} />
            </div>
          </li>
          <li className={"flex gap-2 py-3 justify-center cursor-pointer"} onClick={() => {
            setIsOpen(true);
          }}>
            <Image src={"/icon/plusIcon.svg"} alt={"새프로필"} width={18} height={18} />
            <p>새 프로필 만들기</p>
          </li>
        </ul>

        <Button className={"w-full"}>
          변경완료
        </Button>
      </div>


      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={"w-[350px] min-h-[350px] px-[24px] pt-[32px]"}>
          <DialogTitle>
            새 프로필 만들기
          </DialogTitle>

          <DialogBody>
            <div className={"flex flex-col items-center gap-2 "}>
              <div
                className={"flex gap-[2px] text-[11px] mt-4 bg-[#414141] px-[5px] py-1 rounded-[24px] items-center"}>
                <Image src={"/icon/return.svg"} alt={"리턴"} width={18} height={18} />
                <p>
                  랜덤
                </p>
              </div>
              <div className="relative mb-4">
                <div
                  className={`w-24 h-24 rounded-full ${
                    selectedImage ? "" : "bg-[#20222a]"
                  } flex items-center justify-center overflow-hidden`}
                >
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt="Selected profile"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <DrawerTrigger asChild>
                  <button
                    className="absolute bottom-0 right-0 w-8 h-8 bg-[#262626] rounded-full p-0 flex items-center justify-center">
                    <Image src={"/icon/camera2.svg"} alt={"CAMERA"} width={26} height={26} />
                  </button>
                </DrawerTrigger>
              </div>
              <div className="w-full items-center relative flex  ">
                <input
                  value={value as string}
                  onChange={handleChange}
                  name={"nickname"}
                  maxLength={20}
                  className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                  placeholder="닉네임을 입력해주세요"
                />
                <div className="absolute right-4">
                      <span className="text-xs text-muted-foreground">
                        {value?.length || 0}/20
                      </span>
                </div>
              </div>
            </div>
            {value?.length == 0 && (
              <p className="mt-1 ml-1 text-xs text-red-500 text-left">
                닉네임을 입력해주세요
              </p>
            )}
          </DialogBody>
          <DialogFooter>
            <Button className={"w-full h-[48px] rounded-[4px]"} onClick={() => {
            }}>
              저장
            </Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>


    </>
  );
};

export default ChangeNickName;
