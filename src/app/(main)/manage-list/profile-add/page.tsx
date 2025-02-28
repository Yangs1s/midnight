"use client";

import ProfileBiz from "@/app/(main)/manage-list/_components/profile-biz";
import { useSearchParams } from "next/navigation";
import ProfileAdd from "@/app/(main)/manage-list/_components/profile-add";

export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  if (Number(step) === 1) {
    return <ProfileBiz />;
  } else if (Number(step) === 2) {
    return <ProfileAdd />;
  }
}
