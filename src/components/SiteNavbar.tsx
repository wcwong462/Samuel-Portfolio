
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/activities", label: "Activities" },
];

const SiteNavbar = () => {


  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg">Samuel's Portfolio</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground story-link">
              {l.label}
            </Link>
          ))}
        </div>
  {/* Removed ThemeToggle button */}
      </nav>
    </header>
  );
};

export default SiteNavbar;
