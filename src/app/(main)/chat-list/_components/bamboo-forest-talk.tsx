import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import CollapsibleChatList from "@/app/(main)/chat-list/_components/callapsible-chat-list";
import BambooChatItem from "@/app/(main)/chat-list/_components/bamboo-chat-item";
import BambooCarousel from "@/app/(main)/chat-list/_components/bamboo-carousel";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { X } from "lucide-react";
import BambooSearchIcon from "@/app/(main)/chat-list/_components/bamboo-search-icon";

const CAROUSEL_IMAGES = [
  {
    url: "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
    onClick: () => alert("button clicked 1"),
  },
  {
    url: "https://media.istockphoto.com/id/520700958/ko/사진/아름다운-꽃-배경기술.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=",
    onClick: () => alert("button clicked 2"),
  },
];

const CHAT_ROOMS = [
  {
    id: "bamboo-1",
    title: "흑백요리사방",
    description: "흑백요리사 보는 사람 모여라",
    subDescription: "1.5만명 방문",
    defaultBookmarked: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
    isActive: true,
  },
  {
    id: "bamboo-2",
    title: "흑백요리사방",
    description: "흑백요리사 보는 사람 모여라",
    subDescription: "1.5만명 방문",
    defaultBookmarked: true,
    imageUrl: "/chat-banner-image04.png",
    isActive: true,
  },
  {
    id: "bamboo-3",
    title: "연애상담소",
    description: "연애 고민 있으신 분들 오세요",
    subDescription: "3.2천명 방문",
    defaultBookmarked: false,
    imageUrl: "/chat-banner-image01.png",
    isActive: false,
  },
  {
    id: "bamboo-4",
    title: "취업준비방",
    description: "취준생들의 이야기 공유방",
    subDescription: "2.8천명 방문",
    defaultBookmarked: false,
    imageUrl: "/chat-banner-image02.png",
    isActive: false,
  },
  {
    id: "bamboo-5",
    title: "취업준비방",
    description: "취준생들의 이야기 공유방",
    subDescription: "2.8천명 방문",
    defaultBookmarked: false,
    imageUrl: "/chat-banner-image03.png",
    isActive: false,
  },
];

export default function BambooForestTalk() {
  const triggerClassName =
    "px-[12px] py-[9px] rounded-full bg-transparent data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:border-none transition-colors text-sm text-white/60 border border-white/60";
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {};

  return (
    <div>
      <BambooCarousel className="mt-4 mb-2" images={CAROUSEL_IMAGES} />
      <NoticeButton
        className="mt-4 mb-4"
        title="대나무숲 이용 안내 수칙(공지사항)"
        time="2025.01.23"
        body="공지사항 본문이 들어갑니다. 공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다."
      />

      <Separator className="bg-[#26252A] !h-[3px]" />

      <Tabs defaultValue="active" className="w-full mt-4">
        {!isSearchMode && (
          <div className="flex items-center justify-between gap-2 mb-4">
            <TabsList className="flex w-full justify-between items-center gap-2 bg-transparent">
              <div className="flex items-center gap-2">
                <TabsTrigger
                  value="active"
                  className={triggerClassName + " w-30"}
                >
                  지금 핫한 톡 🔥
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className={triggerClassName + " w-26"}
                >
                  종료된 대숲
                </TabsTrigger>
              </div>
              <TabsTrigger
                value="search"
                className="w-10 p-0"
                onClick={() => setIsSearchMode(true)}
              >
                <BambooSearchIcon />
              </TabsTrigger>
            </TabsList>
          </div>
        )}

        {isSearchMode && (
          <div className="flex items-center justify-between gap-4">
            <div className="w-full flex items-center gap-2  bg-[#2F2F32] py-2 px-4 rounded-[5px]">
              <button
                type="button"
                onClick={onSearch}
                className="cursor-pointer"
              >
                <BambooSearchIcon />
              </button>
              <input
                type="text"
                className="w-full bg-transparent text-xs outline-none placeholder:text-white/30"
                placeholder="검색어를 입력하세요."
                value={query}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              {query.length > 0 && (
                <button type="button" onClick={() => setQuery("")}>
                  <X width={18} />
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsSearchMode(false)}
              className="text-primary cursor-pointer text-xs font-bold text-nowrap"
            >
              취소
            </button>
          </div>
        )}

        <TabsContent value="active" className="mt-6">
          <BambooChatItem
            title={CHAT_ROOMS[0].title}
            description={CHAT_ROOMS[0].description}
            subDescription={CHAT_ROOMS[0].subDescription}
            defaultBookmarked={CHAT_ROOMS[0].defaultBookmarked}
            imageUrl={CHAT_ROOMS[0].imageUrl}
            isActive={CHAT_ROOMS[0].isActive}
            onClick={() => router.push(`/chat/${CHAT_ROOMS[0].id}`)}
            onBookmarkClick={() => alert("bookmark clicked")}
          />
          <CollapsibleChatList title="인기 대나무숲">
            {CHAT_ROOMS.map((room) => (
              <BambooChatItem
                key={room.id}
                title={room.title}
                description={room.description}
                subDescription={room.subDescription}
                defaultBookmarked={room.defaultBookmarked}
                imageUrl={room.imageUrl}
                isActive={room.isActive}
                onClick={() => router.push(`/chat/${room.id}`)}
                onBookmarkClick={() => alert("bookmark clicked")}
              />
            ))}
          </CollapsibleChatList>

          <CollapsibleChatList title="주체별 대나무숲">
            {CHAT_ROOMS.map((room) => (
              <BambooChatItem
                key={room.id}
                title={room.title}
                description={room.description}
                subDescription={room.subDescription}
                defaultBookmarked={room.defaultBookmarked}
                imageUrl={room.imageUrl}
                isActive={room.isActive}
                onClick={() => router.push(`/chat/${room.id}`)}
                onBookmarkClick={() => alert("bookmark clicked")}
              />
            ))}
          </CollapsibleChatList>
        </TabsContent>

        <TabsContent value="completed">
          <div className="">종료된 채팅이 없습니다</div>
        </TabsContent>

        <TabsContent value="search">
          {CHAT_ROOMS.map((room, index) => (
            <div key={index} className="mb-4">
              <BambooChatItem
                title={room.title}
                description={room.description}
                subDescription={room.subDescription}
                defaultBookmarked={room.defaultBookmarked}
                imageUrl={room.imageUrl}
                onClick={() => router.push(`/chat/${room.id}`)}
                onBookmarkClick={() => alert("bookmark clicked")}
              />
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="bg-[#1C1C1C] my-4">
        <BambooCarousel className="mt-4 mb-2" images={CAROUSEL_IMAGES} />
      </div>
    </div>
  );
}
