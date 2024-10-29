"use client";

import { ReactNode } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";

interface IntlClient {
  messages:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined;
  locale: "en" | "sr";
  children: ReactNode;
}

export default function IntlClient({ messages, locale, children }: IntlClient) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
