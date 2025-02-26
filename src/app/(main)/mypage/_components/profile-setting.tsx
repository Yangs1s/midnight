"use client";

import { Camera } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nickname: z.string().min(2, "2자 이상 입력해주세요").max(20),
  image: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProfileSetting() {
  const [preview, setPreview] = useState<string>("/random-profile.png");
  const fileRef = useRef<HTMLInputElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "신사동 장원영",
      image: "/images.jpeg",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        form.setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsDrawerOpen(false);
  };

  const dialogClose = () => {
    form.reset();
    setIsDrawerOpen(false);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <span className="px-4 py-2 bg-[#262626] rounded-full text-sm">
          편집
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="p-6">
            <h1 className="text-lg font-medium mb-8">프로필 편집</h1>

            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileRef}
                  onChange={handleImageUpload}
                />
                <div
                  className={cn(
                    "w-24 h-24 rounded-full overflow-hidden",
                    !preview && "bg-gray-700"
                  )}
                >
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/60">
                      No Image
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                  onClick={() => fileRef.current?.click()}
                >
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="w-full">
                <label className="block text-xs text-muted-foreground mb-2">
                  닉네임
                </label>
                <input
                  {...form.register("nickname")}
                  className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                  placeholder="닉네임을 입력해주세요"
                />
                {form.formState.errors.nickname && (
                  <p className="text-xs text-red-500 mt-1">
                    {form.formState.errors.nickname.message}
                  </p>
                )}
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-muted-foreground">
                    {form.watch("nickname").length}/20
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DrawerFooter className="px-6 py-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={dialogClose}
                className="flex-1 px-4 py-3 bg-[#262626] rounded-md text-sm"
              >
                닫기
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-primary rounded-md text-sm"
              >
                저장
              </button>
            </div>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
