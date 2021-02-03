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
        <link rel="icon" type="image/png" href="images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,300i,400,400i,500,500i,600,600i,700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60363125-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-60363125-1');
                  `,
          }}
        />
      </Head>

      <RecoilRoot>
        <GoogleReCaptchaProvider reCaptchaKey="6LdwriUaAAAAADTSphZgQecQ7Hsr-r5olGG2yUw0">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GoogleReCaptchaProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
