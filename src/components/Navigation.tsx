import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const BRAND_NAME = "Levay Multimedia";
const MENU_LABEL = "Öppna meny";
const FOLLOW_US_TEXT = "Följ oss";

const navigationItems = [
  { text: "Om oss", href: "#om-oss" },
  { text: "Funktioner", href: "#funktioner" },
  { text: "Kundomdömen", href: "#kundomdomen" },
  { text: "Tjänster", href: "#tjanster" },
  { text: "Kontakt", href: "#kontakt" },
];

const socialLinks = [
  { 
    text: "Instagram", 
    href: "https://www.instagram.com/",
    icon: Instagram
  },
  { 
    text: "Facebook", 
    href: "https://www.facebook.com/",
    icon: Facebook
  },
  { 
    text: "X", 
    href: "https://x.com/",
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/levay-logo.svg"
                alt="Levay Multimedia Logo"
                width={48}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-primary">{BRAND_NAME}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.text}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.text}
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={MENU_LABEL}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-border">
                    <Image
                      src="/images/levay-logo.svg"
                      alt="Levay Multimedia Logo"
                      width={40}
                      height={26}
                      className="h-6 w-auto"
                    />
                    <span className="text-lg font-bold text-primary">{BRAND_NAME}</span>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.text}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg py-2"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Social Links */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-muted-foreground mb-4">{FOLLOW_US_TEXT}</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <Link
                            key={social.text}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2"
                            aria-label={social.text}
                          >
                            <IconComponent />
                            <span className="text-sm">{social.text}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}