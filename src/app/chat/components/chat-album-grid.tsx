"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface GridProps {
  images: string[]; // 이미지 경로(또는 URL) 배열
  selectedImages: string[],
  setSelectedImages: Dispatch<SetStateAction<string[]>>;
}


const ChatAlbumGrid = ({ images, selectedImages, setSelectedImages }: GridProps) => {
// 선택된 이미지 경로들을 담는 배열 (누른 순서대로 push)

  console.log(selectedImages);
  // 이미지 클릭 시 선택/해제 처리
  const handleImageClick = (img: string) => {
    setSelectedImages((prev) => {
      const index = prev.indexOf(img);
      if (index === -1) {
        // 아직 선택되지 않았다면 추가
        return [...prev, img];
      } else {
        // 이미 선택되어 있으면 해제
        return prev.filter((item) => item !== img);
      }
    });
  };

  return (
    <>
      {/* 3열 그리드 */}
      <div className="grid grid-cols-3 gap-[2px] px-4 h-[264px] overflow-y-auto">
        <button className={"w-full h-full bg-gray-600 flex justify-center items-center"}>
          <Image src={"/icon/camera3.svg"} width={46} height={46} alt={"camera"} />
        </button>
        {images.map((img, idx) => {
          // 현재 이미지가 선택되었는지 확인
          const order = selectedImages.indexOf(img);
          const isSelected = order !== -1;

          return (
            <div
              key={idx}
              className={`relative cursor-pointer ${isSelected ? "border-2 border-primary" : ""} w-full h-full`}
              onClick={() => handleImageClick(img)}
            >
              {/* Next.js Image 예시: public 폴더나 원격 URL 사용 */}
              <Image
                src={img}
                alt={`image-${idx}`}
                width={300}
                height={300}
                className="object-cover h-full aspect-square"
              />

              {/* 선택된 상태라면 우측 상단에 동그란 원으로 순번 표시 */}
              {isSelected ? (
                <div
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                  {order + 1}
                </div>
              ) : <div
                className="absolute top-1 right-1 w-6 h-6 rounded-full border-2 border-black/65 bg-white opacity-70 text-sm flex items-center justify-center">
              </div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatAlbumGrid;
