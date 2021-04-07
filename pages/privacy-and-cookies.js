import Head from "next/head";
import React from "react";
import styles from "../styles/PnC.module.scss";

function pandc() {
  return (
    <div className={`${styles.pnc} content`}>
      <Head>
        <title>Streetwearfuture | Privacy and Cookies</title>
        <meta
          name="description"
          content="Streetwearfuture is an online clothing website that sells clothes. Privacy and Cookies page"
        ></meta>
        <meta
          name="keywords"
          content="street, streetwear, fashion, clothes, street wear fashion, techwear, tech, wear, clothing, brand, shop, shopping"
        />
      </Head>
      <div className={styles.pnc__inner}>
        <h1>Privacy & Cookies: Our promises</h1>
        <span className={styles.main}>
          We’ll always keep your data safe and secure. So you’re clued up,
          here’s why we need it and how we use it.
        </span>
        <div className={styles.pnc__inner__obj}>
          <div>We’ll protect your data like it’s our own.</div>
          <div>We will only use your data to up your experience.</div>
          <div>You decide what and how you hear from us.</div>
          <div>If we don’t need your info, we’ll delete it.</div>
        </div>
        <p className={styles.main}>
          At streetwearfuture, we are 100% committed to protecting your privacy
          and security. We are customers ourselves of streetwearfuture, so we
          totally appreciate and respect how important privacy is. <br />
          <br />
          For all streetwearfuture services, the data controller — the company
          that’s responsible for protecting your privacy— is
          streetwearfuture.com Limited.
        </p>

        <h2>Marketing messages</h2>
        <p>
          If you have said we can, we’ll send you marketing messages to keep you
          aware of what we’re up to and to help you see and find our products
          and services. <br />
          We do that through sending:
          <ul>
            <li>
              Emails: You can also click on the ‘unsubscribe’ link in any
              marketing email you receive, and this will take you to the Contact
              Preferences section of your account so you can unsubscribe from
              that method of communication.
            </li>
            <li>
              Any method of Marketing: You can contact our Customer Care team .
              Once you do this, we will update our records to ensure that you
              don’t receive further marketing messages.
            </li>
          </ul>
        </p>

        <h2>Keeping your information</h2>
        <p>
          We’ll hold on to your information for as long as you continue to be an
          streetwearfuture customer and for as long as we are required to keep
          it to ensure we meet our legal requirements across the globe. If you
          no longer wish to be a customer you can contact our team and request
          that we close your account. However, we have a legal requirement to
          keep some of your personal data even after you have asked us to delete
          it. We will only keep what we absolutely need to, and only to make
          sure we can meet our legal or regulatory requirements, resolve
          disputes, prevent fraud and abuse, or enforce our Terms & Conditions.
        </p>

        <h2>Your rights</h2>
        <p>
          You have a lot of rights relating to your personal information, these
          are:
          <ul>
            <li>
              The right to be informed about how your personal information is
              being used
            </li>
            <li>
              The right to access the personal information we hold about you
            </li>
            <li>
              The right to request the correction of inaccurate personal
              information we hold about you
            </li>
            <li>
              The right to request that we delete your data, or stop processing
              it or collecting it, in some circumstances
            </li>
            <li>
              The right to ask us to explain any computer-system decision about
              you
            </li>
            <li>
              The right to request that we transfer or port elements of your
              data either to you or another service provider
            </li>
          </ul>
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies when you visit our site, but you can control these
          through your browser settings. <br />
          We use cookies for:
          <ul>
            <li>essential operations, like site navigation</li>
            <li>
              allowing you to add items to your shopping bag or to your Saved
              Items
            </li>
            <li>
              analysing visitor numbers and behaviours, such as what pages are
              frequently visited
            </li>
          </ul>
        </p>

        <h2>How to contact us</h2>
        <p>
          We always want to hear from our customers.
          <br />
          If you:
          <ul>
            <li>Have any questions or feedback about this notice</li>
            <li>Would like us to stop using your information</li>
          </ul>
          <br />
          Please don’t hesitate to contact our Customer Care team, who will be
          happy to answer any questions you may have.
          <br />
          You can contact our privacy team by dropping us a line at
          streetwearfuture@gmail.com
        </p>
      </div>
    </div>
  );
}

export default pandc;
