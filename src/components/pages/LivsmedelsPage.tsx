import Image from "next/image";
import ParfusaleNavigation from "@/components/ParfusaleNavigation";
import ParfusaleFooter from "@/components/ParfusaleFooter";
import ProductSection from "@/components/ProductSection";
import { Language } from "@/i18n/constants";

interface LivsmedelsPageProps {
  lng: Language;
}

export default function LivsmedelsPage({ lng }: LivsmedelsPageProps) {
  console.log("LivsmedelsPage rendered for language:", lng);

  const productSections = [
    {
      title: "Aromer",
      description: "Våra flavourister skräddarsyr aromer efter smakkaraktär och applikation. Vi har aromer till alla typer av produktkategorier: dryck, snacks, färdigmat, bageri, konfektyr, mejeri, glass, nutrition och läkemedel mfl.",
      imageSrc: "/images/parfusale/aromer-3.jpg",
      imageAlt: "Aromer - Flavours",
      pdfLinks: [
        {
          text: "Läs mer om Parfusale aromer",
          href: "/wp-content/uploads/2017/10/Parfusale-aromer.pdf"
        }
      ]
    },
    {
      title: "FTNF Aromer",
      description: "FTNF/FTNS-aromer (From The Named Fruit/Source) är naturliga koncentrat av smaken från en specifik frukt eller bär. Det vanligaste användningsområdet för dessa typer av aromer är i produkter där den naturliga och komplexa smaken av färska frukter eller bär har gått förlorad under produktionen, vanligtvis till följd av värmebehandling. FTNF/FTNS aromerna kan i dessa fall ge tillbaka och förstärka det karaktäristiska hos den specifika smaken. Denna typ av aromer kan tex användas i drycker, konfektyr, glass och bageriprodukter. FTNF/FTNS aromer kan även användas i juicer, sylter och safter där \"vanliga\" aromer inte får tillsättas.",
      imageSrc: "/images/parfusale/FTNFAromer.jpg",
      imageAlt: "FTNF Aromer - From The Named Fruit flavours",
      pdfLinks: [
        {
          text: "Läs mer om Parfusale FTNF aromer",
          href: "/wp-content/uploads/2018/02/kiiNotes-FTNF-2018.pdf"
        }
      ],
      reverse: true
    },
    {
      title: "Naturliga destillat & extrakt",
      description: "Genom specifika extraktions- och destillationsprocesser framställs naturliga extrakt av olika råvaror. De finns att få med ursprung tex vaniljextrakt från Madagaskar eller citronextrakt från Amalfikusten. Vi tar fram innovativa smakkoncept t.ex alkoholfria drycker som ger en vuxen smak.",
      imageSrc: "/images/parfusale/destilat.jpg",
      imageAlt: "Naturliga destillat & extrakt",
      pdfLinks: [
        {
          text: "Läs mer om Parfusale destillat",
          href: "/wp-content/uploads/2018/02/kiiNotes-Distillates-2018.pdf"
        },
        {
          text: "Läs mer om Parfusale extrakt",
          href: "/wp-content/uploads/2018/02/kiiNotes-Extracts-2018.pdf"
        }
      ]
    },
    {
      title: "Sockerreduktion",
      description: "Vi erbjuder en ny generation av naturliga aromer för sockerreducering i livsmedel, glass, godis och drycker m.fl. Aromen skräddarsys för applikationen. Aromen intensifierar smaken, förhöjer munkänslan samt möjliggör en sockerreduktion på upp till 50%.",
      imageSrc: "/images/parfusale/berikning.jpg",
      imageAlt: "Sockerreduktion - Sugar reduction",
      features: [
        "behåller den fylliga smaken samt munkänslan av sukros",
        "snabb smakeffekt, ingen bitter och kvardröjande eftersmak",
        "minimalt kaloriinnehåll",
        "innehåller 100% naturliga aromer",
        "deklareras som Naturlig arom = \"clean label\""
      ],
      reverse: true
    },
    {
      title: "Berikning",
      description: "Hydrolyserat kollagen har i flertalet vetenskapliga studier påvisat positiva hälsoeffekter. Hydrolyserat kollagen passar i produkter med inriktning mot nutrition och hälsa. Det är lättlösligt i vätskor, varma som kalla, och ger en klar slutprodukt med neutral smak och doft. Hydrolyserat gelatin har en proteinhalt på 90% och kan användas som proteinberikning i de flesta typer av produkter. Det är ett lättlösligt pulver som är neutralt i smak och doft.",
      imageSrc: "/images/parfusale/Berikning-1.jpg",
      imageAlt: "Berikning - Additives"
    },
    {
      title: "Gelatin",
      description: "Gelatin är en konsistensgivare som användas som gelbildare, stabilisator och emulgator. Vi erbjuder olika kvaliteter av gelatin med valbara partikelstorlekar och gelstyrkor. Vi har även Halal och Kosher certifierat gelatin.",
      imageSrc: "/images/parfusale/gelatin.jpg",
      imageAlt: "Gelatin",
      reverse: true
    },
    {
      title: "Ekologiska vegetabiliska fetter & oljor",
      description: "Vi erbjuder ett brett sortiment av ekologiskt certifierade vegetabiliska fetter och oljor för livsmedel.",
      imageSrc: "/images/parfusale/aromer.jpg",
      imageAlt: "Ekologiska vegetabiliska fetter & oljor",
      pdfLinks: [
        {
          text: "Läs mer om Ekologiska vegetabiliska fetter & oljor",
          href: "/wp-content/uploads/2017/10/Ekologiska-vegetabiliska-oljor-och-fetter.pdf"
        }
      ]
    },
    {
      title: "Färg",
      description: "Vi har ett brett sortiment av naturliga och syntetiska färger för livsmedel. Dessa kan skräddarsys utefter din applikation och önskemål om nyans. Tillgången på växtextrakt med olika kulörer gör det även möjligt att färgsätta ekologiska produkter. Färgerna finns i flytande form, pulver, granulat och pastor.",
      imageSrc: "/images/parfusale/farg.jpg",
      imageAlt: "Färg - Colours",
      pdfLinks: [
        {
          text: "Läs mer om Natural colours",
          href: "/wp-content/uploads/2017/10/Natural-colours-Fiorio-Colori.pdf"
        },
        {
          text: "Läs mer om Synthetic colours",
          href: "/wp-content/uploads/2017/10/Synthetic-colours.pdf"
        }
      ],
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParfusaleNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
            <Image
              src="/images/parfusale/parfusale_hero_livsmedel-1.jpg"
              alt="Livsmedel - Food Ingredients"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Livsmedel</h1>
                <p className="text-xl lg:text-2xl leading-relaxed">
                  Innovativa och naturliga ingredienser som tillför smak, funktion, färg och konsistens till din applikation. Vi har ett stort urval av naturliga ingredienser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {productSections.map((section, index) => (
                <ProductSection
                  key={section.title}
                  title={section.title}
                  description={section.description}
                  imageSrc={section.imageSrc}
                  imageAlt={section.imageAlt}
                  pdfLinks={section.pdfLinks}
                  features={section.features}
                  reverse={section.reverse}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ParfusaleFooter />
    </div>
  );
}