import Link from "next/link";

const navigationItems = [
  { text: "Start", href: "/" },
  { text: "Kosmetik", href: "/kosmetik" },
  { text: "Kemteknik", href: "/kemteknik" },
  { text: "Livsmedel", href: "/livsmedel" },
  { text: "Kontakt", href: "/kontakt" },
  { text: "English", href: "/en/food-ingredients" },
];

export default function ParfusaleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Copyright */}
          <div className="lg:col-span-1">
            <p className="text-gray-600 text-sm">
              Copyright © Parfusale AB
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Parfusale AB</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Västertorg 3</p>
              <p>752 43 Uppsala</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Tel: +46 (0) 18 – 57 00 40</p>
              <p>E-post: info@parfusale.se</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}