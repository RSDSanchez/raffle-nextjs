import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/fontawesome-all.min.css';
import '../public/css/style.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <>
      <Head>
        <title>4Elementos: Plataforma de Raffles y lanzamientos de 4Elementos</title>
        <meta
          name="description"
          content="4Elementos Plataforma de Lanzamientos: anótate a los Raffles más top en 4Elementos y consigue las zapas más exclusivas."
        />
        <meta name="author" content="4Elementos" />
        <link rel="icon" type="image/png" href="https://4elementos.es/raffles/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,300i,400,400i,500,500i,600,600i,700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-59DTL2X');
                  `,
          }}
        /> */}
      </Head>

      <RecoilRoot>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-59DTL2X"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <Layout>
            {/* <!-- Google Tag Manager (noscript) --> */}
            {/* <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-59DTL2X"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            </noscript> */}
            {/* <!-- End Google Tag Manager (noscript) --> */}
            <Component {...pageProps} />
          </Layout>
        </GoogleReCaptchaProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
