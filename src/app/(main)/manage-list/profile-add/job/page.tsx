"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const jobs = [
  {
    image: "/images.jpeg",
    region: "서울 강남구",
    title: "공고 제목이 들어갑니다",
    name: "JYP 2팀 홍길동",
    salaryType: "월급",
    salary: "500만원",
  },
  {
    image: "/images.jpeg",
    region: "서울 강남구",
    title: "공고 제목이 들어갑니다",
    name: "JYP 2팀 홍길동",
    salaryType: "월급",
    salary: "500만원",
  },
  {
    image: "/images.jpeg",
    region: "서울 강남구",
    title: "공고 제목이 들어갑니다",
    name: "JYP 2팀 홍길동",
    salaryType: "월급",
    salary: "500만원",
  },
  {
    image: "/images.jpeg",
    region: "서울 강남구",
    title: "공고 제목이 들어갑니다",
    name: "JYP 2팀 홍길동",
    salaryType: "월급",
    salary: "500만원",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="h-dvh bg-[#1b1b1e] text-white">
      <div className="mb-8 flex items-center justify-between">
        <div className={"flex items-center"}>
          <Link href="/manage-list/profile-add?step=2">
            <ArrowLeft className="w-6 h-6 mr-4" />
          </Link>
          <span className="font-semibold">공고 선택</span>
        </div>
      </div>

      <div className={"pb-[90px]"}>
        <div className={"flex flex-col gap-4"}>
          <div className={"flex items-center justify-between"}>
            <div className={"font-semibold text-[18px]"}>등록한 채용 공고</div>
            <span className={"text-[13px] text-white/40"}>
              총 {jobs.length}개
            </span>
          </div>

          <div className={"flex flex-col bg-[#26252A] rounded-[8px]"}>
            {jobs.map((job, i) => (
              <div className={"w-full flex flex-col gap-4"} key={i}>
                <div className={"px-4 py-3 flex items-center gap-3"}>
                  <Checkbox />
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
            ))}
          </div>
        </div>

        <div className={"flex items-center gap-2"}>
          <Button
            type="button"
            className="w-full mt-4 text-[14px] font-semibold"
            onClick={() => {
              router.push("/manage-list/profile-add?step=2");
            }}
          >
            선택완료
          </Button>
        </div>
      </div>
    </div>
  );
}
