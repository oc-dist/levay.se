import Layout from "@/components/layouts/Layout";
import { Language } from "@/i18n/constants";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function HomePage({ lng }: { lng: Language }) {
  const { t } = useTranslation("common", {
    lng,
  });

  return (
    <Layout lng={lng}>
      <Head>
        <title>{t("home.title")}</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("home.welcome")}</h1>
        <p className="text-xl text-gray-600">{t("home.description")}</p>
      </div>
    </Layout>
  );
}
