"use client";

import GlobalHeader from "@/components/container/global-header";
import CollapsibleWidget from "@/app/(main)/mypage/widget-setting/_components/collapsible-widget";
import WidgetTimerIcon from "@/app/(main)/mypage/widget-setting/_components/widget-timer-icon";
import WidgetTalkIcon from "@/app/(main)/mypage/widget-setting/_components/widget-talk-icon";
import WidgetLoungeIcon from "@/app/(main)/mypage/widget-setting/_components/widget-lounge-icon";
import WidgetBookIcon from "@/app/(main)/mypage/widget-setting/_components/widget-book-icon";
import React from "react";
import Image from "next/image";

const widget1 = [
  { title: "타이머 + 숏컷", image: "/widget-setting/image.png", width: 204 },
  { title: "숏컷", image: "/widget-setting/image2.png", width: 95 },
];

const widget2 = [
  { title: "타이머", icon: <WidgetTimerIcon /> },
  { title: "실시간톡", icon: <WidgetTalkIcon /> },
  { title: "라운지", icon: <WidgetLoungeIcon /> },
  { title: "가계부", icon: <WidgetBookIcon /> },
];

export default function widgetSettingPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white w-full">
      <GlobalHeader title={"위젯 설정 가이드"} className={"border-none"} />

      <div className="flex flex-col gap-4 -mx-4">
        <div className="bg-[#302F35] rounded-[2px]">
          <CollapsibleWidget
            key={0}
            badge={"홈 화면"}
            title={"위젯 추가하는 법"}
            trigger={
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between mt-5">
                  {widget1.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 justify-center items-center"
                    >
                      <div
                        className={`flex flex-col w-[95px] h-[95px] justify-center items-center rounded-full bg-[#0D0D0D] relative`}
                        style={{ width: item.width + "px" }}
                      >
                        <Image
                          src={item.image}
                          alt={"widget-image" + index}
                          fill
                          priority
                          className={`object-cover object-center`}
                        />
                      </div>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <div className="flex flex-col bg-[#26252A] border p-4 mt-4">
              <div className="py-4 flex gap-2 h-[420px] overflow-x-auto touch-pan-x no-scrollbar">
                <Image
                  src={"/widget-setting/widget-home01.png"}
                  alt={"widget-home01"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-home02.png"}
                  alt={"widget-home02"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-home03.png"}
                  alt={"widget-home03"}
                  width={193}
                  height={418}
                />
              </div>

              <div className="text-[15px] font-medium">
                <p>
                  1. 홈 화면의 빈 공간을 길게 누른 후 왼쪽 상단의 + 버튼을
                  누릅니다.
                </p>
                <p>
                  2. ‘미드나잇테라스’를 검색하면 ‘타이머’ 위젯이 보일 거예요.
                </p>
                <p>3. ‘위젯 추가’를 누르면 끝!</p>
              </div>
            </div>
          </CollapsibleWidget>
        </div>
        <div className="bg-[#302F35] rounded-[2px]">
          <CollapsibleWidget
            key={1}
            badge={"잠금화면"}
            title={"위젯 추가하는 법"}
            trigger={
              <div className="p-4 flex flex-col gap-4">
                <div className="grid grid-cols-4 mt-5">
                  {widget2.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 justify-center items-center"
                    >
                      <div className="flex flex-col w-[58px] h-[58px] justify-center items-center rounded-full bg-[#0D0D0D]">
                        {item.icon}
                        <p className="text-[9px]">{item.title}</p>
                      </div>
                      <p className="text-sm font-semibold">숏컷 {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <div className="flex flex-col bg-[#26252A] border p-4 mt-4">
              <div className="py-4 flex gap-2 h-[420px] overflow-x-auto touch-pan-x no-scrollbar">
                <Image
                  src={"/widget-setting/widget-private01.png"}
                  alt={"widget-private01"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-private02.png"}
                  alt={"widget-private02"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-private03.png"}
                  alt={"widget-private03"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-private04.png"}
                  alt={"widget-private04"}
                  width={193}
                  height={418}
                />
                <Image
                  src={"/widget-setting/widget-private05.png"}
                  alt={"widget-private05"}
                  width={193}
                  height={418}
                />
              </div>

              <div className="text-[15px] font-medium">
                <p>
                  1. 잠금 화면을 길게 누름 후 하단 사용자화 버튼을 클릭해주세요.
                </p>
                <p>2. 잠금화면을 선택 후 위젯 영역을 클릭해주세요.</p>
                <p>
                  3. 위젯 추가 버튼을 클릭 후 미드나잇테라스를 선택해주세요.
                </p>
              </div>
            </div>
          </CollapsibleWidget>
        </div>
      </div>
    </div>
  );
}
