import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProviders } from "@/components/provider/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Midnight Terrace",
  description: "Midnight Terrace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#1b1b1e] text-white">
        <ThemeProviders>
          <Toaster position="bottom-center" richColors />
          <main>{children}</main>
        </ThemeProviders>
      </body>
    </html>
  );
}
