"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

// const images = Array.from({ length: 12 }).map(
//   (_, i) => `https://picsum.photos/250/300?random=${i}`,
// );
const images = Array.from({ length: 14 }).map(
  (_, i) => `https://picsum.photos/250/300?random=${i}`,
);

const HeaderContent = ({ text }: { text: string }) => {
  // const [image, setImage] = useState<string[]>(images);


  return (
    <div>
      {
        images.length > 1 ? (
            !text ?
              <div>
                <Carousel className="max-w-md">
                  <CarouselContent className="px-4">
                    {images.map((src, i) => {
                      // 현재 아이템이 선택되었는지 여부

                      return (
                        <CarouselItem
                          key={i}
                          // 클릭 시 handleSelect 호출
                          onClick={() => {
                          }}
                          className={cn(
                            "basis-[14.7%] pl-[6px] rounded-[12px] cursor-pointer",
                          )}
                        >
                          <div className={"relative w-full rounded-[12px] aspect-square"}>

                            {/*오버레이 (voteMode가 true일 때만 표시) */}

                            {/* 선택되었을 때 체크 아이콘 (우측 상단) */}


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
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>

                  {/* 아래쪽 영역 */}
                  <div className="flex justify-between mt-4 items-center px-4">
                    <CarouselDots />
                    <button className="bg-transparent py-1 text-[#BB94FF]">전체보기</button>
                  </div>
                </Carousel>
              </div>
              : <div className="flex relative">
                <Carousel className="w-[40px]">
                  <CarouselContent className="px-[0px]">
                    {images.map((src, i) => (
                      <CarouselItem
                        key={i}
                        className="basis-[100%] rounded-[12px] cursor-pointer"
                      >
                        <div className="relative rounded-[12px]">
                          {/*
                여기서 w-[40px], h-[40px]을 지정하면 정확히 40×40으로 표시됩니다.
                'aspect-square'나 'w-full'을 쓰지 않습니다.
              */}
                          <Image
                            src={src}
                            alt={`vote-${i}`}
                            width={40}
                            height={40}
                            className="object-cover aspect-square rounded-[12px]"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* 아래쪽 영역 */}
                  <div className="flex justify-between w-full mt-4 items-center px-4">
                    <CarouselDots />
                  </div>
                </Carousel>

                {/* 절대 위치 버튼 */}
                <button onClick={() => {
                }} className="absolute bottom-[-2px] right-4 bg-transparent py-1 text-[#BB94FF]">
                  전체보기
                </button>

                <div className="w-full ml-3">
                  <p className="two-line-ellipsis block text-[14px] text-white/40">
                    {text}
                  </p>
                </div>
              </div>
          ) :
          <div className={"flex flex-col"}>
            <Image
              src={images[0]}
              alt={`content`}
              width={100}
              height={40}
              className="w-full h-[88px] object-cover aspect-square rounded-[12px]"
            />
            <button onClick={() => {
            }} className="ml-auto mt-2 bg-transparent py-1 text-[#BB94FF]">
              전체보기
            </button>
          </div>
      }
    </div>
  );
};

export default HeaderContent;
