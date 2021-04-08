import React, { useState, useEffect } from "react";
import { API_URL, fromImageToUrl } from "../../utilities/urls";
import styles from "../../styles/Product.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import * as fbq from "../../lib/fpixel";

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
  "Bags",
  "Belts",
  "Masks",
  "Gloves",
  "Laces",
  "Scarves",
];

function Product({ product, products }) {
  const handleClick = () => {
    fbq.event("Purchase", {
      currency: "GBP",
      value: `${product.onSale ? product.newPrice : product.price}`,
    });
  };

  const [size, setSize] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const checkSize = (items, currItem) => {
    setSize(currItem.textContent);
    items.forEach((item) => {
      if (item.classList.contains(`${styles.product__opt_active}`)) {
        item.classList.remove(styles.product__opt_active);
      }
      currItem.classList.add(styles.product__opt_active);
    });
  };
  const checkColor = (items, currItem) => {
    setColor(currItem.textContent);
    items.forEach((item) => {
      if (item.classList.contains(`${styles.product__opt_active}`)) {
        item.classList.remove(styles.product__opt_active);
      }
      currItem.classList.add(styles.product__opt_active);
    });
  };

  const router = useRouter();
  const [quantity, setQantity] = useState(1);
  const [slider, setSlider] = useState(undefined);
  const [img, setImg] = useState(0);
  const [sliderCount, setSliderCount] = useState(1);
  const [display, setDisplay] = useState({ start: 0, end: 5 });
  useEffect(() => {
    if (quantity < 1) {
      setQantity(1);
    }
  }, [quantity]);

  useEffect(() => {
    setSlider(document.querySelector(`.${styles.product__slider__bar} > div`));
  }, []);

  const imageSliderNext = (items) => {
    if (img > product.images.length - 2) {
      setImg(img);
    } else {
      setImg(img + 1);
      items.forEach((item) => {
        item.style.transform = `translateX(-${(img + 1) * 100}%)`;
      });

      slider.style.transform = `translateX(${100 * (img + 1)}%)`;
    }
  };
  const imageSliderPrevious = (items) => {
    if (img <= 0) {
      setImg(0);
    } else {
      setImg(img - 1);
      items.forEach((item) => {
        item.style.transform = `translateX(-${(img - 1) * 100}%)`;
      });
      slider.style.transform = `translateX(${(img - 1) * 100}%)`;
    }
  };

  useEffect(() => {
    setImg(0);
    checkColor(
      document.querySelectorAll(`.${styles.color}`),
      document.querySelector(`.${styles.color}`)
    );
    checkSize(
      document.querySelectorAll(`.${styles.sizes}`),
      document.querySelector(`.${styles.sizes}`)
    );
    document.querySelector(
      `.${styles.product__slider__bar} > div`
    ).style.transform = `translateX(0%)`;
  }, [product]);

  let sizesArr = product.sizes
    .map((size) => `${size.size}|`)
    .filter((e) => e !== `${size}|`);
  sizesArr.unshift(`${size}|`);
  let colorsArr = product.colors
    .map((color) => `${color.color}|`)
    .filter((e) => e !== `${color}|`);
  colorsArr.unshift(`${color}|`);

  return (
    <div className={"content"}>
      <Head>
        <title>Streetwearfuture | {product.title}</title>
        <meta name="description" content={`${product.description}`}></meta>
        <meta
          name="keywords"
          content="street, streetwear, fashion, clothes, street wear fashion, techwear, tech, wear, clothing, brand, shop, shopping, items, products"
        />
      </Head>
      <div className={`${styles.product}`}>
        <div className={styles.product__left}>
          <span className={styles.product__category}>{product.category}</span>
          <h1 className={styles.product__title}>{product.title}</h1>
          <p className={styles.product__para}>{product.description}</p>

          <div className={styles.product__d}>
            <div className={styles.product__sizes}>
              <h3 className={styles.product__opt__title}>Size:</h3>
              <div>
                {categories
                  .slice(11, 17)
                  .some((category) => category == product.category)
                  ? product.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={(e) => {
                          checkSize(
                            document.querySelectorAll(`.${styles.sizes}`),
                            e.target
                          );
                        }}
                        className={`${styles.product__opt} ${styles.sizes}`}
                      >
                        {size.shoeSize}
                      </button>
                    ))
                  : product.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={(e) => {
                          checkSize(
                            document.querySelectorAll(`.${styles.sizes}`),
                            e.target
                          );
                        }}
                        className={`${styles.product__opt} ${styles.sizes}`}
                      >
                        {size.size}
                      </button>
                    ))}
              </div>
            </div>
          </div>
          <div className={styles.product__colors}>
            <h3 className={styles.product__opt__title}>Color:</h3>
            <div>
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={(e) =>
                    checkColor(
                      document.querySelectorAll(`.${styles.color}`),
                      e.target
                    )
                  }
                  className={`${styles.product__opt} ${styles.color}`}
                >
                  {color.color}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.product__bottom}>
            <h2 className={styles.product__price}>
              {product.onSale ? (
                <div>
                  {`£${product.newPrice}`}

                  <p>{`£${product.price}`}</p>
                  <span>{`(-%${Math.round(
                    100 - (product.newPrice / product.price) * 100
                  )})`}</span>
                </div>
              ) : (
                `£${product.price}`
              )}
            </h2>

            <div className={styles.product__price__container}>
              <button
                className={`${"snipcart-add-item"} ${styles.product__buy}`}
                data-item-id={`${product.slug}`}
                data-item-name={`${product.title}`}
                data-item-price={`${
                  product.onSale ? product.newPrice : product.price
                }`}
                data-item-image={`${fromImageToUrl(product.images[0].image)}`}
                data-item-url={`${router.asPath}`}
                data-item-description={`${product.description}`}
                data-item-custom1-name={`color`}
                data-item-custom1-options={`${String(colorsArr)
                  .split(",")
                  .join("")
                  .replace(/.$/, "")}`}
                data-item-custom2-name={`size`}
                data-item-custom2-options={`${String(sizesArr)
                  .split(",")
                  .join("")
                  .replace(/.$/, "")}`}
                onClick={() => handleClick()}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className={styles.product__details}>
            <h1>Free Shipping</h1>
            <p>
              to United Kingdom via Royal mail Standard Shipping Estimated
              Delivery: 7-23 days
            </p>
          </div>
        </div>

        <div className={styles.product__right}>
          <div className={styles.product__img}>
            <div className={styles.product__img__container}>
              {product.images.map((image) => (
                <img
                  className={styles.images}
                  key={image.id}
                  src={fromImageToUrl(image.image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.product__slider}>
            <div className={styles.product__slider__top}>
              <div
                className={`${styles.product__d} ${styles.product__alignCenter}`}
              >
                <button
                  onClick={() =>
                    imageSliderPrevious(
                      document.querySelectorAll(`.${styles.images}`)
                    )
                  }
                  className={styles.product__slider__left}
                >
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.16308 15.6818L0.315166 8.76818C-0.105055 8.34393 -0.105055 7.65607 0.315166 7.23182L7.16308 0.318192C7.5833 -0.106062 8.26461 -0.106062 8.68483 0.318192C9.10506 0.742447 9.10506 1.4303 8.68483 1.85455L2.5978 8L8.68483 14.1454C9.10506 14.5697 9.10506 15.2576 8.68483 15.6818C8.26461 16.1061 7.5833 16.1061 7.16308 15.6818Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div className={styles.product__slider__bar}>
                  <div
                    style={{
                      width: `${100 / product.images.length}%`,
                    }}
                  ></div>
                </div>
                <button
                  onClick={() =>
                    imageSliderNext(
                      document.querySelectorAll(`.${styles.images}`)
                    )
                  }
                  className={styles.product__slider__right}
                >
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.83692 0.318191L8.68484 7.23182C9.10506 7.65607 9.10506 8.34393 8.68483 8.76818L1.83692 15.6818C1.4167 16.1061 0.735386 16.1061 0.315164 15.6818C-0.105058 15.2576 -0.105058 14.5697 0.315164 14.1454L6.4022 8L0.315166 1.85455C-0.105056 1.4303 -0.105056 0.742446 0.315166 0.318191C0.735389 -0.106064 1.4167 -0.106063 1.83692 0.318191Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.product__slider__bottom}>
              <p>
                {`${img + 1}`} / {`${product.images.length}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spec}>
        <h1 className={styles.spec__title}>Specifications</h1>

        <div className={styles.spec__container}>
          <div className={styles.spec__container_c}>
            <p className={styles.spec__item}>
              <span>Style: </span>
              {`${product.style}`}
            </p>
            <p className={styles.spec__item}>
              <span>Waist Type: </span>
              {`${product.weistType}`}
            </p>
            <p className={styles.spec__item}>
              <span>Material: </span>
              {`${product.material}`}
            </p>
            <p className={styles.spec__item}>
              <span>Fit type: </span>
              {`${product.fitType}`}
            </p>
          </div>

          <div className={styles.spec__container_c}>
            <p className={styles.spec__item}>
              <span>Length: </span>
              {`${product.lengths}`}
            </p>
            <p className={styles.spec__item}>
              <span>Closure Type: </span>
              {`${product.closureType}`}
            </p>
            <p className={styles.spec__item}>
              <span>Colors: </span>
              {product.colors.map((color) => {
                return `${color.color}, `;
              })}
            </p>
            <p className={styles.spec__item}>
              <span>Sizes: </span>
              {product.sizes[0].size != null
                ? String(product.sizes.map((size) => `${size.size}`))
                : String(product.sizes.map((size) => `${size.shoeSize}`))}
            </p>
          </div>

          <div className={styles.spec__container_c}>
            <p className={styles.spec__item}>
              <span>Gender: </span>
              {`${product.gender}`}
            </p>
            <p className={styles.spec__item}>
              <span>Fashion: </span>
              {`${product.fashion}`}
            </p>
            <p className={styles.spec__item}>
              <span>Fit Type: </span>
              {`${product.fitType}`}
            </p>
          </div>

          <div className={styles.spec__container_c}>
            <p className={styles.spec__item}>
              <span>Thickness: </span>
              {`${product.thickness}`}
            </p>
            <p className={styles.spec__item}>
              <span>Fabric Type: </span>
              {`${product.fabricType}`}
            </p>
            <p className={styles.spec__item}>
              <span>Category: </span>
              {`${product.category}`}
            </p>
          </div>
        </div>
      </div>
      <div className="product__container">
        <div className="product__container__title">Recomendations</div>
        {products.slice(display.start, display.end).map((product) => (
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

        <div className="product__slider">
          <div className="product__slider__nav">
            <button
              onClick={() => {
                if (sliderCount > 1) {
                  setSliderCount(sliderCount - 1);
                  setDisplay({
                    start: display.start - 5,
                    end: display.end - 5,
                  });
                } else {
                  setSliderCount(sliderCount);
                  setDisplay({
                    start: display.start,
                    end: display.end,
                  });
                }
              }}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.16308 15.6818L0.315166 8.76818C-0.105055 8.34393 -0.105055 7.65607 0.315166 7.23182L7.16308 0.318192C7.5833 -0.106062 8.26461 -0.106062 8.68483 0.318192C9.10506 0.742447 9.10506 1.4303 8.68483 1.85455L2.5978 8L8.68483 14.1454C9.10506 14.5697 9.10506 15.2576 8.68483 15.6818C8.26461 16.1061 7.5833 16.1061 7.16308 15.6818Z"
                  fill="white"
                />
              </svg>
            </button>
            {new Array(Math.ceil(products.length / 5)).fill("1").map((_) => (
              <div key={Math.random()}></div>
            ))}
            <button
              onClick={(e) => {
                if (sliderCount < products.length / 5) {
                  setSliderCount(sliderCount + 1);
                  setDisplay({
                    start: display.start + 5,
                    end: display.end + 5,
                  });
                } else {
                  setSliderCount(sliderCount);
                  setDisplay({
                    start: display.start,
                    end: display.end,
                  });
                }
              }}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.83692 0.318191L8.68484 7.23182C9.10506 7.65607 9.10506 8.34393 8.68483 8.76818L1.83692 15.6818C1.4167 16.1061 0.735386 16.1061 0.315164 15.6818C-0.105058 15.2576 -0.105058 14.5697 0.315164 14.1454L6.4022 8L0.315166 1.85455C-0.105056 1.4303 -0.105056 0.742446 0.315166 0.318191C0.735389 -0.106064 1.4167 -0.106063 1.83692 0.318191Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="product__slider__index">
            <span>
              {sliderCount} / {Math.ceil(products.length / 5)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();
  const products_res = await fetch(
    `${API_URL}/products/?_sort=published_at:asc&_limit=15&slug_ne=${slug}`
  );
  const products = await products_res.json();
  return {
    props: { product: found[0], products },
  };
}

export async function getStaticPaths() {
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();

  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false,
  };
}

export default Product;
