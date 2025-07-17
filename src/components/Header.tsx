import Navigation from "./Navigation";
import { Language } from "@/i18n/constants";

export default function Header({ lng }: { lng: Language }) {
  console.log("Header rendered for language:", lng);

  return (
    <header>
      <Navigation />
    </header>
  );
}
