import type { ReactNode } from "react";

export default function HebrewLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div lang="he" dir="rtl">
      {children}
    </div>
  );
}
