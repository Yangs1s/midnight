"use client";
import React, { ChangeEvent, Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import ChangeNickName from "@/app/chat/components/change-nick-name";
import ChatAlbumGrid from "@/app/chat/components/chat-album-grid";
import { Plus } from "../../../../public/icon/plus";
import FrequentlyUsedPharases from "@/app/chat/components/frequently-used-pharases";
import BottomContents from "@/app/chat/components/bottom-contents";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import BottomOverlay from "@/components/ui/BottomOverlay";


const images = [
  "https://picsum.photos/300/300",
  "https://picsum.photos/seed/picsum/300/300",
  "https://picsum.photos/300/300?grayscale",
  "https://picsum.photos/300/300?blur",
  "https://picsum.photos/300/300?blur=2",
  "https://picsum.photos/250/300",
  "https://picsum.photos/250/300?blur=3",
  "https://picsum.photos/250/300?grayscale=1",
  "https://picsum.photos/250/300?blur=4",
];

const emojis = [
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
  "/icon/emoji/emoji1.svg",
];

const ChatInput = ({ search, isReply, setIsReply }: {
  isReply: boolean,
  search: boolean,
  setIsReply: Dispatch<SetStateAction<boolean>>
}) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [footerContent, setFooterContent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [openSheet, setOpenSheet] = useState(-1);
  const [value, setValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 32 + "px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const [emojiUrl, setEmojiUrl] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
    // setOpenSheet(3);
    setFooterContent(false);
  };

  const addEmoji = (emoji: string) => {
    // setMessage(prev => prev + emoji);
    setEmojiUrl(emoji);
    setShowEmojiPicker(false);

  };

  const handleShowBottom = () => {
    setOpenSheet(-1);
    setShowEmojiPicker(false);
    if (openSheet > -1) {
      setFooterContent(prev => prev);
    } else {
      setFooterContent(prev => !prev);
    }
  };

  return (
    <div
      className={`fixed ${footerContent ? "min-h-[240px]" : "h-auto"}  bottom-0 bg-[#181818]  min-w-[320px] max-w-[470px] w-full `}>
      {
        isReply && (
          <BottomOverlay isReply={isReply} setIsReply={setIsReply} />
        )
      }
      <div className={"px-4 pt-4 pb-3"}>
        {
          !search ? (
            <div className={`flex gap-2 justify-between ${openSheet > -1 ? "items-center" : "items-end"}`}>
              {/*컨텐츠 버튼*/}
              <button className={"pb-1"}>
                <div>
                  {
                    isReply ?
                      <Image src={"/icon/reply.svg"} alt={"reply"} width={24} height={24} /> :
                      <button className={"w-8 h-8 flex justify-center items-center"}
                              onClick={handleShowBottom}>
                        {
                          !footerContent ?
                            <Image src="/icon/plus.svg" width={32} height={32}
                                   alt="플러스 아이콘" /> :
                            <Image src="/icon/closeIcon.svg" width={32} height={32}
                                   alt="플러스 아이콘" />}
                      </button>
                  }
                </div>
              </button>
              {
                openSheet === -1 ? (
                    <>
                      <div
                        className="relative bg-[#2F2F2F] rounded-[32px] flex items-center w-full min-h-[32px] px-4 ">
                        <div className={"w-full h-auto flex items-end"}>
                                                <textarea
                                                  ref={textareaRef}
                                                  className="box-border max-w-[200px] py-2 resize-none w-full !min-h-[0px] max-h-[120px] h-9
                                                  outline-none overflow-hidden placeholder:text-[13px] bg-transparent text-[13px] leading-normal  text-[#999999]"
                                                  placeholder="조용한 크림파스타로 채팅 입력"
                                                  value={message}
                                                  onChange={handleInputChange}
                                                />
                          <button
                            onClick={toggleEmojiPicker}
                            className="absolute bottom-[6px] right-4 "
                          >
                            {showEmojiPicker ?
                              <Image src={"/icon/keypad.svg"} alt={"keypad"} width={24} height={24} />
                              :
                              <img src="/icon/smileIcon.svg" alt="스마일 이모지" />
                            }
                          </button>

                        </div>
                      </div>
                      <button className={"pb-1"}>
                        <Image width={32} height={32} src="/icon/send.svg" alt="전송 아이콘" />
                      </button>
                    </>
                  ) :
                  openSheet === 0 ? (
                    <>
                      <div className={""}>프로필선택</div>
                      <div className={"w-[24px]"}>&nbsp;</div>
                    </>
                  ) : openSheet === 1 ? (
                    <>
                      <div className={""}>앨범</div>
                      {
                        <button onClick={() => {
                          alert("사진 전송");
                        }} className={"px-[10px] py-1 rounded-2xl bg-primary whitespace-nowrap"}>
                          <p className={"text-[13px]"}>{selectedImages.length} 전송</p></button>
                      }
                    </>
                  ) : <>
                    <div className={""}>자주쓰는 문구</div>
                    <button className={"flex justify-center items-center h-[20px] pb-1"} onClick={() => {
                      setIsOpen(p => !p);
                    }}>
                      <Plus color={"#985CFF"} />
                      <p className={"text-primary"}>추가</p>
                    </button>
                  </>
              }
            </div>

          ) : (

            <div className={"w-full ml-auto flex items-center justify-end h-full "}>
              <div className="flex gap-1 items-center">
                <Image width={24} height={24} src="/icon/upIcon.svg" alt="전송 아이콘" />
                <Image width={24} height={24} src="/icon/downIcon.svg" alt="전송 아이콘" />
              </div>
            </div>
          )
        }
      </div>
      {
        footerContent && openSheet === -1 && <div className={"h-[276px]"}>
          <BottomContents setOpenSheet={setOpenSheet} />
        </div>
      }
      {
        openSheet === 0 && <ChangeNickName />
      }
      {
        openSheet === 1 &&
        <ChatAlbumGrid images={images} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
      }
      {
        openSheet === 2 &&
        <FrequentlyUsedPharases />
      }
      {showEmojiPicker && (
        <ul
          className="pb-8 pt-4 px-4 grid grid-cols-4 gap-2">
          {emojis.map((emoji, i) => (
            <li className={"flex justify-center items-center"} onClick={() => addEmoji(emoji)} key={i}>
              <Image className={"cursor-pointer"} src={emoji} alt={"emoji"} width={60} height={60} />
            </li>
          ))}
        </ul>
      )}
      {<Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <DrawerHeader>
            <div className={"flex items-center gap-3"}>
              <DrawerClose>
                <Image src={"/icon/xIcon.svg"} alt={""} width={24} height={24} />
              </DrawerClose>
              <DrawerTitle className={"text-[20px]"}>
                자주쓰는 문구 추가
              </DrawerTitle>
            </div>
          </DrawerHeader>
          <div className={"flex flex-col h-full items-center gap-3 p-4"}>
            <div className={"w-full relative h-full"}>
            <textarea className={"resize-none h-full rounded-[4px] p-4 bg-[#2F2F2F] w-full"} value={value}
                      placeholder={"자주 쓰는 문구를 입력해주세요"}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setValue(e.target.value);
                      }} />

              <div className="absolute right-4 bottom-2">
              <span className="text-xs text-muted-foreground">
                {value?.length || 0}/500
              </span>
              </div>
            </div>
            <Button className={"w-full"}>추가하기</Button>
          </div>
        </DrawerContent>
      </Drawer>}
      {
        emojiUrl &&
        <div
          className={"absolute bottom-14 rounded-[12px] left-0 right-0 mx-auto w-[120px] h-[120px] bg-[#5b5b5b]/45 "}>
          <div className={"relative flex justify-center w-full h-full items-center"}>
            <button onClick={() => {
              setEmojiUrl("");
            }}>
              <Image src={"/icon/xIcon.svg"} alt={"emoji"} height={24} width={24}
                     className={"absolute top-2 right-2"} />
            </button>
            <Image src={emojiUrl} alt={"emoji"} height={80} width={80} />
          </div>
        </div>
      }


    </div>
  );
};

export default ChatInput;
