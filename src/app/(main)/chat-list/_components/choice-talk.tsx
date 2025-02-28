"use client";

import Carousel from "@/app/(main)/chat-list/_components/carousel";
import ChoiceChatItem from "@/app/(main)/chat-list/_components/choice-chat-item";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChoiceTalkRegionSelector from "@/app/(main)/chat-list/_components/choice-talk-region-selector";
import ChoiceChatCollapsible from "@/app/(main)/chat-list/_components/choice-chat-collapsible";
import ChoiceCarousel from "@/app/(main)/chat-list/_components/choice-carousel";

const CAROUSEL_IMAGES = [
  {
    url: "/choice-banner.png",
    onClick: () => alert("button clicked 1"),
  },
  {
    url: "https://media.istockphoto.com/id/520700958/ko/사진/아름다운-꽃-배경기술.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=",
    onClick: () => alert("button clicked 2"),
  },
];

const CHAT_ITEMS = [
  {
    id: "choice-1",
    isNew: true,
    timeType: "오전",
    type: "초중 20이상",
    time: "02:58",
    title: "채팅방 이름이 들어갑니다",
    location: "강남 논현",
    description: "이벤트 9시 이전 출근 +1",
    description2: "지명비 +1",
    defaultBookmarked: true,
    imageUrl: "/images.jpeg",
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-2",
    timeType: "오후",
    type: "초중 10이상",
    time: "01:30",
    title: "취업준비생 모여라",
    location: "잠실 송파",
    description: "이벤트 9시 이전 출근 +1",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-3",
    timeType: "오후",
    type: "초중 15이상",
    time: "12:45",
    title: "주식투자 정보공유방",
    location: "여의도",
    description: "이벤트 9시 이전 출근 +1",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-4",
    timeType: "오전",
    type: "초중 30이상",
    time: "11:20",
    title: "독서모임",
    location: "강남 선릉",
    description: "이벤트 9시 이전 출근 +1",
    defaultBookmarked: true,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-5",
    type: "초중 25이상",
    time: "10:15",
    timeType: "오전",
    title: "맛집 탐방",
    location: "홍대 신촌",
    description: "이벤트 9시 이전 출근 +1",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
];

export default function ChoiceTalk() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("지역 전체");

  return (
    <div>
      <Carousel className="mt-4 mb-4" images={CAROUSEL_IMAGES} />
      <NoticeButton
        image="/images.jpeg"
        className="mt-4 mb-4"
        title="초이스톡 안내 수칙"
        time="2025-01-23 12:00"
        body="공지사항 본문이 들어갑니다. 공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다."
      />

      <div className="px-4 py-[14px] bg-[#26252A] mb-5 -mx-4 rounded-[10px]">
        {CHAT_ITEMS.map((item) => (
          <ChoiceChatItem
            key={item.title}
            {...item}
            onClick={() => router.push(`/chat/${item.id}`)}
          />
        ))}
      </div>

      <div className="px-4 py-[14px] bg-[#26252A] mb-5 -mx-4 rounded-[10px]">
        <p className="text-lg font-semibold text-white">어드민 고정톡</p>
        {CHAT_ITEMS.map((item) => (
          <ChoiceChatItem
            key={item.title}
            {...item}
            onClick={() => router.push(`/chat/${item.id}`)}
          />
        ))}
      </div>

      <ChoiceTalkRegionSelector title={selected} setTitle={setSelected} />

      <div className="-mx-4">
        <ChoiceChatCollapsible title={"서울"}>
          <div className="px-4">
            {CHAT_ITEMS.map((item) => (
              <ChoiceChatItem
                key={item.title}
                {...item}
                onClick={() => router.push(`/chat/${item.id}`)}
              />
            ))}
            <ChoiceCarousel className="!h-[53px]" images={CAROUSEL_IMAGES} />
            {CHAT_ITEMS.map((item) => (
              <ChoiceChatItem
                key={item.title}
                {...item}
                onClick={() => router.push(`/chat/${item.id}`)}
              />
            ))}
          </div>
        </ChoiceChatCollapsible>
        <ChoiceChatCollapsible title="부산">
          <div className="px-4">
            {CHAT_ITEMS.map((item) => (
              <ChoiceChatItem
                key={item.title}
                {...item}
                onClick={() => router.push(`/chat/${item.id}`)}
              />
            ))}
          </div>
        </ChoiceChatCollapsible>
        <ChoiceChatCollapsible title="인천">
          <div className="px-4">
            {CHAT_ITEMS.map((item) => (
              <ChoiceChatItem
                key={item.title}
                {...item}
                onClick={() => router.push(`/chat/${item.id}`)}
              />
            ))}
          </div>
        </ChoiceChatCollapsible>
        <ChoiceChatCollapsible title="대전">
          <div className="px-4">
            {CHAT_ITEMS.map((item) => (
              <ChoiceChatItem
                key={item.title}
                {...item}
                onClick={() => router.push(`/chat/${item.id}`)}
              />
            ))}
          </div>
        </ChoiceChatCollapsible>
      </div>

      <div className="my-4 -mx-4">
        <ChoiceCarousel
          className="h-[76px] rounded-none"
          images={CAROUSEL_IMAGES}
        />
      </div>
    </div>
  );
}
