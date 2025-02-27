import React from "react";
import ChatImoji from "@/app/chat/components/chat-imoji";
import Image from "next/image";

const OtherChatBox = ({ content, showProfile, time, imoji, onClick, photos }: {
  content: string,
  showProfile?: boolean,
  time?: string,
  imoji?: boolean
  onClick: () => void
  photos?: string[]
}) => {
  return (
    <div role={"presentation"} onClick={onClick} className={"flex w-full gap-2 mr-auto"}>
      <div className={"flex flex-col justify-center gap-1"}>
        {/*    profile */}
        {
          showProfile &&
          <div className={"flex gap-1 items-center"}>
            <img className={"w-[28px] h-[28px]"} src={"/icon/sampleProfile.svg"} alt={"샘플"} />
            <p className={"text-[14px]"}>신사동 장원영</p>
          </div>
        }
        <div className={"flex flex-col gap-1 ml-7 mt-1"}>
          <div className={"flex gap-2"}>
            {photos && photos.length > 0 ? (
              <div className={"grid grid-cols-3 gap-1 w-full"}>
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
            ) : (
              <div className="bg-[#3E3E42] max-w-[256px] p-3 rounded-b-[8px] rounded-tr-[8px] text-[14px]">
                <p>{content}</p>
              </div>
            )}
            {time && (
              <div className={"flex text-[10px] opacity-40 mt-auto"}>
                <p className={"whitespace-nowrap"}>오전 10:38</p>
                <img src={"/icon/threedot.svg"} />
              </div>
            )}
          </div>
          {
            imoji &&
            <div className={"flex gap-1"}>
              <ChatImoji url={"/icon/heartImoji.svg"} />
              <ChatImoji url={"/icon/smileImoji.svg"} />
            </div>
          }
        </div>


      </div>

    </div>
  );
};

export default OtherChatBox;
