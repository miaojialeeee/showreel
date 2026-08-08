import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel 缪嘉乐 — Brand Visual Designer",
  description: "Samuel 缪嘉乐的品牌视觉设计作品集，涵盖时装、美妆与文化内容。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
