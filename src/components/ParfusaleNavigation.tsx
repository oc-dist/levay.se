import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { text: "Start", href: "/" },
  { text: "Kosmetik", href: "/kosmetik" },
  { text: "Kemteknik", href: "/kemteknik" },
  { text: "Livsmedel", href: "/livsmedel" },
  { text: "Kontakt", href: "/kontakt" },
  { text: "English", href: "/en/food-ingredients" },
];

export default function ParfusaleNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/images/parfusale/Parfusale-logo-ny-2.jpg"
                alt="Parfusale AB"
                width={320}
                height={126}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+46 (0) 18 – 57 00 40</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@parfusale.se</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Öppna meny">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center pb-4 border-b border-gray-200">
                    <Image
                      src="/images/parfusale/Parfusale-logo-ny-2.jpg"
                      alt="Parfusale AB"
                      width={240}
                      height={95}
                      className="h-12 w-auto"
                    />
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.text}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-lg py-2 uppercase tracking-wide"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">+46 (0) 18 – 57 00 40</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">info@parfusale.se</span>
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