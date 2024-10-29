import style from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import getIntl from "@/lib/intl";
import OGImage from "/public/assets/og-image-logo.png";
import {
  generateAlternateLanguageLinks,
  generateAlternateLanguageUrl,
  isLocale,
} from "@/lib/i18n-config";
import { notFound } from "next/navigation";
import HomePage from "./HomePage";

interface PageProps {
  params: Promise<{ locale: "sr" | "en" }>;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = (await params).locale;
  const intl = await getIntl(locale);
  const previousImages = (await parent).openGraph?.images || [];
  const title = intl.getMessage("welcome");
  return {
    title: title,
    openGraph: {
      images: [OGImage.src, ...previousImages],
    },
    alternates: {
      canonical: generateAlternateLanguageUrl(intl.locale, ""),
      languages: {
        ...generateAlternateLanguageLinks(""),
      },
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL || ""),
  };
}

export default async function Home({ params }: PageProps) {
  const locale = (await params).locale;
  if (!isLocale(locale)) {
    return notFound();
  }

  return (
    <div role="main" className={style.mainDiv}>
      <HomePage />
    </div>
  );
}
