import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { ArchTerminal } from "@/components/easter-eggs/arch-terminal";
import { CtosBlackout } from "@/components/easter-eggs/ctos-blackout";
import { ConsoleGreeting } from "@/components/easter-eggs/console-greeting";
import { SocialsDock } from "@/components/socials-dock";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Abir Roy",
  description: "Systems & Software Engineer",
  icons: {
    icon: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        dmSans.variable,
        "font-sans",
        "dark",
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SocialsDock />
        <CommandMenu />
        <ArchTerminal />
        <CtosBlackout />
        <ConsoleGreeting />
      </body>
    </html>
  );
}
