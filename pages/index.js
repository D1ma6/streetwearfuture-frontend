import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { API_URL, fromImageToUrl } from "../utilities/urls";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowDimensions from "../utilities/useWindowDimensions";
import { useRouter } from "next/router";

function Home({ page, allProducts }) {
  const products = page.products;
  const firstItemDisplay = page.firstItemDisplay;
  const secondItemDisplay = page.secondItemDisplay;
  const thirdItemDisplay = page.thirdItemDisplay;

  const router = useRouter();
  console.log(allProducts);
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

  // popups
  const [popup, setPopUp] = useState(page.message.display);
  const [news, setNews] = useState(page.news.display);

  // looks
  const [firstLook, setFirstLook] = useState([]);
  const [secondLook, setSecondLook] = useState([]);

  let firstLookPrice = 0;
  let firstLookOriginalPrice = 0;
  let secondLookPrice = 0;
  let secondLookOriginalPrice = 0;

  firstLook.map((item) => {
    if (item.newPrice != null) {
      firstLookPrice = firstLookPrice + item.newPrice;
    } else {
      firstLookPrice = firstLookPrice + item.price;
    }
    firstLookOriginalPrice += item.price;
  });
  secondLook.map((item) => {
    if (item.newPrice != null) {
      secondLookPrice = secondLookPrice + item.newPrice;
    } else {
      secondLookPrice = secondLookPrice + item.price;
    }
    secondLookOriginalPrice += item.price;
  });
  // sliders
  const [slider, setSlider] = useState(1);
  const [display, setDisplay] = useState({
    start: 0,
    end: endPos,
  });
  const [sliderSecond, setSliderSecond] = useState(1);
  const [displaySecond, setDisplaySecond] = useState({
    start: 0,
    end: endPos,
  });
  // width
  useEffect(() => {
    if (width >= 1321) {
      setEndPos(5);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSlider(1);

      setDisplaySecond({
        start: 0,
        end: endPos,
      });
      setSliderSecond(1);
    } else if (width <= 1320 && width >= 1111) {
      setEndPos(4);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSlider(1);

      setDisplaySecond({
        start: 0,
        end: endPos,
      });
      setSliderSecond(1);
    } else if (width <= 1110 && width >= 871) {
      setEndPos(3);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSlider(1);

      setDisplaySecond({
        start: 0,
        end: endPos,
      });
      setSliderSecond(1);
    } else if (width <= 870 && width >= 640) {
      setEndPos(2);
      setDisplay({
        start: 0,
        end: endPos,
      });
      setSlider(1);

      setDisplaySecond({
        start: 0,
        end: endPos,
      });
      setSliderSecond(1);
    }
  }, [width]);

  useEffect(() => {
    let firstLook = [];
    let secondLook = [];

    allProducts.map((product) => {
      page.FirstLook.map((look) =>
        product.slug == look.UIDOfTheItem ? firstLook.push(product) : this
      );
    });
    allProducts.map((product) => {
      page.SecondLook.map((look) =>
        product.slug == look.UIDOfTheItem ? secondLook.push(product) : this
      );
    });

    setSecondLook(secondLook);
    setFirstLook(firstLook);

    news
      ? (document.querySelector("body").style.overflowY = "hidden")
      : (document.querySelector("body").style.overflowY = "scroll");
  }, []);
  useEffect(() => {
    news
      ? (document.querySelector("body").style.overflowY = "hidden")
      : (document.querySelector("body").style.overflowY = "scroll");
  }, [news]);

  return (
    <div className={styles.home}>
      <Head>
        <title>Streetwearfuture</title>
        <meta
          name="description"
          content="Streetwearfuture is an online clothing website that sells clothes."
        ></meta>
        <meta
          name="keywords"
          content="street, streetwear, fashion, clothes, street wear fashion, techwear, tech, wear, clothing, brand, shop, shopping"
        />
      </Head>
      {popup ? (
        <div className="popUp">
          <p>{page.message.message}</p>
          <button onClick={() => setPopUp(false)}>x</button>
        </div>
      ) : (
        ""
      )}
      {news ? (
        <div className="newsPopUp">
          <div>
            <div className="newsPopUp__left">
              <img src={fromImageToUrl(page.news.thumbnail)} />
            </div>
            <div className="newsPopUp__right">
              <h1>- {page.news.title} -</h1>
              <p>{page.news.message}</p>
              <div className="newsPopUp__right__social">
                <p>Visit out social media pages:</p>
                <span>
                  <Link href="https://www.facebook.com/streetwearfutur9">
                    <a>Facebook</a>
                  </Link>
                </span>

                <span>
                  <Link href="https://www.instagram.com/streetwearfutur9/">
                    <a>Instagram</a>
                  </Link>
                </span>
              </div>
              <div className="newsPopUp__right__btns">
                <button
                  onClick={() => {
                    setNews(false);
                    router.push("/products");
                  }}
                >
                  View new arrivals
                </button>
                <button onClick={() => setNews(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.displayItem__container}>
        <div className={styles.displayItem}>
          <img src={fromImageToUrl(firstItemDisplay.images[0].image)} />

          <div>
            <h1 className={styles.displayItem__title}>
              {firstItemDisplay.title}
            </h1>
            {firstItemDisplay.onSale ? (
              <div className="product__newPrice">
                <Link href={`/products/${firstItemDisplay.slug}`}>
                  <button className={styles.displayItem__btn}>
                    View product
                  </button>
                </Link>
                <h2 className="product__price">{`£${firstItemDisplay.newPrice}`}</h2>
                <p
                  className={styles.displayItem__p}
                >{`£${firstItemDisplay.price}`}</p>
                <span>{`(-%${Math.round(
                  100 -
                    (firstItemDisplay.newPrice / firstItemDisplay.price) * 100
                )})`}</span>
              </div>
            ) : (
              <div className="product__newPrice">
                <h2 className="product__price">{`£${firstItemDisplay.price}`}</h2>
              </div>
            )}
          </div>
        </div>

        {width > 700 ? (
          <div className={styles.displayItem}>
            <img src={fromImageToUrl(secondItemDisplay.images[0].image)} />

            <div>
              <h1 className={styles.displayItem__title}>
                {secondItemDisplay.title}
              </h1>
              {secondItemDisplay.onSale ? (
                <div className="product__newPrice">
                  <Link href={`/products/${secondItemDisplay.slug}`}>
                    <button className={styles.displayItem__btn}>
                      View product
                    </button>
                  </Link>
                  <h2 className="product__price">{`£${secondItemDisplay.newPrice}`}</h2>
                  <p
                    className={styles.displayItem__p}
                  >{`£${secondItemDisplay.price}`}</p>
                  <span>{`(-%${Math.round(
                    100 -
                      (secondItemDisplay.newPrice / secondItemDisplay.price) *
                        100
                  )})`}</span>
                </div>
              ) : (
                <div className="product__newPrice">
                  <h2 className="product__price">{`£${secondItemDisplay.price}`}</h2>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        {width > 1140 ? (
          <div className={styles.displayItem}>
            <img src={fromImageToUrl(thirdItemDisplay.images[0].image)} />

            <div>
              <h1 className={styles.displayItem__title}>
                {thirdItemDisplay.title}
              </h1>
              {thirdItemDisplay.onSale ? (
                <div className="product__newPrice">
                  <Link href={`/products/${thirdItemDisplay.slug}`}>
                    <button className={styles.displayItem__btn}>
                      View product
                    </button>
                  </Link>
                  <h2 className="product__price">{`£${thirdItemDisplay.newPrice}`}</h2>
                  <p
                    className={styles.displayItem__p}
                  >{`£${thirdItemDisplay.price}`}</p>
                  <span>{`(-%${Math.round(
                    100 -
                      (thirdItemDisplay.newPrice / thirdItemDisplay.price) * 100
                  )})`}</span>
                </div>
              ) : (
                <div className="product__newPrice">
                  <h2 className="product__price">{`£${thirdItemDisplay.price}`}</h2>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.home__main} ${"content"}`}>
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
                  if (slider > 1) {
                    setSlider(slider - 1);
                    setDisplay({
                      start: display.start - endPos,
                      end: display.end - endPos,
                    });
                  } else {
                    setSlider(slider);
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
                  if (slider < products.length / endPos) {
                    setSlider(slider + 1);
                    setDisplay({
                      start: display.start + endPos,
                      end: display.end + endPos,
                    });
                  } else {
                    setSlider(slider);
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
                {slider} / {Math.ceil(products.length / endPos)}
              </span>
            </div>
          </div>
        </div>
        <div className="product__container">
          <div className="product__container__title">On Sale</div>
          {products
            .filter((product) => product.onSale == true)
            .slice(displaySecond.start, displaySecond.end)
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
                  </div>
                </a>
              </Link>
            ))}
          <div className="product__slider">
            <div className="product__slider__nav">
              <button
                onClick={() => {
                  if (sliderSecond > 1) {
                    setSliderSecond(sliderSecond - 1);

                    setDisplaySecond({
                      start: displaySecond.start - endPos,
                      end: displaySecond.end - endPos,
                    });
                  } else {
                    setSliderSecond(sliderSecond);
                    setDisplaySecond({
                      start: displaySecond.start,
                      end: displaySecond.end,
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
              {new Array(
                Math.ceil(
                  products.filter((product) => product.onSale == true).length /
                    endPos
                )
              )
                .fill("1")
                .map((_) => (
                  <div key={Math.random()}></div>
                ))}
              <button
                onClick={() => {
                  if (
                    sliderSecond <
                    products.filter((product) => product.onSale == true)
                      .length /
                      endPos
                  ) {
                    setSliderSecond(sliderSecond + 1);
                    setDisplaySecond({
                      start: displaySecond.start + endPos,
                      end: displaySecond.end + endPos,
                    });
                  } else {
                    setSliderSecond(sliderSecond);
                    setDisplaySecond({
                      start: displaySecond.start,
                      end: displaySecond.end,
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
                {sliderSecond} /{" "}
                {Math.ceil(
                  products.filter((product) => product.onSale == true).length /
                    endPos
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        <h1 className={styles.newsletter__title}>
          Subscribe to our newsletter to get the latest discounts and coupons
        </h1>
        <form className={styles.newsletter__form}>
          <input placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={`${styles.look}`}>
        <h1>Get the look</h1>
        <div className={styles.look__items}>
          <div>
            <div className={styles.look__items__img}>
              <img src={fromImageToUrl(page.FirstLookImage)} />
            </div>
            <h1 className={styles.look__items__title}>{page.FirstLookTitle}</h1>
            <div className="product__newPrice">
              <h2 className="product__price">{`£${firstLookPrice.toFixed(
                2
              )}`}</h2>

              {Math.round(
                100 - (firstLookPrice / firstLookOriginalPrice) * 100
              ) != 0 ? (
                <>
                  <p>{`£${firstLookOriginalPrice.toFixed(2)}`}</p>
                  <span>{`(-%${Math.round(
                    100 - (firstLookPrice / firstLookOriginalPrice) * 100
                  )})`}</span>
                </>
              ) : (
                ""
              )}
            </div>
            <Link href="/looks/first">
              <a className={styles.look__items__btn}>View the items</a>
            </Link>
          </div>

          <div>
            <div className={styles.look__items__img}>
              <img src={fromImageToUrl(page.SecondLookImage)} />
            </div>
            <h1 className={styles.look__items__title}>
              {page.SecondLookTitle}
            </h1>
            <div className="product__newPrice">
              <h2 className="product__price">{`£${secondLookPrice.toFixed(
                2
              )}`}</h2>
              {Math.round(
                100 - (secondLookPrice / secondLookOriginalPrice) * 100
              ) != 0 ? (
                <>
                  <p>{`£${secondLookOriginalPrice.toFixed(2)}`}</p>
                  <span>{`(-%${Math.round(
                    100 - (secondLookPrice / secondLookOriginalPrice) * 100
                  )})`}</span>
                </>
              ) : (
                ""
              )}
            </div>
            <Link href="/looks/second">
              <a className={styles.look__items__btn}>View the items</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const page_res = await fetch(`${API_URL}/home-page`);
  const page = await page_res.json();
  const allProducts_res = await fetch(`${API_URL}/products`);
  const allProducts = await allProducts_res.json();

  return {
    props: {
      page,
      allProducts,
    },
  };
}

export default Home;
