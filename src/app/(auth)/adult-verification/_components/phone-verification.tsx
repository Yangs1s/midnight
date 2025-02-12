"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Asterisk, ChevronDown, Minus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CarrierSelection from "./carrier-selection";
import VerificationTerms from "@/app/(auth)/adult-verification/_components/verification-terms";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

const carriers = [
  { id: "SKT", label: "SKT" },
  { id: "KT", label: "KT" },
  { id: "LGU", label: "LG U+" },
  { id: "SKT_MVNO", label: "SKT 알뜰폰" },
  { id: "KT_MVNO", label: "KT 알뜰폰" },
  { id: "LGU_MVNO", label: "LG U+ 알뜰폰" },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요" }),
  residentNumber: z.string().min(7, { message: "주민등록번호를 입력해주세요" }),
  carrier: z.string().min(1, { message: "통신사를 선택해주세요" }),
  phoneNumber: z
    .string()
    .regex(/^01[0-9]{8,9}$/, { message: "올바른 휴대폰 번호를 입력해주세요" }),
});

type FormValues = z.infer<typeof formSchema>;

interface TermsData {
  [key: string]: boolean;
}

export default function PhoneVerification() {
  const [isCarrierOpen, setIsCarrierOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      residentNumber: "",
      carrier: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    setIsVerificationOpen(true);
  };

  const handleVerificationTermsSubmit = (termsData: TermsData) => {
    console.log("Combined data:", { ...form.getValues(), terms: termsData });
    setIsVerificationOpen(false);
    router.push("/signup");
  };

  return (
    <div className="min-h-screen text-white">
      <div className="pt-12 pb-8">
        <Link href="/verify?step=1" className="inline-flex items-center">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="text-lg">성인 인증하기</span>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">휴대폰 본인인증</h1>
        <p className="text-[#666666] text-sm mb-8">
          회원 확인 및 가입을 진행합니다.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label>이름</Label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="이름을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">주민등록번호 앞 7자리</Label>
              <FormField
                control={form.control}
                name="residentNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid grid-cols-7 bg-[#26252a] border-0 h-14 text-white placeholder:text-[#666666] rounded-md">
                        <div className="col-span-3 flex items-center">
                          <Input
                            placeholder="앞 7자리 입력"
                            maxLength={7}
                            className="flex items-center"
                            value={field.value.slice(0, 6)}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              if (value.length <= 7) {
                                field.onChange(value);
                              }
                            }}
                          />
                        </div>
                        <p className="pr-1 col-span-1 flex items-center justify-center">
                          <Minus />
                        </p>
                        <div className="col-span-3 flex items-center ">
                          <span className="w-2">{field.value[6]}</span>
                          <span className="text-white flex items-center pl-1">
                            {[...Array(6)].map((_, i) => (
                              <Asterisk key={i} size={14} />
                            ))}
                          </span>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">휴대폰 번호</Label>
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="carrier"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsCarrierOpen(true)}
                          className="w-full justify-between bg-[#26252a] border-0 h-14 text-left font-normal text-white"
                        >
                          <span>
                            {carriers.find((c) => c.id === selectedCarrier)
                              ?.label || "통신사"}
                          </span>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="휴대폰 번호 입력" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <p className="text-[#666666] text-sm">
              입력하신 정보는 본인 인증 용도로 활용되며, 서비스 이용약관을
              동의하신 후 본인 인증이 진행됩니다.
            </p>

            <div className="fixed bottom-0 left-0 right-0 p-4">
              <Button type="submit" className="w-full">
                인증하기
              </Button>
            </div>
          </form>
        </Form>

        <CarrierSelection
          open={isCarrierOpen}
          onOpenChange={setIsCarrierOpen}
          onSelect={(carrier) => {
            setSelectedCarrier(carrier);
            form.setValue("carrier", carrier);
            setIsCarrierOpen(false);
          }}
          selectedCarrier={selectedCarrier}
          carriers={carriers}
        />

        <VerificationTerms
          open={isVerificationOpen}
          onOpenChange={setIsVerificationOpen}
          onSubmit={handleVerificationTermsSubmit}
        />
      </div>
    </div>
  );
}
