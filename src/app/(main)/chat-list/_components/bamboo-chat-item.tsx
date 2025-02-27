import { Star } from "lucide-react";
import { useState } from "react";

interface BambooChatItemProps {
  imageUrl?: string;
  title: string;
  description: string;
  subDescription: string;
  defaultBookmarked?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  onBookmarkClick?: () => void;
}

export default function BambooChatItem({
  imageUrl,
  title,
  description,
  subDescription,
  defaultBookmarked = false,
  isActive = true,
  onClick,
  onBookmarkClick,
}: BambooChatItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick?.();
  };

  return (
    <div
      className="relative w-full h-[124px] rounded-lg overflow-hidden my-4"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: imageUrl ? "transparent" : "#7C3AED",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      <div className="relative px-4 py-6 flex flex-col justify-between h-full">
        {!isActive && (
          <p className="absolute top-0 left-0 bg-[#757575]/60 opacity-60 py-[3px] px-[10px] rounded-full z-[9] text-[11px]">
            종료
          </p>
        )}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <p className="text-[16px] font-semibold text-white">{title}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M11.6469 11.5L10.1147 11.4966L7.54356 7.72251L7.49553 7.7224L7.48733 11.4909L5.66211 11.4869L5.67731 4.5L7.23835 4.50343L9.77107 8.26782L9.82871 8.26795L9.83689 4.50913L11.6621 4.51314L11.6469 11.5Z"
                  fill="#FF3F3F"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-white/70">{description}</p>
          </div>
          <button onClick={handleBookmarkClick}>
            <Star
              className={`w-6 h-6 transition-colors ${
                isBookmarked ? "text-yellow-400 fill-yellow-400" : "text-white"
              }`}
            />
          </button>
        </div>

        <div className="flex items-end justify-between">
          <p className="text-xs text-[#C3C3C3]">{subDescription}</p>
          <button
            onClick={onClick}
            className="bg-white/15 border border-white/15 text-white px-[10px] py-[8px] rounded-md text-xs"
          >
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
}
