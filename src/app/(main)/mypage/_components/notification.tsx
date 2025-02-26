import { cn } from "@/lib/utils";

interface NotificationProps {
  message: string;
  link?: string;
  className?: string;
}

export default function Notification({
  message,
  link = "#",
  className,
}: NotificationProps) {
  return (
    <a
      href={link}
      className={cn(
        "flex items-center gap-2 px-4 py-3 bg-[#985CFF]/15 rounded-md text-xs text-white/80",
        className
      )}
    >
      <span className="flex-1">{message}</span>
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
