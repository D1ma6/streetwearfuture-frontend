import React from "react";
import { fromImageToUrl } from "../utilities/urls";
import Link from "next/link";

function ProductContainer({
  products,
  display,
  setDisplay,
  width,
  endPos,
  slider,
  setSlider,
}) {
  return (
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
                  <span>{`(-${Math.round(
                    100 - (product.newPrice / product.price) * 100
                  )}%)`}</span>
                </div>
              ) : (
                <h2 className="product__price">{`£${product.price}`}</h2>
              )}
            </div>
          </a>
        </Link>
      ))}

      {width >= 870 ? (
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
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductContainer;
