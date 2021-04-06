import React, { useState, useEffect } from "react";
import { API_URL, fromImageToUrl } from "../../utilities/urls";
import styles from "../../styles/Product.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const arrSize = ["XS", "S", "M", "L", "XL"];
const arrColor = ["Black", "White", "Yellow", "Red", "Cargo", "Navy"];
const arrShoe = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"];

function category({ products }) {
  const router = useRouter();

  const [sizeArr, setSize] = useState(["XS", "S", "M", "L", "XL"]);
  const [colorArr, setColor] = useState([
    "Black",
    "White",
    "Yellow",
    "Red",
    "Cargo",
    "Navy",
  ]);
  const [shoe, setShoe] = useState([
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
  ]);

  const checkSize = (currItem) => {
    if (sizeArr.length < 1) {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setSize([...sizeArr, currItem.textContent]);
      }
    } else {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setSize([...sizeArr, currItem.textContent]);
      } else {
        currItem.classList.remove(styles.product__opt_active);
        let newArr = sizeArr;
        newArr.splice(sizeArr.indexOf(currItem.textContent), 1);
        setSize([...newArr]);
      }
    }
  };

  const checkColor = (currItem) => {
    if (colorArr.length < 1) {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setColor([...colorArr, currItem.textContent]);
      }
    } else {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setColor([...colorArr, currItem.textContent]);
      } else {
        currItem.classList.remove(styles.product__opt_active);
        let newArr = colorArr;
        newArr.splice(colorArr.indexOf(currItem.textContent), 1);
        setColor([...newArr]);
      }
    }
  };
  const checkShoe = (currItem) => {
    if (shoe.length < 1) {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setShoe([...shoe, currItem.textContent]);
      }
    } else {
      if (!currItem.classList.contains(styles.product__opt_active)) {
        currItem.classList.add(styles.product__opt_active);
        setShoe([...shoe, currItem.textContent]);
      } else {
        currItem.classList.remove(styles.product__opt_active);
        let newArr = shoe;
        newArr.splice(shoe.indexOf(currItem.textContent), 1);
        setShoe([...newArr]);
      }
    }
  };

  return (
    <div className="content">
      <Head>
        <title>Streetwearfuture | Men categories</title>
      </Head>
      <div className="product__container">
        <h1 className={styles.category__title}>{router.query.category}</h1>
        <div className={styles.search}>
          <div>
            <h1>Size:</h1>
            <div className={styles.search__opt}>
              {arrSize.map((size) => (
                <button
                  key={size}
                  onClick={(e) => checkSize(e.target)}
                  className={`${styles.product__opt} ${styles.sizes} ${styles.search__btn} ${styles.product__opt_active}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1>Color:</h1>
            <div className={styles.search__opt}>
              {arrColor.map((size) => (
                <button
                  key={size}
                  onClick={(e) => checkColor(e.target)}
                  className={`${styles.product__opt} ${styles.sizes} ${styles.search__btn} ${styles.product__opt_active}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1>Shoe Size:</h1>
            <div className={styles.search__opt}>
              {arrShoe.map((size) => (
                <button
                  key={size}
                  onClick={(e) => checkShoe(e.target)}
                  className={`${styles.product__opt} ${styles.sizes} ${styles.search__btn} ${styles.product__opt_active}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        {products
          .filter((product) => {
            return product.sizes[0].size != null
              ? product.sizes.some((size) =>
                  sizeArr.some((sizeArr) => size.size == sizeArr)
                )
              : product.sizes.some((size) =>
                  shoe.some((arShoe) => size.shoeSize == arShoe)
                );
          })
          .filter((product) =>
            product.colors.some((color) =>
              colorArr.some(
                (colorAr) =>
                  `${color.color}`.toLowerCase() == `${colorAr}`.toLowerCase()
              )
            )
          )
          .map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <a>
                <div className="product">
                  <div className="product__image">
                    <img src={fromImageToUrl(product.images[0].image)} />
                  </div>
                  <h1 className="product__title">{product.title}</h1>
                  {product.onSale ? (
                    <div className="product__newPrice">
                      <h2 className="product__price">{`£${product.newPrice}`}</h2>
                      <p>{`£${product.price}`}</p>
                      <span>{`(-%${Math.round(
                        100 - (product.newPrice / product.price) * 100
                      )})`}</span>
                    </div>
                  ) : (
                    <h2 className="product__price">{`£${product.price}`}</h2>
                  )}
                  <span className="product__sold">236 sold</span>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { category } }) {
  const products_res = await fetch(
    `${API_URL}/products/?category=${category}&gender=Male&gender=Unisex`
  );
  const products = await products_res.json();
  return {
    props: { products },
  };
}

export async function getStaticPaths() {
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();

  return {
    paths: products.map((product) => ({
      params: {
        category: String(product.category),
      },
    })),
    fallback: false,
  };
}

export default category;
