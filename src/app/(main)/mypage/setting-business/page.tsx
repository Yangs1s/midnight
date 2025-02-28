"use client";
import React from "react";
import GlobalHeader from "@/components/container/global-header";
import SettingBusinessWriteIcon from "@/app/(main)/mypage/setting-business/_components/setting-business-write-icon";
import SettingBusinessDeleteIcon from "@/app/(main)/mypage/setting-business/_components/setting-business-delete-icon";
import Image from "next/image";
import BusinessInfoSetting from "@/app/(main)/mypage/_components/business-info-setting";

const businessData = [
  {
    id: 1,
    isPrimary: true,
    adCount: 2,
    status: "심사완료",
    businessName: "미드나잇테라스",
    phone: "010-1122-3344",
    kakaoId: "qwer12!!!",
    businessNumber: "000-00-00000",
    ceo: "우지호",
    address: "서울 강남구 테헤란로 123",
  },
  {
    id: 2,
    isPrimary: false,
    adCount: 0,
    status: "심사완료",
    businessName: "예시사업체",
    phone: "010-9999-8888",
    kakaoId: "exampleKakao",
    businessNumber: "111-11-11111",
    ceo: "홍길동",
    address: "서울 종로구 세종대로 456",
  },
  {
    id: 3,
    isPrimary: false,
    adCount: 0,
    status: "심사중",
    businessName: "예시사업체2",
    phone: "010-9999-8888",
    kakaoId: "exampleKakao",
    businessNumber: "111-11-11111",
    ceo: "홍길동",
    address: "서울 종로구 세종대로 456",
  },
];

export default function SettingBusinessPage() {
  return (
    <div className="bg-[#1b1b1e] text-white">
      <GlobalHeader title={"사업자 정보 관리"} className={"border-none"} />

      <div className="flex flex-col gap-4">
        {businessData.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-[8px] ${item.isPrimary ? "border border-primary" : ""}`}
          >
            <div className="flex items-center justify-between p-4 gap-4 bg-[#302F35] rounded-t-[8px]">
              <div className="flex items-center gap-3">
                {item?.adCount > 0 && (
                  <span className="py-[4px] px-[6px] bg-primary flex items-center justify-center rounded-full text-xs">
                    광고중 {item.adCount}
                  </span>
                )}
                {item.status === "심사완료" ? (
                  <span className="font-bold">{item.businessName}</span>
                ) : (
                  <span className="py-[4px] px-[6px] bg-[#FF5151] flex items-center justify-center rounded-full text-xs">
                    심사중
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <button type="button">
                  <SettingBusinessWriteIcon />
                </button>
                <button type="button">
                  <SettingBusinessDeleteIcon />
                </button>
              </div>
            </div>
            <div className="bg-[#26252A] flex flex-col p-4 gap-2 rounded-b-[8px]">
              <div className="text-sm font-medium">
                <p>담당자명</p>
                <div className="flex items-center gap-2">
                  <p>{item.phone}</p>
                  <div className="w-[1px] h-[12px] bg-white/20" />
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/kakao-icon.png"}
                      alt="kakao-icon"
                      width={14}
                      height={14}
                    />
                    <p>{item.kakaoId}</p>
                  </div>
                </div>
              </div>
              <div className="text-xs text-white/50 flex flex-col gap-1">
                {item.status === "심사완료" ? (
                  <>
                    <div className="flex items-center gap-2">
                      <p>사업자 번호 :</p>
                      <p>{item.businessNumber}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>대표자 :</p>
                      <p>{item.ceo}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>사업장 소재지 :</p>
                      <p>{item.address}</p>
                    </div>
                  </>
                ) : (
                  <p>사업자 정보는 심사 후 등록됩니다.</p>
                )}
              </div>
            </div>
          </div>
        ))}

        <BusinessInfoSetting
          type={"create"}
          trigger={
            <div className="w-full bg-primary rounded-[4px] h-[48px] flex justify-center items-center mt-4">
              사업자 정보 추가
            </div>
          }
        />
      </div>
    </div>
  );
}
