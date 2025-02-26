"use client";

import React, { useEffect, useState } from "react";
import GlobalHeader from "@/components/container/global-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import ContentTalk from "@/app/(main)/chat-list/_components/content-talk";
import BambooForestTalk from "@/app/(main)/chat-list/_components/bamboo-forest-talk";
import FaqList from "@/app/(main)/board/customer/_components/faq-list";
import FaqSearch from "@/app/(main)/board/customer/_components/faq-search";
import ChatConsultation from "@/components/container/header/chat-consultation";
import FaqSearchLogs from "@/app/(main)/board/customer/_components/faq-search-logs";

type Props = {
  searchParams: {
    type: "private" | "inquiry" | "faq" | "feedback";
  };
};

const CustomerPage = ({ searchParams }: Props) => {
  const type = searchParams.type;
  const router = useRouter();
  const triggerClassName =
    "rounded-none w-full data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-[1px] data-[state=active]:border-white data-[state=active]:relative data-[state=active]:top-[1px]";

  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleTypeChange = (
    type: "private" | "inquiry" | "faq" | "feedback"
  ) => {
    router.push(`/board/customer?type=${type}`);
  };

  useEffect(() => {
    setIsSearchMode(false);
  }, [router]);

  return (
    <div>
      <GlobalHeader
        title={"고객센터"}
        className="!border-none"
        backUrl={"/mypage"}
        buttons={[
          {
            node: <ChatConsultation />,
          },
        ]}
      />
      <Tabs defaultValue={type || "faq"} className="w-full !ml-0">
        <TabsList className="w-full bg-transparent border-b border-[#26252a] flex justify-start gap-4 !p-0">
          <TabsTrigger
            value="faq"
            className={triggerClassName}
            onClick={() => handleTypeChange("faq")}
          >
            FAQ
          </TabsTrigger>
          <TabsTrigger
            value="private"
            className={triggerClassName}
            onClick={() => handleTypeChange("private")}
          >
            1:1문의
          </TabsTrigger>
          <TabsTrigger
            value="inquiry"
            className={triggerClassName}
            onClick={() => handleTypeChange("inquiry")}
          >
            내 문의내역
          </TabsTrigger>
          <TabsTrigger
            value="feedback"
            className={triggerClassName}
            onClick={() => handleTypeChange("feedback")}
          >
            피드백 보내기
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <>
            <FaqSearch setIsSearchMode={setIsSearchMode} />
            {isSearchMode ? <FaqSearchLogs /> : <FaqList />}
          </>
        </TabsContent>
        <TabsContent value="private">
          <ContentTalk />
        </TabsContent>
        <TabsContent value="inquiry">
          <BambooForestTalk />
        </TabsContent>
        <TabsContent value="feedback">
          <BambooForestTalk />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerPage;
