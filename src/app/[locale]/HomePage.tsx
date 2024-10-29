"use client";

import redirectToLocale from "@/lib/locale-redirect";
import style from "./page.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import ImageComponent from "@/components/ImageComponent";
import { Locale } from "@/lib/i18n-config";

export default function HomePage() {
  const publicId = "zojkica";
  const intl = useIntl();
  const locale = intl.locale;

  function changeLocale(lang: Locale): void {
    if (lang === locale) {
      return;
    }
    const fullPathname = window.location.pathname + window.location.search;
    const newPath = redirectToLocale(fullPathname, lang);
    window.location.assign(newPath);
  }
  return (
    <div className={style.imageDiv}>
      <ImageComponent publicId={publicId} classes={style.image} />
      <p>
        <FormattedMessage id="zoi-mala" />
      </p>
      <button onClick={() => changeLocale("sr")}>Srpski</button>
      <button onClick={() => changeLocale("en")}>English</button>
    </div>
  );
}
