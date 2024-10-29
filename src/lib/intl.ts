"server-only";

export default async function getIntl(possibleIntl: string) {
  let locale: "sr" | "en" = "sr";

  if (possibleIntl === "en") {
    locale = "en";
  }

  const messages = (await import(`@/locales/${locale}.json`)).default;
  function getMessage(key: string) {
    return messages[key];
  }

  return {
    locale: locale,
    messages: (await import(`@/locales/${locale}.json`)).default,
    getMessage,
  };
}
