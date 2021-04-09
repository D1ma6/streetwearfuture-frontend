import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

// icons
import { Icon } from "@iconify/react";
import bxlPaypal from "@iconify/icons-bx/bxl-paypal";
import mastercardIcon from "@iconify/icons-brandico/mastercard";
import visaIcon from "@iconify/icons-simple-icons/visa";

function Footer({ bg }) {
  return (
    <footer
      style={{ background: bg == "#1b1b1b" ? "#ffed4f" : bg }}
      className={`${styles.footer} `}
    >
      <div className={`${styles.footer__inner} ${"content"}`}>
        <nav className={styles.nav}>
          <div className={styles.nav__container}>
            <h2 className={styles.nav__title}>Help & Information</h2>
            <span className={styles.nav__link}>
              <Link href="/">
                <a>Help</a>
              </Link>
            </span>
            <span className={styles.nav__link}>
              <Link href="/privacy-and-cookies">
                <a>Privacy & Cookies</a>
              </Link>
            </span>
          </div>

          <div className={styles.nav__container}>
            <h2 className={styles.nav__title}>About us</h2>
            <span className={styles.nav__link}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </span>
          </div>

          <div className={styles.nav__container}>
            <h2 className={styles.nav__title}>Social media</h2>
            <span className={styles.nav__link}>
              <Link href="https://www.facebook.com/streetwearfutur9">
                <a>Facebook</a>
              </Link>
            </span>

            <span className={styles.nav__link}>
              <Link href="https://www.instagram.com/streetwearfutur9/">
                <a>Instagram</a>
              </Link>
            </span>
            <span className={styles.nav__link}>
              <Link href="https://twitter.com/strtwearftr">
                <a>Twitter</a>
              </Link>
            </span>
          </div>
        </nav>
      </div>
      <div className={styles.nav__footer}>
        <div className={`${styles.nav__footer__container} ${"content"}`}>
          <span className={styles.nav__footer__title}>
            <Link href="/">
              <a>© 2021 streetwearfuture</a>
            </Link>
          </span>
          <div className={styles.nav__footer__cp}>
            <span>
              <Icon
                icon={mastercardIcon}
                style={{ color: "#1b1b1b", fontSize: "24px" }}
              />
            </span>
            <span>
              <Icon
                icon={visaIcon}
                style={{ color: "#1b1b1b", fontSize: "24px" }}
              />
            </span>
            <span>
              <Icon
                icon={bxlPaypal}
                style={{ color: "#1b1b1b", fontSize: "24px" }}
              />
            </span>
          </div>
          <div className={styles.nav__footer__right}>
            <Link href="/returns-refunds">
              <a className={styles.nav__footer__right__title}>
                Deliver & Returns
              </a>
            </Link>
            <Link href="/">
              <a className={styles.nav__footer__right__title}>Help</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className={styles.nav__footer__right__title}>Ts&Cs</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
