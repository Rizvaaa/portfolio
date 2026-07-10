import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-6">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
