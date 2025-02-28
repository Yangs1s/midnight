"use client";

import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LabelRequiredIcon from "@/app/(main)/mypage/_components/label-required-icon";
import AlbumIcon from "@/app/(auth)/signup/_components/album-icon";
import FileIcon from "@/app/(auth)/signup/_components/file-icon";
import CameraIcon from "@/app/(auth)/signup/_components/camera-icon";
import SettingBusinessUploadIcon from "@/app/(main)/mypage/setting-business/_components/setting-business-upload-icon";
import SettingBusinessFileIcon from "@/app/(main)/mypage/setting-business/_components/setting-business-file-icon";
import { toast } from "sonner";

const formSchema = z.object({
  businessRegistration: z.string().optional(),
  manager: z.string().min(1, "담당자명을 입력해주세요"),
  phone: z.string().min(1, "담당자명을 입력해주세요"),
  kakaoId: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function BusinessInfoSetting({
  type,
  trigger,
}: {
  type: "create" | "update";
  trigger: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFileSelectorDrawerOpen, setIsFileSelectorDrawerOpen] =
    useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessRegistration: "",
      manager: "",
      phone: "",
      kakaoId: "",
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        form.setValue("businessRegistration", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
    form.setValue("businessRegistration", "");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log({
      ...data,
      businessRegistration: selectedFile,
    });
    setIsDrawerOpen(false);
    setIsFileSelectorDrawerOpen(false);
    toast("사업자 정보가 저장되었습니다.");
  };

  const dialogClose = () => {
    form.reset();
    setSelectedFile(null);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger className="w-full">{trigger}</DrawerTrigger>
        <DrawerContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">
                      {type === "create"
                        ? "사업자 정보 추가"
                        : "사업자 정보 수정"}
                    </h1>
                    <p className="text-xs text-white/60">
                      추가한 사업자 정보는 심사 후 등록됩니다.
                    </p>
                  </div>
                  <button type="button" onClick={dialogClose}>
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="businessRegistration"
                    render={() => (
                      <FormItem>
                        <FormLabel className="flex gap-1 justify-between items-center">
                          <div className="flex gap-1">
                            사업자 등록증 <LabelRequiredIcon />
                          </div>
                          <p className="text-xs text-white/40">
                            * 형식 : jpg,pdf 10mb 이하
                          </p>
                        </FormLabel>
                        <div className="space-y-2">
                          {selectedFile ? (
                            <div className="flex items-center justify-between bg-[#262626] rounded-md px-4 py-3">
                              <div className="flex items-center gap-2">
                                <SettingBusinessFileIcon />
                                <span className="text-[15px]">
                                  {selectedFile.name}
                                </span>
                                <span className="text-[11px] text-white/30">
                                  {(selectedFile.size / 1024).toFixed(1)}KB
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={handleFileDelete}
                                className="text-muted-foreground hover:text-white"
                              >
                                <X className="h-6 w-6" />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setIsFileSelectorDrawerOpen(true)
                                }
                                className="w-full bg-primary rounded-md p-4 py-3 text-[15px] flex items-center justify-center gap-2"
                              >
                                파일 업로드
                                <SettingBusinessUploadIcon />
                              </button>
                            </div>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="manager"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-1 justify-between items-center">
                          <div className="flex gap-1">
                            담당자명 <LabelRequiredIcon />
                          </div>
                          <p className="text-xs text-white/40">
                            * 최대 12자,특수문자 불가
                          </p>
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full bg-[#262626] rounded-md p-4 text-sm"
                            placeholder="담당자명을 입력해주세요"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-1">
                          연락처 <LabelRequiredIcon />{" "}
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full bg-[#262626] rounded-md p-4 text-sm"
                            placeholder="연락받으실 전화번호를 입력해주세요"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="kakaoId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-1">
                          카카오톡 ID
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full bg-[#262626] rounded-md p-4 text-sm"
                            placeholder="아이디를 입력해주세요 (선택)"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-2 mt-8 p-4 bg-[#26252A] rounded-[8px]">
                  <div className="flex items-center justify-center bg-[#3E3E42] w-[13px] min-w-[13px] h-[13px] rounded-full">
                    <p className="text-[8px]">!</p>
                  </div>
                  <div className="flex flex-col gap-2 text-white/80">
                    <p className="text-xs">
                      사업자 정보 허위 첨부 및 도용 시 제재될 수 있으며 이에
                      따른 모든 책임은 본인에게 있습니다. 등록에 어려움이
                      있으시다면 고객센터로 문의 바랍니다.
                    </p>
                  </div>
                </div>
              </div>

              {/*{console.log("form : ", form)}*/}
              <DrawerFooter className="px-6 py-6">
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-4 bg-primary rounded-md text-sm"
                  >
                    작성완료
                  </button>
                </div>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
      <Drawer
        open={isFileSelectorDrawerOpen}
        onOpenChange={setIsFileSelectorDrawerOpen}
      >
        <DrawerContent className="p-0 bg-[#26252a] border-none">
          <div className="px-4 pt-6 pb-16">
            <div className="flex items-center justify-between gap-2 mb-6">
              <h3 className="text-lg font-semibold">사업자 등록증 업로드</h3>
              <button
                type="button"
                onClick={() => setIsFileSelectorDrawerOpen(false)}
              >
                <X />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => fileRef.current?.click()}
                className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg"
              >
                <AlbumIcon />
                <span>사진 보관함</span>
              </button>
              <button
                onClick={() => fileRef.current?.click()}
                className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg"
              >
                <FileIcon />
                <span>파일 첨부</span>
              </button>
              <button className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg">
                <CameraIcon />
                <span>사진 촬영</span>
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <input
        type="file"
        ref={fileRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
    </>
  );
}
