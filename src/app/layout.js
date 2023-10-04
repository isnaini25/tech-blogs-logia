import './globals.css';
import Layout from '@/components/Layout/Layout';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/query/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon_package/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon_package/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon_package/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon_package/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/favicon_package/safari-pinned-tab.svg'
            color='#
            5bbad5'
          />
          <link
            rel='icon'
            type='image/svg+xml'
            href='/favicon_package/favicon.svg'
          />
          <link
            rel='icon'
            type='image/png'
            href='/favicon_package/favicon.png'
          />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#c9edff' />
          <meta name='author' content='Logia' />
          <meta property='og:type' content='article' />
          <meta property='og:site_name' content='Logia' />
          <meta name='keywords' content='Tech News,Design,Gadget,Programming' />
          <meta property='twitter:card' content='summary_large_image' />
        </head>

        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
