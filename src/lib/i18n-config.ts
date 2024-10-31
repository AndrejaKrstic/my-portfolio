import { currentEnvUrl } from "./runtime-env/env";

const languageList = [
  { label: "Srpski", value: "sr" },
  { label: "English", value: "en" },
];

export const i18nConfig = {
  locales: ["sr", "en"] as const,
  defaultLocale: "sr" as const,
  localeDetection: false,
};

export type Locale = "sr" | "en";

export function generateAlternateLanguageUrl(
  locale: string,
  slug: string,
  baseUrl: string = `${currentEnvUrl()}`
) {
  if (slug.length === 0) {
    return locale === "sr" ? `${baseUrl}` : `${baseUrl}/${locale}`;
  }

  return locale === "en"
    ? `${baseUrl}/${slug}`
    : `${baseUrl}/${locale}/${slug}`;
}

export function generateAlternateLanguageLinks(
  slug: string,
  baseUrl: string = `${currentEnvUrl()}`
) {
  return languageList.reduce(
    (prev, current) => {
      const url = generateAlternateLanguageUrl(current.value, slug, baseUrl);

      return {
        ...prev,
        [current.value]: url,
      };
    },
    { "x-default": generateAlternateLanguageUrl("sr", slug, baseUrl) }
  );
}

export function isLocale(locale: Locale) {
  return i18nConfig.locales.includes(locale as Locale);
}
