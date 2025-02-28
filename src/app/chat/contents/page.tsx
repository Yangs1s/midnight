import ChatHeader from "@/app/chat/components/chat-header";
import ChatBody from "@/app/chat/components/chat-body";
// import HeaderContent from "@/app/chat/components/header-title/header-content";
import HeaderTitle from "@/app/chat/components/header-title/header-title";
import { Suspense } from "react";
import InnerContents from "@/app/chat/components/inner-contents";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;

  // const response = await getChatInfo(id);

  /*
  * 투표 -> VoteContent
  * 내부컨텐츠 -> InnerContents
  * 일반 -> headerContents
  * */

  const response = {
    title: "내부 컨텐츠",
    description: "",
    id: "contents",
    // imageUrl: "/images.jpeg",
    content:
      {
        // top: <VoteHeader />,
        // detail: <VoteContent />,
        top: <HeaderTitle />,
        detail: <InnerContents id={"contents"} />,
      },
  };


  return (
    <div className={"flex flex-col h-full min-w-[320px] max-w-[470px]"}>
      <Suspense>
        <ChatHeader
          title={response.title}
          description={response.description}
          id={response.id}
          // imageUrl={response.imageUrl}
          content={response.content}
        />
        <InnerContents id={"contents"} />
      </Suspense>
    </div>
  );
}
