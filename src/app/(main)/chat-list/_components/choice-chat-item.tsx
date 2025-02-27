"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ChoiceChatItemProps {
  type: string;
  time: string;
  timeType: string;
  title: string;
  location: string;
  description: string;
  description2?: string;
  imageUrl?: string;
  defaultBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onClick?: () => void;
  isNew?: boolean;
}

export default function ChoiceChatItem({
  type,
  time,
  timeType,
  title,
  location,
  description,
  description2,
  imageUrl,
  defaultBookmarked = false,
  onBookmarkClick,
  onClick,
  isNew = false,
}: ChoiceChatItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick?.();
  }

  return (
    <div className="grid grid-cols-[60px_1fr_36px] gap-2 py-4 border-b border-white/5 last:border-b-0">
      <div>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="chat-item-image"
            width={60}
            height={60}
            className="rounded-[8px] object-cover w-[60px] h-[60px] border border-[#464646]"
          />
        ) : (
          <div className="bg-primary rounded-[8px] w-[60px] h-[60px] border border-[#464646]" />
        )}
      </div>
      <div onClick={onClick}>
        <div className="flex flex-col gap-[2px]">
          <p className="flex items-center gap-1 text-xs text-white/60">
            <span className="text-[#BB94FF]">{type}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/30" />
            <span className="text-white">{timeType}</span>{" "}
            <span className="text-[#BB94FF]">{time}</span>
            <span className="text-white">기준</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-[15px] font-bold max-w-[65%] truncate">
              {title}
            </p>
            <div className="flex items-center gap-[2px]">
              <p className="text-xs text-white/60">{location}</p>
              {isNew && (
                <Image src="/icon/new.svg" alt="new" width={16} height={16} />
              )}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="flex justify-center items-center w-[12px] h-[12px] text-[6px] leading-3 rounded-full border border-white/60 bg-transparent">
              E
            </p>
            <p className="text-[11px] text-white/60">
              {description} {description2 && "/ " + description2}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center h-full w-[36px]">
        <button onClick={handleBookmarkClick}>
          <Star
            className={`w-6 h-6 text-white/60 transition-colors ${
              isBookmarked ? "text-yellow-400 fill-yellow-400" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
