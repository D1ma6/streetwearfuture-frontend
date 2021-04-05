import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />

          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"
          ></script>

          <script
            src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
            data-api-key="YmJiYjA1ZDUtMWE4Ny00YzMyLWJlOGUtZDYxYmU2YjhkNGIzNjM3NTA0MDMzNTIyNTEzOTA1"
            id="snipcart"
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
