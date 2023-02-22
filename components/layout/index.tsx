import Head from 'next/head';
import { Playfair_Display, Source_Sans_Pro  } from '@next/font/google';

const playfairDisplay = Playfair_Display({
  weight: '800',
  subsets: ['latin'],
  style: 'normal',
  variable: '--playfair-font',
});

const sourceSansPro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--source-sans-font',
});


const Layout = ({ children }: any) => (
  <>
    <Head>
      <title>Joe Dalton | Creative Developer</title>
      <meta name="description" content="Joe Dalton web development, available for freelance and contract web developemnt, JavaScript development, Front-end development, single-page app development, React development, and Vue projects. Located in Denver, Colorado." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="canonical" href="https://www.joedalton.io" />
      <meta name="robots" content="index, follow" />
    </Head>

    <div className={`${playfairDisplay.variable} ${sourceSansPro.variable}`}>
      <header>
        header
      </header>

      <main>
        {children}
      </main>

      <footer>
        footer
      </footer>
    </div>
  </>
);

export default Layout;