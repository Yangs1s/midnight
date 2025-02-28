import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { motion } from "framer-motion";

type NoticeButtonProps = {
  className?: string;
  title: string;
  time: string;
  body: string;
  image?: string;
  actionButton?: React.ReactNode;
};

function ActionButton() {
  return (
    <div className="bg-white/20 rounded-full flex items-center justify-center w-4 h-4">
      <ChevronRight strokeWidth={3} className="w-3 h-3 text-white" />
    </div>
  );
}

export default function NoticeButton({
  className,
  title,
  body,
  time,
  image,
  actionButton = <ActionButton />,
}: NoticeButtonProps) {
  const [open, setOpen] = useState(false);
  const [isFullView, setIsFullView] = useState(false);

  return (
    <div className="relative">
      {isFullView ? (
        <NoticeFullView
          body={body}
          title={title}
          time={time}
          image={image}
          onOpenChange={setIsFullView}
        />
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild className="z-40">
            <button
              type="button"
              className={cn(
                "w-full bg-[#26252A] rounded-md flex items-center gap-2 justify-between px-4 py-[13px]",
                className
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icon/loudspeaker.svg"
                  alt="스피커"
                  width={16}
                  height={16}
                />
                <p className="text-white/60 text-xs">{title}</p>
              </div>
              {actionButton}
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="py-8 px-4">
              <DrawerTitle className="text-white text-lg">
                <div className="flex items-center justify-between">
                  <p className="text-white text-lg">공지사항</p>
                  <button onClick={() => setOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pt-0">
              <p className="text-[16px] text-white font-semibold mb-2">
                {title}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-white text-sm font-medium line-clamp-3">
                  {body}
                </p>
                {image && (
                  <Image
                    className="rounded-md w-[40px] h-[40px] object-cover"
                    src={image}
                    alt="공지사항 이미지"
                    width={40}
                    height={40}
                  />
                )}
              </div>
              <button
                onClick={() => setIsFullView(true)}
                className="w-full flex items-center justify-end gap-1 mt-4"
              >
                <p className="text-[13px] font-semibold leading-[0.75]">
                  전체보기
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M9.34863 2.03906C5.2065 2.03906 1.84863 5.39693 1.84863 9.53906C1.84863 13.6812 5.2065 17.0391 9.34863 17.0391C13.4908 17.0391 16.8486 13.6812 16.8486 9.53906C16.8486 5.39693 13.4908 2.03906 9.34863 2.03906Z"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.0683 6.75873C8.3612 6.46584 8.83607 6.46584 9.12896 6.75873L11.379 9.00873C11.6719 9.30163 11.6719 9.7765 11.379 10.0694L9.12896 12.3194C8.83607 12.6123 8.3612 12.6123 8.0683 12.3194C7.77541 12.0265 7.77541 11.5516 8.0683 11.2587L9.78797 9.53906L8.0683 7.81939C7.77541 7.5265 7.77541 7.05163 8.0683 6.75873Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </svg>
              </button>
            </div>
            <DrawerFooter>
              <div className="flex items-center gap-2">
                <DrawerClose asChild>
                  <button className="w-full bg-[#26252A] rounded-md flex items-center gap-2 justify-center px-4 py-[13px]">
                    닫기
                  </button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

function NoticeFullView({
  body,
  title,
  time,
  image,
  onOpenChange,
}: {
  body: string;
  title: string;
  time: string;
  image?: string;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bg-[#26252A] z-40 top-0 left-0 w-full h-full"
    >
      <div className="w-full h-full p-6 pt-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-start gap-6">
            {/*<button onClick={() => onOpenChange(false)}>*/}
            {/*  <ArrowLeft size={24} />*/}
            {/*</button>*/}
            <p className="text-white text-lg">공지사항</p>
          </div>
          <button onClick={() => onOpenChange(false)}>
            <X size={24} />
          </button>
          {/*<EllipsisVertical size={24} />*/}
        </div>
        <div>
          <p className="text-[16px] text-white font-semibold mb-2">{title}</p>
          <p className="text-white text-sm font-normal mb-8">{body}</p>
        </div>
        {image && (
          <div className="relative w-full aspect-video">
            <Image
              className="rounded-md w-full h-full object-cover"
              src={image}
              alt="공지사항 이미지"
              fill
            />
          </div>
        )}
        {/*<div className="fixed bottom-24 left-0 w-full px-6">*/}
        {/*  <div className="flex items-center space-x-2">*/}
        {/*    <Checkbox*/}
        {/*      id="terms"*/}
        {/*      className="h-4 w-4 rounded-full border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"*/}
        {/*    />*/}
        {/*    <label*/}
        {/*      htmlFor="terms"*/}
        {/*      className="text-white/60 text-sm font-normal"*/}
        {/*    >*/}
        {/*      일주일간 보지 않기*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <button
          className="w-[calc(100%-2rem)] bg-white/20 rounded-md flex items-center gap-2 justify-center px-4 py-[13px] fixed bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2"
          onClick={() => onOpenChange(false)}
        >
          닫기
        </button>
      </div>
    </motion.div>
  );
}
