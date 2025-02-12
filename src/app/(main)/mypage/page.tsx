"use client";

import Image from "next/image";
import Notification from "./_components/notification";
import {
  Bell,
  ChevronLeft,
  HelpCircle,
  Mail,
  LayoutGrid,
  UserPlus,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { BusinessSectionList, UserSectionList } from "./_components/section";
import { Separator } from "@/components/ui/separator";

import ProfileSetting from "@/app/(main)/mypage/_components/profile-setting";
import BambooCarousel from "@/app/(main)/chat-list/_components/bamboo-carousel";

function ProfileSection({ levelPercentage }: { levelPercentage: number }) {
  return (
    <div className="py-4 flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
        <Image
          src="/images.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
          width={64}
          height={64}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">신사동 장원영</h2>
          <span className="text-[#5d50e7] text-sm">일반</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="text-sm">Lv.1</div>
          <div className="flex-1 h-1 bg-gray-700 rounded-full">
            <div
              className="h-full bg-[#5d50e7] rounded-full"
              style={{ width: `${Math.min(levelPercentage, 100)}%` }}
            ></div>
          </div>
          <HelpCircle className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      <ProfileSetting />
    </div>
  );
}

type Props = {
  searchParams: {
    userType: "business" | "user";
  };
};

export default function ProfilePage({ searchParams }: Props) {
  const isBusiness = searchParams.userType === "business";

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white">
      <header className="flex items-center justify-between py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-lg">마이페이지</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="w-6 h-6" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center p-0">
              29
            </Badge>
          </div>
          <div className="relative">
            <Mail className="w-6 h-6" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center p-0">
              26
            </Badge>
          </div>
        </div>
      </header>

      <ProfileSection levelPercentage={25} />

      <div className="grid grid-cols-3 gap-2 py-4">
        {[
          {
            title: "홈 위젯 설정",
            subtitle: "편리한 이용",
            icon: <LayoutGrid className="w-5 h-5 mb-2" />,
          },
          {
            title: "친구초대",
            subtitle: "간단한 초대",
            icon: <UserPlus className="w-5 h-5 mb-2" />,
          },
          {
            title: "알림설정",
            subtitle: "중요한알림설정",
            icon: <Bell className="w-5 h-5 mb-2" />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#262626] p-4 rounded-lg flex flex-col items-center text-center"
          >
            {item.icon}
            <div className="text-sm font-medium">{item.title}</div>
            <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>
          </div>
        ))}
      </div>

      <BambooCarousel images={[{ url: "/images.jpeg" }]} className="mb-4" />

      <div className="grid grid-cols-4 items-center py-4 bg-[#262626] rounded-lg overflow-x-auto">
        {[
          { value: "100+", label: "등록 광고" },
          { value: "30", label: "마감 임박" },
          { value: "5", label: "신규 문의" },
          { value: "50+", label: "마감" },
        ].map((stat, i) => (
          <div key={i} className="text-center relative">
            <div className="text-lg font-bold whitespace-nowrap">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">
              {stat.label}
            </div>
            {i < 3 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/20" />
            )}
          </div>
        ))}
      </div>

      <Notification message="새로운 알림이 있습니다." className="my-4" />

      {isBusiness ? <BusinessSectionList /> : <UserSectionList />}

      <div className="flex items-center gap-4 mb-2 bg-[#262626] p-4 rounded-lg">
        <Mail className="w-6 h-6 text-gray-400" />
        <div className="flex-1">
          <span className="text-sm text-white">언제나 귀 기울이겠습니다</span>
          <p className="text-xs text-gray-500">
            미드나잇 테라스에게 바라는 점을 말씀해주세요
          </p>
        </div>
        <div className="bg-gray-700 rounded-full p-2">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>

      <Separator className="my-8 !h-0" />

      <div className="flex items-center justify-center">
        <button
          onClick={() => alert("로그아웃")}
          className="px-6 py-2 bg-[#262626] rounded-full text-sm"
        >
          <span className="text-sm text-white">로그아웃</span>
        </button>
      </div>

      <Separator className="my-8 !h-0" />

      <footer className="py-4">
        <div className="text-left text-xs text-gray-500">
          <p>MIDNIGHT@TERRACE.COM / 카카오톡 테라스인 찾기</p>
          <p className="mt-1">
            의뢰 컨텐 정보 및 고객센터 관련 안내문구가 들어갑니다
          </p>
          <p className="mt-1">고객센터 운영시간: 평일 00:00~00:00</p>
        </div>
      </footer>
    </div>
  );
}
