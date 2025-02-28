"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function VoteContent() {
  // 예시로 15장의 이미지
  const images = Array.from({ length: 15 }).map(
    (_, i) => `https://picsum.photos/250/300?random=${i}`,
  );

  const [voteComplete, setVoteMode] = React.useState(false);
  // 선택된 이미지의 인덱스를 저장할 배열
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  // 이미지 클릭 핸들러
  const handleSelect = (index: number) => {
    // voteComplete === true면 클릭(선택/해제) 불가능
    if (voteComplete) return;

    setSelectedItems((prev) => {
      // 이미 선택되어 있으면 해제, 없으면 추가
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };


  return (
    <div className={"w-full"}>
      <Carousel className="max-w-md">
        <CarouselContent className="px-4">
          {images.map((src, i) => {
            // 현재 아이템이 선택되었는지 여부
            const isSelected = selectedItems.includes(i);

            return (
              <CarouselItem
                key={i}
                // 클릭 시 handleSelect 호출
                onClick={() => handleSelect(i)}
                className={cn(
                  "basis-[25%] pl-[6px] rounded-[12px] cursor-pointer",
                )}
              >
                <div className={"relative w-full rounded-[12px] aspect-square"}>

                  {/*오버레이 (voteMode가 true일 때만 표시) */}
                  {voteComplete && (
                    <div
                      className="pointer-events-none absolute rounded-[12px] top-0 left-0 w-[100%] p-2 bg-black/60 h-full text-white">
                      <div className={"absolute bottom-2 w-[90%] "}>
                        <p className="text-sm">80명(26%)</p>
                        <div className="relative w-full h-1 bg-gray-300 mt-1">
                          <div
                            className="absolute left-0 top-0 h-full bg-primary"
                            style={{ width: "26%" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 선택되었을 때 체크 아이콘 (우측 상단) */}

                  {!voteComplete && (isSelected ? (
                    <div
                      className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full">
                      ✓
                    </div>
                  ) : (
                    <div
                      className="absolute top-1 right-1 w-5 h-5 bg-white/40 border-gray-50 border-2 text-white text-xs flex items-center justify-center rounded-full">
                      ✓
                    </div>
                  ))}

                  <Image
                    src={src}
                    alt={`vote-${i}`}
                    width={80}
                    height={80}
                    className={cn(
                      "w-full h-auto object-cover rounded-[12px] aspect-square",
                    )}
                  />

                </div>
                <p className="mt-1">항목명</p>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* 아래쪽 영역 */}
        <div className="flex justify-between mt-4 items-center px-4">
          <CarouselDots />
          {selectedItems.length === 0 && (
            <button className="bg-transparent text-primary py-1">
              결과 미리보기
            </button>
          )}
          {selectedItems.length > 0 && (
            <button
              className="bg-primary rounded-2xl px-2 py-1"
              onClick={() => setVoteMode((prev) => !prev)}
            >
              {voteComplete ? "투표 다시하기" : "투표하기"}
            </button>
          )}
          <button className="bg-transparent py-1 text-[#BB94FF]">전체보기</button>
        </div>
      </Carousel>
    </div>
  );
}
