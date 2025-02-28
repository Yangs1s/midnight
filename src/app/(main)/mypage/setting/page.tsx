"use client";

import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Withdrawal from "@/app/(main)/mypage/_components/withdrawal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import GlobalHeader from "@/components/container/global-header";
import { useRouter } from "next/navigation";
import LabelRequiredIcon from "@/app/(main)/mypage/_components/label-required-icon";

const formSchema = z
  .object({
    id: z
      .string()
      .min(2, "2자 이상 입력해주세요")
      .max(12, "12자 이하로 입력해주세요")
      .regex(/^[a-z0-9]+$/, "영문 소문자, 숫자만 입력 가능합니다"),
    rawPassword: z
      .string()
      .min(8, "8자 이상 입력해주세요")
      .max(20, "20자 이하로 입력해주세요")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영문, 숫자, 특수문자를 포함해주세요"
      ),
    password: z
      .string()
      .min(8, "8자 이상 입력해주세요")
      .max(20, "20자 이하로 입력해주세요")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영문, 숫자, 특수문자를 포함해주세요"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

type Props = {
  searchParams: {
    userType: "business" | "user";
  };
};

export default function SettingPage({ searchParams }: Props) {
  const router = useRouter();
  const isBusiness = searchParams.userType === "business";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "qwerty1234",
      rawPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const password = useWatch({
    control: form.control,
    name: "password",
  });

  const rawPassword = useWatch({
    control: form.control,
    name: "rawPassword",
  });

  const confirmPassword = useWatch({
    control: form.control,
    name: "confirmPassword",
  });

  const isValidRawPassword = rawPassword && !form.formState.errors.rawPassword;
  const isValidPassword = password && !form.formState.errors.password;
  const isValidConfirmPassword =
    confirmPassword && !form.formState.errors.confirmPassword;

  return (
    <div className="bg-[#1b1b1e] text-white">
      <GlobalHeader title={"회원정보 수정"} className={"border-none"} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-6 space-y-6">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                    placeholder="2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rawPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-1">
                  현재 비밀번호 <LabelRequiredIcon />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm pr-10"
                      placeholder="사용 중인 비밀번호를 입력해주세요"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                {form.formState.errors.rawPassword && (
                  <p className="text-[#ff3f3f] text-sm mt-1">
                    {form.formState.errors.rawPassword.message}
                  </p>
                )}
                {isValidRawPassword && (
                  <p className="text-primary text-sm mt-1">
                    비밀번호가 일치합니다
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-1">
                  새 비밀번호 <LabelRequiredIcon />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm pr-10"
                      placeholder="바꿀 비밀번호를 입력해주세요"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                {!form.formState.errors.password && !password && (
                  <p className="text-xs text-white/30 mt-1">
                    영문, 숫자, 특수문자를 포함한 8~20자만 사용 가능
                  </p>
                )}
                {form.formState.errors.password && (
                  <p className="text-[#ff3f3f] text-sm mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
                {isValidPassword && (
                  <p className="text-primary text-sm mt-1">
                    사용할 수 있는 비밀번호입니다
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-1">
                  새 비밀번호 확인 <LabelRequiredIcon />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm pr-10"
                      placeholder="1번 더 입력해주세요"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                {form.formState.errors.confirmPassword && (
                  <p className="text-[#ff3f3f] text-sm mt-1">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
                {isValidConfirmPassword && (
                  <p className="text-primary text-sm mt-1">
                    비밀번호가 일치합니다
                  </p>
                )}
              </FormItem>
            )}
          />
          <button type="submit" className="hidden" id="submit-button">
            저장
          </button>
        </form>
      </Form>

      <button
        type="button"
        className="flex justify-center items-center bg-[#151515] rounded-[5px] w-full h-[40px] mb-10"
        onClick={() => router.push("/mypage/setting-business")}
      >
        <p className="text-xs font-medium">사업자 정보 관리</p>
        <ChevronRight width={16} />
      </button>

      {/*{isBusiness && <BusinessInfo status="활성" info={mockBusinessInfo} />}*/}

      {/*{isBusiness && (*/}
      {/*  <div className="flex items-center gap-2 text-xs text-white bg-[#985CFF]/15 px-4 py-4 rounded-md mt-4">*/}
      {/*    <Info size={14} fill="white" className="text-[#985CFF]" />*/}
      {/*    <p>회원 상태가 승인인 경우는 변경 불가하며 조회만 가능합니다.</p>*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{isBusiness && <BusinessInfoSetting />}*/}

      <div className="flex justify-center mb-20">
        <Withdrawal />
      </div>

      {/*<ConfirmModal*/}
      {/*  triggerText="사업자등록증 등록 신청 완료 모달"*/}
      {/*  title="사업자등록증 등록 신청 완료"*/}
      {/*  description="관리자의 사업자등록증 심사가 진행됩니다. 심사 완료 이후 광고가 가능합니다. "*/}
      {/*  isOpen={isConfirmModalOpen}*/}
      {/*  setIsOpen={setIsConfirmModalOpen}*/}
      {/*/>*/}

      <div
        className={cn(
          "p-4",
          isBusiness ? "mt-auto" : "fixed bottom-0 left-0 right-0 bg-[#1b1b1e]"
        )}
      >
        <Button
          type="button"
          onClick={() => {
            document.getElementById("submit-button")?.click();
          }}
          className="w-full"
        >
          저장
        </Button>
      </div>
    </div>
  );
}
