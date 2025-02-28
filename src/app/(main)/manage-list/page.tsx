"use client";

import { ArrowLeft, ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import InfoIcon from "@/app/(main)/manage-list/_components/icons/InfoIcon";
import TriangleIcon from "@/app/(main)/manage-list/_components/icons/TriangleIcon";
import HeartIcon from "@/app/(main)/manage-list/_components/icons/HeartIcon";
import DuplicateIcon from "@/app/(main)/manage-list/_components/icons/DuplicateIcon";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ReportIcon from "@/app/(main)/manage-list/_components/icons/ReportIcon";
import ShareIcon from "@/app/(main)/manage-list/_components/icons/ShareIcon";
import ArrowIcon from "@/app/(main)/manage-list/_components/icons/ArrowIcon";
import Link from "next/link";

const list = [
  {
    id: 1,
    image: "/images.jpeg",
    nickname: "닉네임",
    like: 821,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: true,
    isLiked: true,
  },
  {
    id: 2,
    image: "/images.jpeg",
    nickname: "s.lee703",
    like: 225,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: false,
  },
  {
    id: 3,
    image: "/images.jpeg",
    nickname: "홍길동",
    like: 225,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: false,
  },
  {
    id: 3,
    image: "/images.jpeg",
    nickname: "홍길동",
    like: 225,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: false,
  },
  {
    id: 3,
    image: "/images.jpeg",
    nickname: "홍길동",
    like: 225,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: false,
  },
  {
    id: 3,
    image: "/images.jpeg",
    nickname: "홍길동",
    like: 225,
    bio: "자기소개 들어갑니다 자기소개 들어갑니다. 소개 1줄까지만노출됩니다.",
    phone: "010-1234-1234",
    username: "jiho102",
    isRecentActive: false,
  },
];

const profiles = [
  { label: "연락처", data: "010-1234-1234" },
  { label: "카카오톡", data: "jiho102" },
  { label: "인스타그램", data: "jiho102_insta" },
];

const job = {
  image: "/images.jpeg",
  region: "서울 강남구",
  title: "공고 제목이 들어갑니다",
  name: "JYP 2팀 홍길동",
  salaryType: "월급",
  salary: "500만원",
};

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("복사되었습니다.");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  };

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white" ref={scrollRef}>
      <header className="flex items-center justify-between p-4 bg-[#2F2F32] -mx-4 -mt-4">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="font-semibold">채팅방 담당 리스트</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-5 flex items-center justify-center bg-[url(/chat-badge.svg)] bg-center bg-no-repeat">
            <span className={"text-black text-[10px] pb-1"}>26</span>
          </div>
        </div>
      </header>

      <div className="-mx-4">
        <Image src={"/banner2.png"} alt={"profile"} width={470} height={48} />
      </div>

      <div
        className={
          "flex flex-col gap-4 py-[14px] px-6 -mx-4 bg-[#2F2F32] rounded-b-[24px] border-b-[1.8px] border-b-primary"
        }
      >
        <div className={"flex gap-5"}>
          <Image
            src={"/images.jpeg"}
            alt="chat-item-image"
            width={60}
            height={60}
            className="rounded-[16px] object-cover w-12 h-12 border border-[#36353a]"
          />

          <div className={"flex flex-col gap-1"}>
            <span className={"font-semibold"}>채팅방명</span>
            <span className={"text-[13px] text-white/50 font-medium"}>
              서울시 강남구
            </span>
          </div>
        </div>

        <div
          className={
            "bg-[#353538] flex flex-col text-[14px] text-[#E8E8E8CC] px-3 py-2 rounded-[16px] mb-[6px]"
          }
        >
          <div>하이퍼 퍼블릭</div>
          <div>강남구 역삼동 145-11 삼정호텔 지하 1층</div>
          <div>영업시간 : 오후 7시 ~ 익일 오후 3시</div>
        </div>
      </div>

      <div className={"px-1 py-6"}>
        <div className={"flex items-center gap-1"}>
          <span className={"text-[18px] font-semibold"}>문의/담당리스트</span>

          <div className="relative group cursor-pointer">
            <InfoIcon />
            <div className="absolute text-[12px] mt-5 left-1/2 transform -translate-x-1/2 p-4 pointer-events-none bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <div
                className={
                  "absolute -top-[14px] left-1/2 transform -translate-x-1/2"
                }
              >
                <TriangleIcon />
              </div>
              <div className={"text-[#484848] font-semibold"}>
                문의/담당리스트
              </div>
              <p
                className={
                  "max-w-[200px] w-[200px] text-[#333333] whitespace-pre-wrap"
                }
              >
                대한 설명이 들어갑니다. 어쩌구 저쩌구..
              </p>
            </div>
          </div>
        </div>

        <div className={"mt-2 text-[13px] text-white/50"}>
          모든 DM은 익명으로 전송됩니다
        </div>

        <div className={"w-full mt-3 flex flex-col"}>
          {list.map((item, i) => (
            <button
              key={i}
              className={
                "w-full flex flex-col border-b border-[#26252a] py-4 gap-2"
              }
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
              <div className={"w-full flex items-center justify-between"}>
                <div className={"flex gap-2 items-center"}>
                  <Image
                    src={item.image}
                    alt={""}
                    width={32}
                    height={32}
                    className={"rounded-[12px] w-8 h-8"}
                  />

                  {item.id === 1 && (
                    <div
                      className={
                        "bg-primary py-1 px-[6px] font-semibold text-[10px] rounded-full"
                      }
                    >
                      내 프로필
                    </div>
                  )}

                  <div className={"flex gap-1 items-center"}>
                    <div className={"font-semibold text-[15px]"}>
                      {item.nickname}
                    </div>

                    <button>
                      <HeartIcon isActive={item.isLiked} isRed />
                    </button>

                    <div className={"text-[12px]"}>{item.like}</div>
                  </div>
                </div>

                {item.isRecentActive && (
                  <div className={"text-primary text-[11px] font-semibold"}>
                    최근접속
                  </div>
                )}
              </div>

              <p className={"text-[13px] text-white/70 truncate"}>{item.bio}</p>

              <div className={"w-full flex items-center justify-between"}>
                <div
                  className={
                    "flex items-center gap-1 text-[13px] font-medium text-white/60"
                  }
                >
                  <div>{item.phone}</div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.phone);
                    }}
                  >
                    <DuplicateIcon />
                  </button>

                  <div>·</div>

                  <div>{item.username}</div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.username);
                    }}
                  >
                    <DuplicateIcon />
                  </button>
                </div>

                <button
                  className={
                    "bg-[#302F36] rounded-full" +
                    " py-[6px] px-4 text-[12px] font-medium"
                  }
                >
                  DM 보내기
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="w-full flex justify-between items-center text-[20px] text-white mb-4">
              <div>담당자 프로필</div>
              <div className={"flex items-center gap-4"}>
                <button type={"button"}>
                  <ReportIcon />
                </button>
                <button type={"button"}>
                  <ShareIcon />
                </button>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className={"p-4 pt-0 flex flex-col items-center"}>
            <div className={"flex flex-col items-center gap-4"}>
              <Image
                src={"/images.jpeg"}
                alt={""}
                width={80}
                height={80}
                className={"rounded-[32px] w-20 h-20"}
              />

              <div className={"flex flex-col items-center gap-2"}>
                <div className={"text-primary text-[11px]"}>최근접속</div>
                <div className={"flex gap-2 items-center"}>
                  <div className={"font-semibold"}>닉네임</div>
                  <div
                    className={
                      "bg-primary px-[6px] py-1 rounded-full text-[10px]"
                    }
                  >
                    내 프로필
                  </div>
                </div>
              </div>

              <div
                className={
                  "w-full text-[13px] text-white/70 flex flex-col items-center gap-2"
                }
              >
                <p
                  className={`max-w-[438px] ${isBioOpen ? "h-full" : "h-10"} overflow-hidden text-ellipsis`}
                >
                  알바고수분들은 이미 업종에 맞게 본인의 매력을 알바고수분들은
                  이미 업종에 맞게 본인의 매력을 알바고수분들은 이미 업.
                  알바고수분들은 이미 업종에 맞게 본인의 매력을 알바고수분들은
                  이미 업종에 맞게 본인의 매력을 알바고수분들은 이미 업.
                </p>
                <button
                  className={"font-medium flex items-center gap-1"}
                  onClick={() => setIsBioOpen(!isBioOpen)}
                >
                  <ArrowIcon
                    className={`w-3 h-3 stroke-[3] ${isBioOpen ? "rotate-180" : ""}`}
                  />
                  {isBioOpen ? "접기" : "더보기"}
                </button>
              </div>

              <div className={"flex w-full justify-end items-center"}>
                <button
                  className={
                    "flex items-center justify-center px-2 py-1 bg-[#3E3E42] rounded-full"
                  }
                >
                  <HeartIcon isActive={true} className={"w-5 h-5"} />
                  <div className={"text-primary text-[13px]"}>822</div>
                </button>
              </div>

              <div
                className={
                  "w-full flex flex-col p-4 text-[14px] font-medium bg-[#3E3E42] rounded-[4px] gap-3"
                }
              >
                {profiles.map((profile, i) => (
                  <>
                    {i !== 0 && (
                      <div className={"w-full h-[1px] bg-[#434348]"}></div>
                    )}

                    <div
                      className={"flex items-center justify-between"}
                      key={i}
                    >
                      <div>{profile.label}</div>
                      <div className={"flex items-center gap-2"}>
                        <div>{profile.data}</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(profile.data);
                          }}
                        >
                          <DuplicateIcon />
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {job && (
              <div
                className={
                  "w-full mt-8 pt-5 border-t border-t-[#5B5B5B80] flex flex-col gap-4"
                }
              >
                <div className={"font-semibold"}>모집 중인 채용 공고</div>

                <div
                  className={
                    "bg-[#434348] px-4 py-3 rounded-[8px] flex items-center gap-3"
                  }
                >
                  <Image
                    src={job.image}
                    alt={""}
                    width={40}
                    height={40}
                    className={"w-10 h-10 rounded-[12px]"}
                  />

                  <div className={"flex flex-col gap-1"}>
                    <div className={"text-[11px] text-white/60"}>
                      {job.region}
                    </div>

                    <div className={"font-semibold"}>{job.title}</div>

                    <div className={"flex items-center gap-1 text-[12px]"}>
                      <div className={"font-medium text-white/60"}>
                        {job.name}
                      </div>
                      <div className={"text-white/30"}>·</div>
                      <div className={"text-primary font-semibold"}>
                        {job.salaryType}
                      </div>
                      <div
                        className={"text-white/70 font-semibold text-[12px]"}
                      >
                        {job.salary}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DrawerFooter>
            <div className={"flex w-full gap-2"}>
              <button
                className={
                  "w-full bg-[#3E3E42] p-4 rounded-[4px] text-[14px] font-bold"
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                닫기
              </button>
              <button
                className={
                  "w-full p-4 bg-primary rounded-[4px] text-[14px] font-bold"
                }
              >
                DM 보내기
              </button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div
        className={
          "w-full max-w-[438px] fixed flex items-center justify-end bottom-[70px] mb-2 gap-3"
        }
      >
        <Link
          href={"/manage-list/profile-add?step=1"}
          className={
            "rounded-full bg-primary p-[10px] text-[14px] font-semibold"
          }
        >
          + 프로필 등록
        </Link>

        <button
          className={
            "flex items-center justify-center bg-white w-10 h-10 rounded-full"
          }
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ArrowUpIcon className={"text-[#1b1b1e] stroke-[3]"} />
        </button>
      </div>
    </div>
  );
}
