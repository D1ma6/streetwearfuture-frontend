import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.scss";

const categories = [
  "Beanies",
  "Caps",
  "Hoodies",
  "Jackets",
  "Jeans",
  "Shorts",
  "Socks",
  "Sweatpants",
  "Sweatshirts",
  "Trousers",
  "TShirts",
  "Boots",
  "Sandals",
  "Shoes",
  "Sliders",
  "Slippers",
  "Trainers",
  "Accessories",
  "Bracelets",
  "Bags",
  "Belts",
  "Masks",
  "Gloves",
  "Laces",
  "Scarves",
];
function ListItems({ list, listNav, setList }) {
  return (
    <div
      ref={listNav}
      style={
        list != null
          ? { opacity: "1", zIndex: "9" }
          : { opacity: "0", zIndex: "-1" }
      }
      className={styles.listItems}
    >
      {list == "Men" && (
        <div className="content">
          <div className={styles.listItems__container}>
            <div>
              <h1 className={styles.listItems__title}>Shop All Clothing</h1>
              <div>
                {categories.slice(0, 11).map((item) => (
                  <Link href={`/men/${item}/`} key={item}>
                    <a
                      onClick={() => {
                        setList(null);
                      }}
                      key={item}
                    >
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className={styles.listItems__title}>Shop For Shoes</h1>
              <div>
                {categories.slice(11, 17).map((item) => (
                  <Link href={`/men/${item}`} key={item}>
                    <a onClick={() => setList(null)} key={item}>
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className={styles.listItems__title}>
                Shop All Accessories & Lifestyle
              </h1>
              <div>
                {categories.slice(17, 25).map((item) => (
                  <Link href={`/men/${item}`} key={item}>
                    <a onClick={() => setList(null)} key={item}>
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {list == "Women" && (
        <div className="content">
          <div className={styles.listItems__container}>
            <div>
              <h1 className={styles.listItems__title}>Shop All Clothing</h1>
              <div>
                {categories.slice(0, 11).map((item) => (
                  <Link href={`/women/${item}`} key={item}>
                    <a onClick={() => setList(null)} key={item}>
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className={styles.listItems__title}>Shop For Shoes</h1>
              <div>
                {categories.slice(11, 17).map((item) => (
                  <Link href={`/women/${item}`} key={item}>
                    <a onClick={() => setList(null)} key={item}>
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className={styles.listItems__title}>
                Shop All Accessories & Lifestyle
              </h1>
              <div>
                {categories.slice(17, 25).map((item) => (
                  <Link href={`/women/${item}`} key={item}>
                    <a onClick={() => setList(null)} key={item}>
                      {item}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItems;
