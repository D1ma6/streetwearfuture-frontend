import React, { useState, useEffect } from "react";
import { API_URL, fromImageToUrl } from "../../utilities/urls";
import styles from "../../styles/Product.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import * as fbq from "../../lib/fpixel";
import useWindowDimensions from "../../utilities/useWindowDimensions";

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

  // width
  const { width } = useWindowDimensions();
  const [endPos, setEndPos] = useState(
    width >= 1321
      ? 5
      : width <= 1320 && width >= 1111
      ? 4
      : width <= 1110 && width >= 871
      ? 3
      : width <= 870 && width >= 640
      ? 2
      : 2
  );
  // sliders
  const [sliderCount, setSliderCount] = useState(1);
  const [display, setDisplay] = useState({ start: 0, end: endPos });

  // width
  useEffect(() => {
    if (width >= 1321) {
      setEndPos(5);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSliderCount(1);
    } else if (width <= 1320 && width >= 1111) {
      setEndPos(4);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSliderCount(1);
    } else if (width <= 1110 && width >= 871) {
      setEndPos(3);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSliderCount(1);
    } else if (width <= 870 && width >= 640) {
      setEndPos(2);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSliderCount(1);
    }
  }, [width]);

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

  let sizesArr =
    product.sizes[0].size != null
      ? product.sizes
          .map((size) => `${size.size.replace(/0/g, " ")}|`)
          .filter((e) => e !== `${size}|`)
      : product.sizes[0].shoeSize != null
      ? product.sizes
          .map((size) => `${size.shoeSize.replace(/0/g, " ")}|`)
          .filter((e) => e !== `${size}|`)
      : product.sizes[0].phoneSize != null
      ? product.sizes
          .map((size) => `${size.phoneSize.replace(/0/g, " ")}|`)
          .filter((e) => e !== `${size}|`)
      : "One size";
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

        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:url" content={`${API_URL}/${product.slug}`} />
        <meta
          property="og:image"
          content={fromImageToUrl(product.images[0].image)}
        />
        <meta property="product:brand" content="Streetwearfuture" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:amount" content="100" />
        <meta property="product:price:currency" content="GBP" />
        <meta property="product:retailer_item_id" content={product.id} />
        <meta property="product:item_group_id" content={product.category} />
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
                {product.sizes[0].size != null
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
                        {size.size.replace(/0/g, " ")}
                      </button>
                    ))
                  : product.sizes[0].shoeSize != null
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
                        {size.shoeSize.replace(/0/g, " ")}
                      </button>
                    ))
                  : product.sizes[0].phoneSize != null
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
                        {size.phoneSize.replace(/0/g, " ")}
                      </button>
                    ))
                  : ""}
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
                  <span>{`(-${Math.round(
                    100 - (product.newPrice / product.price) * 100
                  )}%)`}</span>
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
              Delivery: 7-31 days
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
          {product.style != null && product.style.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Style: </span>
              {`${product.style}`}
            </p>
          ) : (
            ""
          )}

          {product.weistType != null && product.weistType.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Weist Type: </span>
              {`${product.weistType}`}
            </p>
          ) : (
            ""
          )}

          {product.material != null && product.material.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Material: </span>
              {`${product.material}`}
            </p>
          ) : (
            ""
          )}

          {product.fitType != null && product.fitType.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Fit Type: </span>
              {`${product.fitType}`}
            </p>
          ) : (
            ""
          )}

          {product.lengths != null && product.lengths.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Lengths: </span>
              {`${product.lengths}`}
            </p>
          ) : (
            ""
          )}

          {product.closureType != null && product.closureType.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Clouser Type: </span>
              {`${product.closureType}`}
            </p>
          ) : (
            ""
          )}

          {product.colors[0].color != null ? (
            <p className={styles.spec__item}>
              <span>Colors: </span>
              {product.colors.map((color) => {
                return `${color.color}, `;
              })}
            </p>
          ) : (
            ""
          )}

          {product.sizes[0].size != null ? (
            <p className={styles.spec__item}>
              <span>Sizes: </span>
              {String(product.sizes.map((size) => `${size.size}`))}
            </p>
          ) : product.sizes[0].shoeSize != null ? (
            <p className={styles.spec__item}>
              <span>Sizes: </span>
              {String(product.sizes.map((size) => `${size.shoeSize}`))}
            </p>
          ) : product.sizes[0].phoneSize != null ? (
            <p className={styles.spec__item}>
              <span>Sizes: </span>
              {String(
                product.sizes.map(
                  (size) => `${size.phoneSize.replace(/0/g, " ")}`
                )
              )}
            </p>
          ) : (
            ""
          )}

          {product.gender != null ? (
            <p className={styles.spec__item}>
              <span>Gender: </span>
              {`${product.gender}`}
            </p>
          ) : (
            ""
          )}

          {product.fashion != null && product.fashion.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Fashion: </span>
              {`${product.fashion}`}
            </p>
          ) : (
            ""
          )}

          {product.thickness != null && product.thickness.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Thickness: </span>
              {`${product.thickness}`}
            </p>
          ) : (
            ""
          )}

          {product.fabricType != null && product.fabricType.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Fabric Type: </span>
              {`${product.fabricType}`}
            </p>
          ) : (
            ""
          )}

          {product.category != null && product.category.length != 0 ? (
            <p className={styles.spec__item}>
              <span>Category: </span>
              {`${product.category}`}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="product__container">
        <div className="product__container__title">Trending items</div>
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
                    start: display.start - endPos,
                    end: display.end - endPos,
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
            {new Array(Math.ceil(products.length / endPos))
              .fill("1")
              .map((_) => (
                <div key={Math.random()}></div>
              ))}
            <button
              onClick={() => {
                if (sliderCount < products.length / endPos) {
                  setSliderCount(sliderCount + 1);
                  setDisplay({
                    start: display.start + endPos,
                    end: display.end + endPos,
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
              {sliderCount} / {Math.ceil(products.length / endPos)}
            </span>
          </div>
        </div>
      </div>

      {/* <div className={styles.reviews}>
        <h1 className={styles.reviews__title}>Reviews</h1>
        <div className={styles.reviews__cmnt}>
          <div className={styles.reviews__cmnt__left}>
            <div className={styles.reviews__cmnt__photo}>
              <img src="" />
            </div>
            <h2 className={styles.reviews__cmnt__name}>Tom Jerry</h2>
            <span className={styles.reviews__cmnt__country}>UK</span>
          </div>
          <div className={styles.reviews__cmnt__right}>
            <div className={styles.reviews__cmnt__details}>
              <div className={styles.reviews__cmnt__details__container}>
                <div className={styles.reviews__cmnt__details__opts}>
                  <span>
                    Color: <span>Black</span>
                  </span>
                  <span>
                    Size: <span>M</span>
                  </span>
                </div>
                <div className={styles.reviews__cmnt__details__stars}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23927 1.34161C9.47875 0.604557 10.5215 0.604556 10.761 1.3416L12.5147 6.73897C12.6218 7.06859 12.9289 7.29176 13.2755 7.29176H18.9506C19.7256 7.29176 20.0478 8.28345 19.4209 8.73897L14.8296 12.0747C14.5492 12.2784 14.4319 12.6395 14.539 12.9692L16.2927 18.3665C16.5322 19.1036 15.6886 19.7165 15.0616 19.261L10.4703 15.9252C10.1899 15.7215 9.81027 15.7215 9.52988 15.9252L4.93861 19.261C4.31164 19.7165 3.46805 19.1036 3.70753 18.3665L5.46124 12.9692C5.56834 12.6395 5.45102 12.2784 5.17063 12.0747L0.579352 8.73897C-0.0476187 8.28345 0.274601 7.29176 1.04958 7.29176H6.72471C7.07129 7.29176 7.37845 7.06859 7.48555 6.73897L9.23927 1.34161Z"
                      fill="#FFED4F"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23927 1.34161C9.47875 0.604557 10.5215 0.604556 10.761 1.3416L12.5147 6.73897C12.6218 7.06859 12.9289 7.29176 13.2755 7.29176H18.9506C19.7256 7.29176 20.0478 8.28345 19.4209 8.73897L14.8296 12.0747C14.5492 12.2784 14.4319 12.6395 14.539 12.9692L16.2927 18.3665C16.5322 19.1036 15.6886 19.7165 15.0616 19.261L10.4703 15.9252C10.1899 15.7215 9.81027 15.7215 9.52988 15.9252L4.93861 19.261C4.31164 19.7165 3.46805 19.1036 3.70753 18.3665L5.46124 12.9692C5.56834 12.6395 5.45102 12.2784 5.17063 12.0747L0.579352 8.73897C-0.0476187 8.28345 0.274601 7.29176 1.04958 7.29176H6.72471C7.07129 7.29176 7.37845 7.06859 7.48555 6.73897L9.23927 1.34161Z"
                      fill="#FFED4F"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23927 1.34161C9.47875 0.604557 10.5215 0.604556 10.761 1.3416L12.5147 6.73897C12.6218 7.06859 12.9289 7.29176 13.2755 7.29176H18.9506C19.7256 7.29176 20.0478 8.28345 19.4209 8.73897L14.8296 12.0747C14.5492 12.2784 14.4319 12.6395 14.539 12.9692L16.2927 18.3665C16.5322 19.1036 15.6886 19.7165 15.0616 19.261L10.4703 15.9252C10.1899 15.7215 9.81027 15.7215 9.52988 15.9252L4.93861 19.261C4.31164 19.7165 3.46805 19.1036 3.70753 18.3665L5.46124 12.9692C5.56834 12.6395 5.45102 12.2784 5.17063 12.0747L0.579352 8.73897C-0.0476187 8.28345 0.274601 7.29176 1.04958 7.29176H6.72471C7.07129 7.29176 7.37845 7.06859 7.48555 6.73897L9.23927 1.34161Z"
                      fill="#FFED4F"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23927 1.34161C9.47875 0.604557 10.5215 0.604556 10.761 1.3416L12.5147 6.73897C12.6218 7.06859 12.9289 7.29176 13.2755 7.29176H18.9506C19.7256 7.29176 20.0478 8.28345 19.4209 8.73897L14.8296 12.0747C14.5492 12.2784 14.4319 12.6395 14.539 12.9692L16.2927 18.3665C16.5322 19.1036 15.6886 19.7165 15.0616 19.261L10.4703 15.9252C10.1899 15.7215 9.81027 15.7215 9.52988 15.9252L4.93861 19.261C4.31164 19.7165 3.46805 19.1036 3.70753 18.3665L5.46124 12.9692C5.56834 12.6395 5.45102 12.2784 5.17063 12.0747L0.579352 8.73897C-0.0476187 8.28345 0.274601 7.29176 1.04958 7.29176H6.72471C7.07129 7.29176 7.37845 7.06859 7.48555 6.73897L9.23927 1.34161Z"
                      fill="#FFED4F"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23927 1.34161C9.47875 0.604557 10.5215 0.604556 10.761 1.3416L12.5147 6.73897C12.6218 7.06859 12.9289 7.29176 13.2755 7.29176H18.9506C19.7256 7.29176 20.0478 8.28345 19.4209 8.73897L14.8296 12.0747C14.5492 12.2784 14.4319 12.6395 14.539 12.9692L16.2927 18.3665C16.5322 19.1036 15.6886 19.7165 15.0616 19.261L10.4703 15.9252C10.1899 15.7215 9.81027 15.7215 9.52988 15.9252L4.93861 19.261C4.31164 19.7165 3.46805 19.1036 3.70753 18.3665L5.46124 12.9692C5.56834 12.6395 5.45102 12.2784 5.17063 12.0747L0.579352 8.73897C-0.0476187 8.28345 0.274601 7.29176 1.04958 7.29176H6.72471C7.07129 7.29176 7.37845 7.06859 7.48555 6.73897L9.23927 1.34161Z"
                      fill="#8F8F8F"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.reviews__cmnt__details__date}>
                12 Jan 2021
              </div>
            </div>
            <p className={styles.reviews__cmnt__msg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.reviews__cmnt__photos}>
              <img src="" />
              <img src="" />
            </div>
          </div>
        </div>
      </div> */}
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
