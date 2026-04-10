import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Alacri — Workday AMS, Accelerated",
  description: "AI-native Workday Application Management Services. Faster tickets, smarter testing, proactive support — at half the cost.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
