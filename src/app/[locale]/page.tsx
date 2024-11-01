import { Metadata, ResolvingMetadata } from "next";
import getIntl from "@/lib/intl";
import OGImage from "/public/assets/og-image-logo.png";
import {
  generateAlternateLanguageLinks,
  generateAlternateLanguageUrl,
} from "@/lib/i18n-config";
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
  const description = intl.getMessage("home-page-meta-description");
  const title = intl.getMessage("company-name");
  return {
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: process.env.NEXT_PUBLIC_HOST_URL,
      siteName: title,
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

export default async function Home() {
  return <HomePage />;
}
