import Head from "next/head";
import React from "react";
import styles from "../styles/PnC.module.scss";

function returnsRefunds() {
  return (
    <div className={`${styles.pnc} content`}>
      <Head>
        <title>Streetwearfuture | returns and refunds</title>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <div className={styles.pnc__inner}>
        <span>RETURNS & REFUNDS</span>
        <h1 className={styles.pnpTitle}>What is your Returns Policy?</h1>
        <p className={styles.pnpMain}>
          Want to find out more about our returns policy? Read below for more
          information.
        </p>

        <h2>Returning an unwanted item?</h2>
        <p>
          We get it, sometimes something just doesn't work for you and you want
          your money back. As long as an item is still in its original
          condition, we accept returns for free, subject to the rules below,
          which includes rules about fair use. None of these rules affect your
          statutory rights.
          <br />
          <br />
          If you return an item requesting a refund within 28 days of the item
          being delivered to you or available for collection, we'll give you a
          full refund by way of the original payment method.
          <br />
          <br />
          We aim to refund you within 14 days of having received the returned
          item. If you request a refund for an item during the above timeframes
          but you can't return it to us for some reason, please get in touch -
          but any refund will be at our discretion.
        </p>

        <h2>After that?</h2>
        <p>
          We don't accept returns for unwanted items after the relevant returns
          period above. If you try to make a return, we may have to send it back
          to your default delivery address and ask you to cover the delivery
          costs.
        </p>

        <h2>Responsibility</h2>
        <p>
          Returned items are your responsibility until they reach us, so make
          sure they're packed up properly and can't get damaged on the way!
          <br />
          <br />
          As the parcel remains your responsibility until it arrives back with
          us, ensure that you get proof of postage in case you need to contact
          us about your return.
          <br />
          <br />
          We're not responsible for any items that are returned to us by mistake
          (it happens!). If we're able to locate the items (it's not always
          possible) and you'd like these returned to you, we may ask you to
          cover the delivery cost.
        </p>
      </div>
    </div>
  );
}

export default returnsRefunds;
