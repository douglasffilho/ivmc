import { Footer, Header, Icon, Logo } from 'components';
import Head from 'next/head';

import { A, P } from '../StyledHtml';

const seo = {
  author: 'Douglas Filho',
  title: 'IVMC',
  description:
    'Um lugar pra encontrar opinões fortemente embasadas e pautas nas multiplas vozes geniais da minha cabecinha.',
  keywords:
    'IVMC,instituto vozes da minha cabeça,instituto,vozes,da,minha,cabeça',
  type: 'article',
  og: {
    image:
      'https://instagram.frec5-1.fna.fbcdn.net/v/t51.2885-15/275589808_1303287863502906_3511132225815790177_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.frec5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=fMGnqBli_YYAX9y82P7&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5MTAxNDgzODI0MDczMzc1OQ%3D%3D.2-ccb7-4&oh=00_AT-DjYW-rBmbcHRu2RdX_-WastcbJmC3vlRrk6Czj3kpdA&oe=6266B484&_nc_sid=30a2ef',
    url: 'https://www.instagram.com/shadllarossine/',
  },
  twitter: {
    type: 'summary',
    author: '@douglasffilho',
  },
};

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href="https://ivmc.com.br" />

        <meta name="author" content={seo.author} />
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content={seo.type} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:url" content={seo.og.url} />
        <meta property="og:image" content={seo.og.image} />
        {/* <meta property="og:image:type" content={seo.og.imageType} />
        <meta property="og:image:width" content={seo.og.width} />
        <meta property="og:image:height" content={seo.og.height} /> */}

        <meta name="twitter:card" content={seo.twitter.type} />
        <meta name="twitter:site" content={seo.twitter.author} />
        <meta name="twitter:creator" content={seo.twitter.author} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.og.image} />
      </Head>
      <Header>
        <Logo text="IVMC" title="Instituto Vozes da Minha Cabeça" />
        <div className="remove-843" />
        <div className="Icons container small">
          <Icon title="Página Inicial" link="/" icon="home" />

          <Icon
            title="Fale Comigo"
            link="https://wa.me/5581986778644?text=Olá, eu também ouço vozes..."
            openInNewTab="true"
            icon="chat"
          />

          <Icon
            title="Olha como me achar"
            link="https://www.instagram.com/shadllarossine/"
            openInNewTab="true"
            icon="explore"
          />

          <Icon
            title="Curte meu perfil aew"
            link="https://www.instagram.com/shadllarossine/"
            openInNewTab="true"
            icon="like"
          />

          <Icon
            title="E aew"
            link="https://www.instagram.com/shadllarossine/"
            openInNewTab="true"
          >
            <P fontSize={0.5}>E aew!</P>
          </Icon>
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <A
          linkTo="https://github.com/douglasffilho"
          openInNewTab={true}
          fontSize={0.5}
        >
          Developed by Douglas Filho
        </A>
      </Footer>
      <style jsx="true">{`
        .PageTemplate {
          padding: 0.5rem 1rem 0rem 1rem;
          max-width: 45rem;
          margin: auto;
        }

        .PageTemplate .Icons {
          grid-template-columns: repeat(auto-fit, 8.5%);
          height: 1rem;
        }
      `}</style>
    </div>
  );
};
