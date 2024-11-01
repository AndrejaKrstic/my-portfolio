import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { PiGlobeHemisphereEastFill, PiReadCvLogoBold } from "react-icons/pi";
import { FormattedMessage } from "react-intl";
import style from "./WhatWeOffer.module.css";

export default function WhatWeOffer() {
  return (
    <div className={style.whatWeOfferSection}>
      <h2 className={style.whatWeOfferTitle} id="what-we-offer-section">
        <FormattedMessage id="home-page-what-we-offer" />
      </h2>
      <div className={style.offerCards}>
        <div className={style.offerCard}>
          <AiOutlineShop color="white" size={50} />
          <h3>
            <FormattedMessage id="home-page-offer-one" />
          </h3>
          <p>
            <FormattedMessage id="home-page-offer-one-text" />
          </p>
        </div>
        <div className={style.offerCard}>
          <PiReadCvLogoBold color="white" size={50} />
          <h3>
            <FormattedMessage id="home-page-offer-two" />
          </h3>
          <p>
            <FormattedMessage id="home-page-offer-two-text" />
          </p>
        </div>
        <div className={style.offerCard}>
          <PiGlobeHemisphereEastFill color="white" size={50} />
          <h3>
            <FormattedMessage id="home-page-offer-three" />
          </h3>
          <p>
            <FormattedMessage id="home-page-offer-three-text" />
          </p>
        </div>
      </div>
    </div>
  );
}
