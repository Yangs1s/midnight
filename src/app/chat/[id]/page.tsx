import ChatHeader from "@/app/chat/components/chat-header";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;
  // const response = await getChatInfo(id);

  const response = {
    title: "타이틀 들어갑니다. 타이틀이 길어지면 짤립니다.",
    description: "디스크립션 들어갑니다. 디스크립션이 길어지면 짤립니다.",
    imageUrl: "/images.jpeg",
    content:
      "여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.여기에 컨텐츠 내용이 들어갑니다.",
  };

  console.log(id);

  return (
    <div>
      <ChatHeader
        title={response.title}
        description={response.description}
        imageUrl={response.imageUrl}
        content={response.content}
      />
    </div>
  );
}
