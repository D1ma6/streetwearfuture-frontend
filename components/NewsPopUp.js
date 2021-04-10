import React, { useEffect, useState } from "react";
import { fromImageToUrl } from "../utilities/urls";
import Link from "next/link";
import cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";

function NewsPopUp({ page, setNews, news, initialNews }) {
  console.log(`initial: ${initialNews}`);

  return (
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
            <button
              onClick={() => {
                setNews(false);
                cookie.set("news", false), { expires: 1 / 24 };
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

NewsPopUp.getInitialProps = async ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialNews: cookies.val,
  };
};

export default NewsPopUp;
