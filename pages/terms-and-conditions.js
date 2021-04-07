import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/PnC.module.scss";

function termsAndConditions() {
  return (
    <div className={`${styles.pnc} content`}>
      <Head>
        <title>Streetwearfuture | Terms and Conditions</title>

        <meta
          name="description"
          content="Streetwearfuture is an online clothing website that sells clothes. Terms and Conditions"
        ></meta>
        <meta
          name="keywords"
          content="street, streetwear, fashion, clothes, street wear fashion, techwear, tech, wear, clothing, brand, shop, shopping"
        />
      </Head>
      <div className={styles.pnc__inner}>
        <h1>Terms & Conditions</h1>

        <h2>Legal bits</h2>
        <p>
          We’re streetwearfuture.com Limited a company registered in England and
          Wales. When you shop with us, these terms apply. They’re important for
          both of us as they set out what we expect from each other, and they
          also give you helpful info. You can also find out more on our Help
          pages (which also form part of these terms). Of course, if you need
          anything else, get in touch with our team we always love to hear from
          you! We keep these terms and Help pages updated and we amend them
          every so often, so remember to check back in before you shop, as the
          latest set will apply.
        </p>

        <h2>About you</h2>
        <p>
          To shop with us, you need to:
          <ul>
            <li>be at least 16 years old</li>
            <li>have a credit or debit card that we accept</li>
            <li>be authorised to use that credit or debit card</li>
          </ul>
        </p>

        <h2>Placing an order</h2>
        <p>
          When you place an order, you should receive an acknowledgement e-mail
          confirming receipt of your order. We then carry out a standard
          pre-authorisation check to make sure there’s enough money on the card.
          <br />
          <br />
          We only accept your order once payment has been approved and we have
          debited the payment card (and then the contract is made based on these
          terms). <br />
          <br /> You may be able to cancel (not change) your order within a
          short period of ordering – timings depend on your chosen delivery
          method (and will be set out in the acknowledgement email). You can’t
          change your order – you’ll need to cancel (and/or return original
          item(s)), and re-order. <br />
          <br /> All orders are subject to availability and confirmation of the
          order price. Don’t worry, if there’s an issue with an order, we’ll get
          in touch with you. <br />
          <br /> Very occasionally, we may need to refuse or cancel an order or
          close or freeze an account (even if we have previously confirmed your
          order) – e.g. if we notice something unusual on an order or an
          account. If this happens to you and you think we’ve made a mistake,
          please don’t take offence – get in touch with our team and they’ll be
          happy to speak to you about it.
        </p>

        <h2>Delivery</h2>
        <p>
          Before you finalise your order, you’ll be given various delivery
          options to choose from with estimated delivery time and dates
          depending on the delivery address. <br /> <br /> We work with
          different partners to try to meet all delivery times but sometimes
          there may be delays – e.g. because of postal/carrier delays, logistics
          or bad weather. We will keep you updated as much as we can and you
          should be able to track your parcel’s progress. Please check out our
          Delivery and Returns Page for more info. <br />
          <br /> Any problems with your delivery? Please let us know within 30
          days of the date which your order should have been delivered and we’ll
          do our best to help you.
        </p>

        <h2>Returns and Refunds</h2>
        <p>
          <Link href="/returns-refunds">
            <a style={{ textDecoration: "underline" }}>
              Check out our returns and refunds policy here.
            </a>
          </Link>
          <br />
          <br />
          We get it, sometimes something just doesn't work for you and you want
          your money back. Don't worry, as long as an item is still in its
          original condition, we accept returns for free, subject to the rules
          below, which includes rules around Fair Use. <br /> <br /> If you
          return an item requesting a refund within 28 days of the item being
          delivered to you or available for collection, we'll give you a full
          refund by way of the original payment method. <br /> <br /> We aim to
          refund you within 14 days of receiving the returned item. <br />{" "}
          <br /> If you request a refund for an item during the above time
          frames but you can't return it to us for some reason, please get in
          touch – but any refund will be at our discretion.
        </p>
      </div>
    </div>
  );
}

export default termsAndConditions;
