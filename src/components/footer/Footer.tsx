"use client";

import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import white_logo from "/public/assets/white-nexum-logo.svg";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import Container from "../Container";

export default function Footer() {
  return (
    <Container>
      <footer role="contentinfo" aria-label="Footer" className={style.footer}>
        <nav aria-label="Footer Navigation" className={style.footerNav}>
          <Link href="/" aria-label="Home">
            <Image
              className={style.footerLogo}
              src={white_logo.src}
              width={white_logo.width}
              height={white_logo.height}
              alt="Company Logo"
            />
          </Link>
          <ul className={style.footerLinks}>
            <li>
              <Link href="/" className={style.footerLink}>
                <FormattedMessage id="main-navigation-home-link" />
              </Link>
            </li>
            <li>
              <Link href="/about" className={style.footerLink}>
                <FormattedMessage id="main-navigation-about-link" />
              </Link>
            </li>
            <li>
              <Link href="/projects" className={style.footerLink}>
                <FormattedMessage id="main-navigation-projects-link" />
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={style.footerLink}>
                <FormattedMessage id="main-navigation-pricing-link" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className={style.footerLink}>
                <FormattedMessage id="main-navigation-contact-us-link" />
              </Link>
            </li>
          </ul>
          <div className={style.footerDivider}></div>
          <div className={style.footerAdditionalLinks}>
            <ul className={style.footerLinks}>
              <li>
                <Link
                  href="/sitemap.xml"
                  className={style.footerAdditionalLink}
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={style.footerAdditionalLink}
                >
                  <FormattedMessage id="footer-privacy-policy" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className={style.footerAdditionalLink}>
                  <FormattedMessage id="footer-terms-of-service" />
                </Link>
              </li>
            </ul>
            <p className={style.footerCopyright}>&copy; 2024 NexumIT</p>
          </div>
        </nav>
      </footer>
    </Container>
  );
}
