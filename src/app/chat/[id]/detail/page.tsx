import React from "react";
import ChatRoomSetting from "@/app/chat/components/chat-room-setting";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;


  return (
    <ChatRoomSetting />
  );
};

export default Page;
