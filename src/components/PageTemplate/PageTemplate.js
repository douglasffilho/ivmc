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
};

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Head>
        <title>{seo.title}</title>

        <meta name="author" content={seo.author} />
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content={seo.title} />
        {/* <meta property="og:url" content={seo.facebook.url} />
        <meta property="og:image" content={seo.facebook.image} />
        <meta property="og:image:type" content={seo.facebook.imageType} />
        <meta property="og:image:width" content={seo.facebook.width} />
        <meta property="og:image:height" content={seo.facebook.height} /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@FilhoEu" />
        <meta name="twitter:creator" content="@FilhoEu" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {/* <meta name="twitter:image" content={seo.facebook.image} /> */}
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
