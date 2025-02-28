"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import GlobalHeader from "@/components/container/global-header";
import QRCode from "react-qr-code";
import Image from "next/image";

const userInviteCode = "1234567890";

export default function FriendInvite() {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(userInviteCode);
      toast.success("초대 코드가 복사되었습니다.");
    } catch (err) {
      console.error(err);
      toast.error("복사에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white">
      <GlobalHeader title={"친구 초대"} className={"border-none"} />

      <main className="py-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-5">친구 초대 QR 코드</h2>

        <div className="bg-white p-4 rounded-lg mb-8">
          <QRCode
            value={userInviteCode}
            size={220}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="H"
          />
        </div>

        <h3 className="text-2xl font-bold mb-4">편하게 친구 초대 하세요!</h3>
        <p className="text-white text-sm font-medium text-center mb-8">
          아래 QR코드를 카메라로 스캔하면
          <br />
          간편하게 초대할 수 있어요.
        </p>

        <p className="text-[#666666] mb-5 text-sm">다른 방법으로 초대하기</p>
        <div className="flex gap-4 mb-8">
          <Button className="w-12 h-12 rounded-full border-none" size="icon">
            <Image
              src="/icon/kakao.svg"
              alt="KakaoTalk"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </Button>
          <Button className="w-12 h-12 rounded-full border-none" size="icon">
            <Image
              src="/icon/mail.svg"
              alt="mail"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </Button>
          <button
            className="w-12 h-12 rounded-full bg-[#333333] hover:bg-[#333333]/90 flex justify-center items-center"
            type="button"
            onClick={handleCopyLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M13.5164 6.18054L15.7764 3.92055C17.0064 2.69055 19.0064 2.69055 20.2364 3.92055C21.4664 5.15055 21.4664 7.15055 20.2364 8.38055L14.8164 13.8005C13.5864 15.0305 11.5864 15.0305 10.3564 13.8005"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7958 17.8198L8.53582 20.0798C7.30582 21.3098 5.30582 21.3098 4.07582 20.0798C2.84582 18.8498 2.84582 16.8498 4.07582 15.6198L9.49582 10.1998C10.7258 8.96984 12.7258 8.96984 13.9558 10.1998"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <Card className="w-full bg-[#26252a] border-none p-4 mb-6">
          <div className="flex justify-between items-center">
            <span>친구 초대현황</span>
            <p>
              <span className="text-[#985cff] mr-1">0</span>
              <span>명</span>
            </p>
          </div>
        </Card>

        <Card className="w-full bg-[#26252a] border-none p-4">
          <h4 className="font-medium mb-4">꼭 알아두세요!</h4>
          <ul className="space-y-2 text-sm text-[#bbbbbb]">
            <li className="flex items-start before:content-['•'] before:text-[#bbbbbb] before:mr-2">
              <p>
                초대할 수 있는 친구 수는 제한이 없습니다. 마음껏 초대해보세요.
              </p>
            </li>
            <li className="flex items-start before:content-['•'] before:text-[#bbbbbb] before:mr-2">
              <p>
                초대받은 친구가 가입을 완료하면 친구 초대현황에 따라 리워드가
                제공됩니다. (추후 제공)
              </p>
            </li>
            <li className="flex items-start before:content-['•'] before:text-[#bbbbbb] before:mr-2">
              <p>
                운영 정책에 부합하지 않는 방법을 통해 참여한 것으로 판단될 시,
                리워드가 지급되지 않거나 회수 될 수 있습니다.
              </p>
            </li>
            <li className="flex items-start before:content-['•'] before:text-[#bbbbbb] before:mr-2">
              <p>
                친구 초대 리워드는 사전 공지 없이 내용이 변경되거나 종료될 수
                있습니다.
              </p>
            </li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
