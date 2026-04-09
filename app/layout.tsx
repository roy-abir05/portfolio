import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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

  description:
    "Systems & Full-Stack Engineer from NIT Durgapur. Specializing in high-performance C++ architecture, scalable web infrastructure, and competitive programming",

  keywords: [
    "C++",
    "High-Frequency Trading",
    "Full-Stack",
    "React",
    "Next.js",
    "Arch Linux",
    "Systems Engineering",
  ],

  openGraph: {
    title: "Abir Roy | Systems & Full-Stack Engineer",
    description:
      "Systems architecture, low-latency C++, and scalable web infrastructure.",
    url: "https://roy-abir05.vercel.app/",
    siteName: "Abir Roy Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Abir Roy - Systems & Full-Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abir Roy | Systems & Full-Stack Engineer",
    description:
      "Systems architecture, low-latency C++, and scalable web infrastructure.",
    images: ["/og.jpg"],
  },

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
        <Analytics />
        <SocialsDock />
        <CommandMenu />
        <ArchTerminal />
        <CtosBlackout />
        <ConsoleGreeting />
      </body>
    </html>
  );
}
