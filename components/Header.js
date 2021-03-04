import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.scss";

// icons
import { Icon, InlineIcon } from "@iconify/react";
import searchIcon from "@iconify/icons-akar-icons/search";

function Header() {
  return (
    <header className={`${styles.header} ${"container"}`}>
      <div className={styles.header__inner}>
        <div className={styles.navbar}>
          <div className={styles.menu}>
            <span className={styles.menu__span}></span>
            <span className={styles.menu__span}></span>
          </div>
          <nav className={styles.nav}>
            <Link href="#">
              <a className={styles.nav__link}>New Arrivals</a>
            </Link>
            <Link href="#">
              <a className={styles.nav__link}>Men</a>
            </Link>
            <Link href="#">
              <a className={styles.nav__link}>Women</a>
            </Link>
          </nav>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/streetwearfuture.svg"
              layout="fixed"
              width="182"
              height="18"
            />
          </Link>
        </div>

        <div className={styles.account}>
          <div className={styles.account__search}>
            <input className={styles.account__search__input} />
            <Icon
              icon={searchIcon}
              className={styles.account__search__icon}
              style={{ color: "#ffffff", fontSize: "16px" }}
            />
          </div>
          <Link href="#">
            <a className={styles.account__profile}>Account</a>
          </Link>
          <Link href="#">
            <a className={styles.account__cart}>Cart</a>
          </Link>
          <Link href="#">
            <a className={styles.account__basket}>3</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
