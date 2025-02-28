import React from "react";
import CreateInnerContents from "@/app/chat/components/create-inner-contents";
import ChatNoticeSetting from "@/app/chat/components/chat-notice-setting";
import BannedMember from "@/app/chat/components/banned-member";

const Page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;

  function rendering(type: string) {
    switch (type) {
      case "create-inner-contents":
        return <CreateInnerContents />;
      case"chat-notice-setting":
        return <ChatNoticeSetting />;
      case"banned-member":
        return <BannedMember />;
    }
  }

  return rendering(type);

};

export default Page;
