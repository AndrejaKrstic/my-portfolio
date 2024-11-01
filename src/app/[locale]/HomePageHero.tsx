import React from "react";
import style from "./HomePage.module.css";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import hero_main_img from "/public/assets/hero-main.png";

export default function HomePageHero() {
  return (
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
        <a className={style.heroCta} href="#what-we-offer-section">
          <FormattedMessage id="home-page-hero-cta-text" />
          <FaArrowDown className={style.ctaArrow} />
        </a>
      </div>
    </div>
  );
}
