import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  pdfLinks?: Array<{
    text: string;
    href: string;
  }>;
  features?: string[];
  reverse?: boolean;
}

export default function ProductSection({
  title,
  description,
  imageSrc,
  imageAlt,
  pdfLinks,
  features,
  reverse = false,
}: ProductSectionProps) {
  console.log("ProductSection rendered:", { title, imageSrc });

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Image */}
      <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={420}
              height={320}
              className="w-full h-80 object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${reverse ? 'lg:col-start-1' : ''}`}>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {features && (
          <div className="space-y-3">
            <p className="font-semibold text-gray-900">Fördelar:</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pdfLinks && (
          <div className="space-y-3">
            {pdfLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.text}</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}