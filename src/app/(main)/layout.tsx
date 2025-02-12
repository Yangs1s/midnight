"use client";

import FooterNav from "@/components/footer-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative p-4 mb-12">
      {children}
      <FooterNav />
    </div>
  );
}
