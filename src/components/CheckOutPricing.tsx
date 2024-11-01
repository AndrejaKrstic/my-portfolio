"use client";

import Link from "next/link";
import React from "react";
import style from "./CheckOutPricing.module.css";
import { FormattedMessage } from "react-intl";
import { FaArrowRight } from "react-icons/fa";
import ImageComponent from "./ImageComponent";

export default function CheckOutPricing() {
  return (
    <div className={style.pricingButtonContainer}>
      <Link href="/pricing" className={style.pricingButton}>
        <FormattedMessage id="home-page-check-out-pricing" />
        <FaArrowRight className={style.ctaArrow} />
      </Link>
      <div className={style.imageContainer}>
        <ImageComponent publicId="success-growth" classes={style.image} />
      </div>
    </div>
  );
}
