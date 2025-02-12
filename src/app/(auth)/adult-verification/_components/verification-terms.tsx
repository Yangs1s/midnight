import { useState, useEffect } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

interface VerificationTermsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TermsData) => void;
}

interface TermsData {
  [key: string]: boolean;
}

const terms = [
  {
    id: "all",
    label: "전체 동의",
  },
  {
    id: "term1",
    label: "개인정보 이용 동의",
  },
  {
    id: "term2",
    label: "고유식별정보 처리 동의",
  },
  {
    id: "term3",
    label: "통신사 이용약관 동의",
  },
  {
    id: "term4",
    label: "본인확인 서비스 이용약관 동의",
  },
];

export default function VerificationTerms({
  open,
  onOpenChange,
  onSubmit,
}: VerificationTermsProps) {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // 전체 선택 상태 확인
  const isAllChecked = checkedItems.length === terms.length - 1; // "all" 제외한 항목 수

  // 개별 체크박스 변경 처리
  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (id === "all") {
      if (checked) {
        // 전체 선택 시 "all" 제외한 모든 항목 선택
        setCheckedItems(
          terms.filter((term) => term.id !== "all").map((term) => term.id)
        );
      } else {
        // 전체 해제
        setCheckedItems([]);
      }
    } else {
      if (checked) {
        setCheckedItems((prev) => [...prev, id]);
      } else {
        setCheckedItems((prev) => prev.filter((item) => item !== id));
      }
    }
  };

  // 개별 체크박스 상태 변경 시 전체 선택 상태 업데이트
  useEffect(() => {
    const requiredTerms = terms.filter((term) => term.id !== "all");
    const allChecked = requiredTerms.every((term) =>
      checkedItems.includes(term.id)
    );
    if (allChecked !== isAllChecked) {
      setCheckedItems(allChecked ? requiredTerms.map((term) => term.id) : []);
    }
  }, [checkedItems, isAllChecked]);

  const handleSubmit = () => {
    const termsData = terms
      .filter((term) => term.id !== "all")
      .reduce(
        (acc, term) => ({
          ...acc,
          [term.id]: checkedItems.includes(term.id),
        }),
        {}
      );

    onSubmit(termsData);
    router.push("/signup?type=user&step=1");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="p-4">
        <div>
          <h2 className="text-xl font-semibold">본인 인증 약관</h2>
          <div className="space-y-4 mt-6">
            {terms.map((term) => (
              <div key={term.id} className="flex items-center space-x-2">
                <Checkbox
                  id={term.id}
                  checked={
                    term.id === "all"
                      ? isAllChecked
                      : checkedItems.includes(term.id)
                  }
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(term.id, checked as boolean)
                  }
                  className="border-white data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={term.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {term.label}
                </label>
              </div>
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#1b1b1e]">
            <Button
              onClick={handleSubmit}
              disabled={!isAllChecked}
              className="w-full bg-primary hover:bg-primary/90 h-14"
            >
              확인
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
