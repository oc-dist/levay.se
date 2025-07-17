import { Language } from "@/i18n/constants";
import { useTranslation } from "react-i18next";

export default function Footer({ lng }: { lng: Language }) {
  const { t } = useTranslation("common", {
    lng,
  });

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
