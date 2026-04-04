"use client";

import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FileText, Mail, Terminal } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <p className="fixed bottom-4 right-4 text-sm text-muted-foreground hidden md:flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-lg border-border [&>button]:hidden">
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
          <DialogDescription className="sr-only">
            Search for links and actions
          </DialogDescription>

          <Command className="**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Links">
                <CommandItem
                  onSelect={() =>
                    runCommand(() =>
                      window.open("https://github.com/roy-abir05", "_blank"),
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </CommandItem>
                <CommandItem
                  onSelect={() =>
                    runCommand(() =>
                      window.open(
                        "https://linkedin.com/in/roy-abir05",
                        "_blank",
                      ),
                    )
                  }
                >
                  <LinkedIn className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </CommandItem>
                <CommandItem
                  onSelect={() =>
                    runCommand(
                      () =>
                        (window.location.href = "mailto:royabirdhn@gmail.com"),
                    )
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email Contact</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Actions">
                <CommandItem
                  onSelect={() =>
                    runCommand(() =>
                      window.open(
                        `${process.env.NEXT_PUBLIC_RESUME_URL}`,
                        "_blank",
                      ),
                    )
                  }
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Resume</span>
                </CommandItem>
                {/* <CommandItem onSelect={() => runCommand(() => console.log("Easter egg hint: Type RCB"))}>
                  <Terminal className="mr-2 h-4 w-4" />
                  <span>Copy npx business card (Coming soon)</span>
                </CommandItem> */}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
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
