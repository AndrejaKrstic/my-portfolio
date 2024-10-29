"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import NexumLogo from "/public/assets/nexum-logo-full-black.svg";
import Image from "next/image";
import style from "./MainNavigation.module.css";
import { Locale } from "@/lib/i18n-config";
import { FormattedMessage, useIntl } from "react-intl";
import redirectToLocale from "@/lib/locale-redirect";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const intl = useIntl();
  const pathname = usePathname();
  const locale = intl.locale;
  function changeLocale(lang: Locale): void {
    if (lang === locale) {
      return;
    }
    const fullPathname = window.location.pathname + window.location.search;
    const newPath = redirectToLocale(fullPathname, lang);
    window.location.assign(newPath);
  }

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
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const languageModalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageModalRef.current &&
        !languageModalRef.current.firstElementChild?.contains(
          event.target as Node
        )
      ) {
        closeLanguageModal();
        document.removeEventListener("mousedown", handleClickOutside);
      }
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
  }, [isOpen, isLanguageModalOpen]);

  return (
    <nav className={style.navigationWrapper}>
      <div className={style.container}>
        {/* Logo */}
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
                    [style.activeMenuItem]: pathname === item.href,
                  })}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={style.utilityMenu}>
          <button
            className={style.languageButton}
            onClick={openLanguageModal}
            aria-label="Change Language"
          >
            <BsGlobe size={25} className={style.languageIcon} />
          </button>

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
            <FaTimes className={style.modalToggleIcon} />
          ) : (
            <HiMiniBars3BottomLeft className={style.modalToggleIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 100 }}
            exit={{ x: "100%" }}
            transition={{ stiffness: 300, damping: 20 }}
            className={style.mobileMenu}
            role="dialog"
            aria-modal="true"
          >
            <ul className={style.mobileMenuList}>
              {linkItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames({
                        [style.mobileMenuItem]: true,
                        [style.activeMenuItem]: pathname === item.href,
                      })}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Contact Us Button in Mobile Menu */}
            <div className={style.mobileContactButton}>
              <Link
                href="/contact"
                className={style.contactLink}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Language Selection Modal */}
      <AnimatePresence>
        {isLanguageModalOpen && (
          <motion.div
            ref={languageModalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.languageModal}
            role="dialog"
            aria-modal="true"
          >
            <div className={style.languageModalContent}>
              <h2>Select Language</h2>
              <button
                className={style.languageOption}
                onClick={() => changeLocale("sr")}
              >
                Srpski
              </button>
              <button
                className={style.languageOption}
                onClick={() => changeLocale("en")}
              >
                English
              </button>
              <button className={style.closeModal} onClick={closeLanguageModal}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
