"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

;
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { ArrowLeft } from "lucide-react";

const chat_room_info_icon = [
  {
    url: "/icon/house.svg", label: "정보보기",
  }, {
    url: "/icon/phone.svg", label: "위젯추가",
  }, {
    url: "/icon/add-user.svg", label: "친구 초대",
  }, {
    url: "/icon/headset.svg", label: "고객센터",
  },

];

const best_post = [
  {
    content: "삼각김밥 무슨 맛 좋아해", imgUrl: "",
  },
  {
    content: "복코 수술 잘하는 병원 여기 말고 더 있나요?", imgUrl: "https://picsum.photos/250/300?blur=3",
  },
  {
    content: "삼각김밥 무슨 맛 좋아해", imgUrl: "",
  },
  {
    content: "스킨부스터 추천해줭", imgUrl: "https://picsum.photos/250/300?blur=2",
  },
  {
    content: "안녕하세요 ㅎㅁㅇㅁㄴㅇㅁㄴ", imgUrl: "",
  },
];
const ChatRoomInfo = ({ isGroup, closeInfo }: {
  isGroup: boolean,
  closeInfo: () => void
}) => {
  const router = useRouter();

  return (
    <div
      className={"max-w-[470px] right-0 pb-20 overflow-y-auto mx-auto w-full h-full fixed left-0 top-0 bg-[#1c1c1c] z-40"}>
      <div className={"w-full h-full pb-20"}>
        {/*그룹채팅시 헤더*/}
        {isGroup ?
          <div className={"flex justify-between p-4"}>
            <div className={"flex items-center gap-3"}>
              <button onClick={closeInfo}>
                <ArrowLeft />
              </button>
              <p>내부 컨텐츠 작성하기</p>
            </div>
            <Image src={"/icon/vector.svg"} alt={"vector"} width={24} height={24} />
          </div> :
          <div className={"flex justify-between mt-14 px-4"}>
            {/*단독채팅시 헤더*/}
            <button onClick={closeInfo}>
              <Image src={"/icon/xIcon.svg"} alt={"XIcon"} width={24} height={24} />
            </button>
            <Image src={"/icon/vector.svg"} alt={"vector"} width={24} height={24} />
          </div>
        }
        {/*데일리톡 설명 제목*/}
        <div className={"p-4 flex flex-col gap-4 mt-4"}>
          <div className={"flex justify-between items-center"}>
            <h3>데일리톡 채팅방명</h3>
            <Image src={"/icon/star.svg"} alt={"star"} width={24} height={24} />
          </div>
          <div className={"flex justify-between items-center"}>
            <p className={"three-line-ellipsis text-[14px] text-white/40"}>
              대나무숲 설명 대나무숲 설명 대나무숲 대나무숲 설명 대나무숲 설명 대나무숲 대나무숲 설명 대나무숲 설명 대나무숲 설명 대나무숲 설명 대나무숲 설명 대나무숲 설명 대나무숲 설명 대나무숲 설명
              대나무숲 설명 대나무숲 설명 !대나무숲 설명 대나무숲 설명 대나무숲대나무숲 설명 대나무숲 설명 대나무숲
            </p>
          </div>
        </div>
        {/*아이콘 및 토글영역*/}
        <div className={"flex flex-col items-center gap-4 w-full px-6 pt-2 pb-4"}>
          <ul className={"flex justify-around items-center w-full"}>
            {chat_room_info_icon.map((icon, i) => (
              <li key={i} className={"flex flex-col gap-2 justify-center items-center "}>
                <Image src={icon.url} alt={icon.label} width={24} height={24} />
                <p className={"text-[12px] text-white/40 leading-normal tracking-[-0.12px]"}>{icon.label}</p>
              </li>
            ))}
          </ul>

          <div className={"flex w-full justify-between py-4 items-center"}>
            <p className={"text-[14px] text-white/80"}>현재 채팅방 알림 받기</p>
            <Switch />
          </div>
          {isGroup &&
            <>
              <div className={"flex w-full justify-between py-4 items-center"}>
                <div className={" flex flex-col"}>
                  <p className={"text-[14px] text-white/80"}>
                    채팅방 얼리기
                  </p>
                  <p className={"text-[12px] text-white/40"}>
                    채팅방을 얼릴 시 일정 시간 모든 채팅 입력이 금지됩니다.
                  </p>
                </div>
                <Switch />
              </div>
              <Button className={"bg-[#302F36] w-full"} onClick={() => {
                router.push("/chat/choice-2/detail");
              }}>채팅방 관리하기</Button>
            </>}
        </div>
        <div className={"w-full"}>
          <NoticeButton title={"어드민이 설정한 공지내용이 들어갔습니다."} time="12:00"
                        body="알림 내용"
                        actionButton={<div>
                          <Image src={"/icon/right-arrow.svg"} alt={"샘플"} width={24} height={24} />
                        </div>}
          />
        </div>
        <div className={"px-5 mt-4"}>
          <div className={"flex justify-between items-center"}>
            <p className={"text-[14px]"}>
              🔥 지금 뜨는 인기글
            </p>
            <div className={"flex items-center gap-1"}>
              <p className={"text-[11px] text-white/40 leading-normal tracking-[-0.12px]"}>
                더보기
              </p>
              <Image src={"/icon/right-small-arrow.svg"} alt={"화살표"} width={5} height={7} />
            </div>
          </div>
        </div>
        <div className={"flex flex-col px-5 mt-4 pb-12"}>
          {
            best_post.map((item, i) => (
              <div key={i} className={"w-full"}>
                <div className={"w-full flex items-center"}>
                  <p className={`leading-[20px] text-white/60 text-[13px] ${item.imgUrl ? "py-2" : "py-4"}`}>
                    {item.content}
                  </p>
                  {
                    item.imgUrl &&
                    <Image src={item.imgUrl} alt={"img"} width={24} height={24}
                           className={"aspect-square ml-auto rounded-[4px]"} />
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ChatRoomInfo;
