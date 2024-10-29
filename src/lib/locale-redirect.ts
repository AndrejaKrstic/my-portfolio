import { i18nConfig, Locale } from "./i18n-config";

const { locales } = i18nConfig;

export default function redirectToLocale(
  currentPath: string,
  targetLocale: Locale
): string {
  const segments = currentPath.split("/").filter(Boolean);

  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  segments.unshift(targetLocale);

  return `/${segments.join("/")}`;
}
