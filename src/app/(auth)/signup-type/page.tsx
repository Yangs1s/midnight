import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function MembershipSelection() {
  return (
    <div className="min-h-screen bg-[#090521] text-white px-4 py-8">
      <div className="fixed bottom-0 left-0 right-0 bg-[#26252A] rounded-t-[10px] overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-6">가입 유형 선택</h2>
          <div className="flex justify-between items-center gap-4 mb-12">
            <Link href="/adult-verification?step=1" className="w-1/2">
              <Card className="p-4 bg-[#181a20] border-0 hover:bg-[#181a20]/80 transition-colors text-center">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-primary font-bold mb-1">
                      일반 <span className="text-white">회원가입</span>
                    </h3>
                    <p className="text-[#666666] text-xs">
                      업무에 활용하기 위해 가입합니다.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/adult-verification?step=1" className="w-1/2">
              <Card className="p-4 bg-[#181a20] border-0 hover:bg-[#181a20]/80 transition-colors text-center">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-primary font-bold mb-1">
                      기업 <span className="text-white">회원가입</span>
                    </h3>
                    <p className="text-[#666666] text-xs">
                      매장을 운영하거나, 광고가 필요한 사업자입니다.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
