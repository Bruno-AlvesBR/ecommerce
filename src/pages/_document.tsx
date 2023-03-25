import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { getCssText } from '../styles';

interface DocumentProps {
  disableScripts: boolean;
}

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="E-commerce..." />
          <meta name="author" content="Bruno Alves" />

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
