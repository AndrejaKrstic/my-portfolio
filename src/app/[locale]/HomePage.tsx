"use client";

import Container from "@/components/Container";
import style from "./HomePage.module.css";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import hero_main_img from "/public/assets/hero-main.png";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { PiReadCvLogoBold, PiGlobeHemisphereEastFill } from "react-icons/pi";

export default function HomePage() {
  return (
    <Container>
      <div className={style.hero}>
        <div className={style.heroLeft}>
          <h1 className={style.heroTitle}>
            <FormattedMessage id="home-page-hero-title" />
          </h1>
          <span className={style.heroSubtitle}>
            <FormattedMessage id="home-page-hero-subtitle" />
          </span>
        </div>
        <div className={style.heroRight}>
          <Image
            className={style.heroRightMainImage}
            alt="hero"
            loading="eager"
            src={hero_main_img.src}
            width={hero_main_img.width}
            height={hero_main_img.height}
          />
        </div>
        <div className={style.heroCtaContainer}>
          <button className={style.heroCta}>
            <FormattedMessage id="home-page-hero-cta-text" />
            <FaArrowRight className={style.ctaArrow} />
          </button>
        </div>
      </div>
      <div className={style.whatWeOfferSection}>
        <h2 className={style.whatWeOfferTitle}>
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
      <div className={style.developProcessSection}></div>
    </Container>
  );
}
