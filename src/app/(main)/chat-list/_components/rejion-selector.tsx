"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const regions = [
  { value: "all", label: "전체 지역" },
  { value: "seoul", label: "서울" },
  { value: "seocho", label: "서초구" },
  { value: "gangdong", label: "강동구" },
];

export function RegionSelector() {
  const [value, setValue] = React.useState("all");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <div className="relative py-2 flex w-full items-center gap-2 border-b border-[#26252A]">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[80px] border-none bg-transparent text-white !p-0">
          <SelectValue placeholder="전체 지역" />
        </SelectTrigger>
        <SelectContent className="border-neutral-800 text-white">
          {regions.map((region) => (
            <SelectItem
              key={region.value}
              value={region.value}
              className="text-white focus:bg-neutral-800 focus:text-white"
            >
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isSearchOpen ? (
        <div className="flex flex-1 items-center gap-2">
          <Input
            className="flex-1 bg-[#26252A] border-none text-white placeholder:text-neutral-500 focus:outline-none focus:ring-0 h-[35px]"
            placeholder="검색어를 입력하세요"
            autoFocus
          />
          <button
            className="h-8 w-8  text-primary text-xs"
            onClick={() => setIsSearchOpen(false)}
          >
            닫기
          </button>
        </div>
      ) : (
        <div className="ml-auto flex items-center gap-1">
          <button className="h-8 w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.5006 6.50032C17.6091 5.60194 16.527 4.91503 15.3341 4.49032C14.1412 4.06561 12.868 3.91394 11.6085 4.04652C7.70518 4.43955 4.49315 7.60505 4.05708 11.5035C3.4721 16.6554 7.46055 21 12.4913 21C14.0974 21 15.6706 20.5448 17.028 19.6874C18.3855 18.83 19.4714 17.6055 20.1598 16.1561C20.5001 15.4444 19.9896 14.6265 19.2025 14.6265C18.809 14.6265 18.4368 14.839 18.2666 15.1895C17.6491 16.5163 16.5929 17.5902 15.2757 18.2305C13.9585 18.8709 12.4607 19.0386 11.0342 18.7055C8.67304 18.185 6.76922 16.2624 6.26934 13.9042C6.0592 12.9718 6.06164 12.0042 6.27645 11.0729C6.49127 10.1416 6.91298 9.27039 7.51038 8.52381C8.10778 7.77724 8.8656 7.17435 9.72777 6.75974C10.5899 6.34512 11.5344 6.1294 12.4913 6.12853C14.2569 6.12853 15.831 6.86148 16.9796 8.01933L15.3736 9.62332C14.7036 10.2925 15.1715 11.4398 16.1181 11.4398H19.9364C20.5214 11.4398 21 10.9618 21 10.3775V6.56405C21 5.61865 19.8513 5.14064 19.1813 5.80985L18.5006 6.50032Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="h-8 w-8 " onClick={() => setIsSearchOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5 10.5C17.5 12.0723 16.9816 13.5236 16.1064 14.6922L20.2071 18.7929C20.5976 19.1834 20.5976 19.8166 20.2071 20.2071C19.8166 20.5976 19.1834 20.5976 18.7929 20.2071L14.6922 16.1064C13.5236 16.9816 12.0723 17.5 10.5 17.5C6.63401 17.5 3.5 14.366 3.5 10.5C3.5 6.63401 6.63401 3.5 10.5 3.5C14.366 3.5 17.5 6.63401 17.5 10.5ZM10.5 15.5C13.2614 15.5 15.5 13.2614 15.5 10.5C15.5 7.73858 13.2614 5.5 10.5 5.5C7.73858 5.5 5.5 7.73858 5.5 10.5C5.5 13.2614 7.73858 15.5 10.5 15.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
