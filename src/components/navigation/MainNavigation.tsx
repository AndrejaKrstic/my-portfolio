"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import NexumLogo from "/public/assets/nexum-logo-full-black.svg";
import Image from "next/image";
import style from "./MainNavigation.module.css";
import { Locale } from "@/lib/i18n-config";
import { FormattedMessage, useIntl } from "react-intl";
import redirectToLocale from "@/lib/locale-redirect";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import rocket_image from "/public/assets/rocket2.png";

export default function MainNavigation() {
  const intl = useIntl();
  const pathname = usePathname();
  const router = useRouter();
  const pathnameWithoutLocale = pathname
    .replace("/en/", "/")
    .replace("/en", "/");
  const locale = intl.locale;
  function changeLocale(lang: Locale): void {
    if (lang === locale) {
      return;
    }
    const fullPathname = window.location.pathname + window.location.search;
    const newPath = redirectToLocale(fullPathname, lang);
    window.location.assign(newPath);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    closeMenu();
    router.push(href);
  };

  const linkItems = [
    {
      name: intl.formatMessage({ id: "main-navigation-home-link" }),
      href: "/",
    },
    {
      name: intl.formatMessage({ id: "main-navigation-about-link" }),
      href: "/about",
    },
    {
      name: intl.formatMessage({ id: "main-navigation-projects-link" }),
      href: "/projects",
    },
    {
      name: intl.formatMessage({ id: "main-navigation-pricing-link" }),
      href: "/pricing",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        isOpen &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`${style.navigationWrapper} ${
        isScrolled ? style.scrolled : ""
      }`}
    >
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/" aria-label="Home">
            <Image
              alt="Nexum Logo"
              src={NexumLogo.src}
              width={NexumLogo.width}
              height={NexumLogo.height}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`${style.menu} ${style.desktopMenu}`}>
          {linkItems.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames({
                    [style.menuItem]: true,
                    [style.activeMenuItem]: pathnameWithoutLocale === item.href,
                  })}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={style.utilityMenu}>
          <div className={style.languageButtons}>
            <button
              className={classNames({
                [style.languageOption]: true,
                [style.activeLanguage]: intl.locale === "sr",
              })}
              onClick={() => changeLocale("sr")}
            >
              RS
            </button>
            <button
              className={classNames({
                [style.languageOption]: true,
                [style.activeLanguage]: intl.locale === "en",
              })}
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
          </div>
          {/* Contact Us Button */}
          <div className={style.contactButton}>
            <Link href="/contact" className={style.contactLink}>
              <FormattedMessage id="main-navigation-contact-us-link" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={style.mobileMenuIcon}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes className={style.modalExitIcon} />
          ) : (
            <HiMiniBars3BottomLeft className={style.modalOpenIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ stiffness: 300, damping: 20 }}
            className={style.mobileMenu}
            role="dialog"
            aria-modal="true"
          >
            <ul className={style.mobileMenuList}>
              {linkItems.map((item) => {
                return (
                  <li
                    key={item.name}
                    className={classNames({
                      [style.mobileNavListItem]: true,
                      [style.activeMobileMenuItem]:
                        pathnameWithoutLocale === item.href,
                    })}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    <Link
                      href={item.href}
                      className={classNames({
                        [style.mobileMenuItem]: true,
                      })}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li
                className={classNames({
                  [style.mobileNavListItem]: true,
                  [style.activeMobileMenuItem]:
                    pathnameWithoutLocale === "/contact",
                })}
                onClick={(e) => handleClick(e, "/contact")}
              >
                <Link
                  href="/contact"
                  className={classNames({
                    [style.mobileMenuItem]: true,
                  })}
                  onClick={closeMenu}
                >
                  <FormattedMessage id="main-navigation-contact-us-link" />
                </Link>
              </li>
            </ul>
            <div className={style.mobileContactButton}>
              <Link
                href="/contact"
                className={style.contactLink}
                onClick={closeMenu}
              ></Link>
            </div>
            <div className={style.mobileNavImageContainer}>
              <Image
                className={style.mobileNavImage}
                src={rocket_image.src}
                alt="rocket"
                width={rocket_image.width}
                height={rocket_image.height}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
