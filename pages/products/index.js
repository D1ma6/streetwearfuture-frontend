import React from "react";
import { API_URL, fromImageToUrl } from "../../utilities/urls";
import Link from "next/link";
import Head from "next/head";

function index({ products }) {
  return (
    <div className="content">
      <Head>
        <title>Streetwearfuture | Product Page</title>
        <meta
          name="description"
          content="Streetwearfuture is an online clothing website that sells clothes."
        ></meta>
        <meta
          name="keywords"
          content="street, streetwear, fashion, clothes, street wear fashion, techwear, tech, wear, clothing, brand, shop, shopping"
        />
      </Head>
      <div className="product__container">
        {products.map((product) => (
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
                {/* <span className="product__sold">236 sold</span> */}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products_res = await fetch(
    `${API_URL}/products/?_sort=published_at:desc`
  );
  const products = await products_res.json();
  return {
    props: { products },
  };
}

export default index;
