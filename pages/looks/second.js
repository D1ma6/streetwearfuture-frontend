import React, { useState, useEffect } from "react";
import { API_URL, fromImageToUrl } from "../../utilities/urls";
import styles from "../../styles/Product.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

function look({ page }) {
  const products = page.products;
  console.log(products);
  console.log(page.SecondLook[0].UIDOfTheItem);
  const router = useRouter();
  console.log(router);
  return (
    <div className="content">
      <Head>
        <title>Streetwearfuture | Looks</title>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <div className="product__container">
        {products
          .filter((product) =>
            page.SecondLook.some((name) => name.UIDOfTheItem == product.slug)
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

export async function getStaticProps() {
  const page_res = await fetch(`${API_URL}/home-page`);
  const page = await page_res.json();

  return {
    props: {
      page,
    },
  };
}

export default look;
