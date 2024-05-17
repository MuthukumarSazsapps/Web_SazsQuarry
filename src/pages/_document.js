import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="Crusher Software ,Quarry ,Mines,ERP software,RMC-Readymix Cement,Bricks Software,Bricks,SazsQuarry Top Crusher,Number one quarry software,India's Premier Crusher and Quarry Software Solution" />
          <meta name="description" content="Sazs Apps - The Ultimate Quarry Software" />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/assets/img/favlogo.png" title="Favicon" sizes="16x16" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
