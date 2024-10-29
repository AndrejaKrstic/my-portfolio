import type { Metadata } from "next";
import "@/styles/global.css";
import IntlClient from "@/components/intl-client";
import getIntl from "@/lib/intl";

export const metadata: Metadata = {
  title: { template: "$s | Nexum IT", default: "Nexum IT" },
  description: "Želite sajt za Vaš biznis ili portfolio? Na pravom ste mestu!",
};

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Params;
  }>
) {
  const params = await props.params;
  const intl = await getIntl(params.locale);
  return (
    <html lang={intl.locale}>
      <body className={`antialiased`}>
        <IntlClient messages={intl.messages} locale={intl.locale}>
          {props.children}
        </IntlClient>
      </body>
    </html>
  );
}
