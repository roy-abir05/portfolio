"use client";

import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/roy-abir05",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn className="w-5 h-5" />,
    href: "https://linkedin.com/in/roy-abir05",
  },
  {
    name: "Discord",
    icon: <MessageSquare className="w-5 h-5" />,
    href: "https://discord.com/users/1018542524652077146",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:royabirdhn@gmail.com",
  },
  {
    name: "Codeforces",
    icon: <span className="font-bold text-[10px]">CF</span>,
    href: "https://codeforces.com/profile/roy_abir05",
  },
  {
    name: "CodeChef",
    icon: <span className="font-bold text-[10px]">CC</span>,
    href: "https://www.codechef.com/users/roy_abir05",
  },
];

export function SocialsDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
      <nav className="flex items-center gap-1 p-2 rounded-full border border-[#222] bg-background/80 backdrop-blur-md shadow-2xl">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className="group relative p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-[#111] transition-all duration-200"
          >
            {social.icon}

            {/* Custom Minimalist Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black border border-[#222] text-[10px] text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {social.name}
            </span>

            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.01a4.3 4.3 0 0 0-1.23-3.14 4.09 4.09 0 0 0-.08-3.11s-1-.29-3.22 1.22a11.01 11.01 0 0 0-5.89 0C8.29 1.71 7.29 2 7.29 2a4.09 4.09 0 0 0-.08 3.11 4.3 4.3 0 0 0-1.23 3.14c0 5.41 3.34 6.67 6.52 7.01a4.8 4.8 0 0 0-1.04 2.8V22" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
