import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { toast } from "@/hooks/use-toast";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#connect", label: "Connect" },
];

const SiteNavbar = () => {
  const onResume = () => {
    toast({ title: "Resume coming soon", description: "A downloadable PDF will be added here." });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg">CF&CS Portfolio</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground story-link">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={onResume}>Download Resume</Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default SiteNavbar;
