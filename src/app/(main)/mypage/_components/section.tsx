import Link from "next/link";

export function UserSectionList() {
  return (
    <div className="py-4">
      <Section
        title="개정정보 관리"
        items={[
          { label: "회원정보 수정", href: "/mypage/setting" },
          { label: "알림 설정", href: "/mypage/setting" },
          { label: "차단 목록", href: "/mypage/setting" },
          { label: "신고 목록", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="고객센터"
        items={[
          { label: "1:1 문의", href: "/mypage/setting" },
          { label: "FAQ", href: "/mypage/setting" },
          { label: "내 문의내역", href: "/mypage/setting" },
          { label: "고객의 소리", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="ABOUT `12 테라스"
        items={[
          { label: "공지사항", href: "/mypage/setting" },
          { label: "이벤트", href: "/mypage/setting" },
          { label: "약관 및 정책", href: "/mypage/setting" },
          { label: "미드나잇테라스(11글자)", href: "/mypage/setting" },
        ]}
      />
    </div>
  );
}

export function BusinessSectionList() {
  return (
    <div className="py-4">
      <Section
        title="비즈니스"
        items={[
          { label: "광고 상품 안내", href: "/mypage/setting" },
          { label: "내 활동 내역", href: "/mypage/setting" },
          { label: "내 광고 관리", href: "/mypage/setting" },
          { label: "사업자 정보 관리", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="개정정보 관리"
        items={[
          { label: "회원정보 수정", href: "/mypage/setting" },
          { label: "알림 설정", href: "/mypage/setting" },
          { label: "차단 목록", href: "/mypage/setting" },
          { label: "신고 목록", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="고객센터"
        items={[
          { label: "1:1 문의", href: "/mypage/setting" },
          { label: "FAQ", href: "/mypage/setting" },
          { label: "내 문의내역", href: "/mypage/setting" },
          { label: "고객의 소리", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="ABOUT 테라스"
        items={[
          { label: "공지사항", href: "/mypage/setting" },
          { label: "약관 및 정책", href: "/mypage/setting" },
          { label: "이벤트", href: "/mypage/setting" },
          { label: "`12 테라스 소개", href: "/mypage/setting" },
        ]}
      />
    </div>
  );
}

interface SectionProps {
  title: string;
  items: {
    label: string;
    href?: string;
  }[];
}

export function Section({ title, items }: SectionProps) {
  return (
    <section className="mb-6 pb-6 border-b border-white/10">
      <p className="mb-3 w-full text-xs text-muted-foreground">{title}</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {items.map((item, i) => (
          <Link key={i} href={item.href ?? ""}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
