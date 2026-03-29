import type { ReactNode } from "react";

export default function FrenchLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div lang="fr" dir="ltr">
      {children}
    </div>
  );
}
