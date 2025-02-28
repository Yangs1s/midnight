import React from "react";
import ChatImoji from "@/app/chat/components/chat-imoji";
import Image from "next/image";

const UserChatBox = ({ content, time, imoji, photos }: {
  content: string,
  time?: string,
  imoji?: boolean,
  photos?: string[]
}) => {
  return (
    <div className={"w-full ml-auto flex gap-2"}>
      <div className={"w-full flex flex-col gap-1"}>
        <div className={"flex gap-1 ml-auto"}>
          {time && (
            <div className={"flex text-[10px] opacity-40 mt-auto"}>
              <p className={"whitespace-nowrap"}>오전 10:38</p>
              <img src={"/icon/threedot.svg"} />
            </div>
          )}
          <>
            {photos && photos.length > 0 ? (
              <div className={"grid grid-cols-3 gap-1 w-full mt-1"}>
                {photos?.map((photo, i) => (
                    <Image
                      src={photo}
                      key={i}
                      alt=""
                      width={300}
                      height={300}
                      className="object-cover rounded-[4px] w-full h-auto aspect-square"
                    />
                  ),
                )}
              </div>
            ) : (<div
              className={"flex bg-[#985CFF] max-w-[248px] p-3 text-[14px] rounded-b-[8px] rounded-tl-[8px]"}>
              {content}
            </div>)}
          </>
        </div>
        {
          imoji &&
          <div className={"flex gap-2 ml-auto"}>
            <ChatImoji url={"/icon/heartImoji.svg"} />
            <ChatImoji url={"/icon/smileImoji.svg"} />
          </div>
        }
      </div>
    </div>
  );
};

export default UserChatBox;
