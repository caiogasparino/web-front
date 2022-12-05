import React from 'react'
import Head from "next/head"
import '../css/main.css'
import '../css/menuHome.css'
import '../css/menuStack.css'
import '../css/menu.css'
import '../css/slider.css'
import '../css/home.css'
import '../css/footer.css'
import '../css/clients.css'
import '../css/beautySpots.css'
import '../css/users.css'
import '../css/politicas.css'
import '../css/privacidade.css'
import '../css/duvidas.css'
import 'bootstrap/dist/css/bootstrap.css'

function Site({ Component, pageProps }) {
  return (
   <>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name='descrition' content='A Lyndus liga salões de beleza, barbearias, clínicas de estética e seus clientes com empresas e benefícios, revolucionando o mercado da beleza e bem-estar.'/>
         <meta name='author' content='Rodrigo Silveira'/>
         <meta name="ahrefs-site-verification" content="a06b8ff1b356b1f82024203797aadf98a53f87048d7dca6bfdabce7f091a7615" />
         <title>Lyndus - O incentivo que faz bem!</title>
         <link rel="canonical" href="https://lyndus.com/"/>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
         <script
            dangerouslySetInnerHTML={{
              __html: `
                        $(function () {
                          $(document).scroll(function () {
                            var $nav = $(".fixed-top")
                            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
                          })
                        })
                  `,
            }}
          ></script>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205398191-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-205398191-1');
              `,
            }}
            ></script>
      </Head>
      <Component {...pageProps} />
   </>
  );
  }
  export default Site