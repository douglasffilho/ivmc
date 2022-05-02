import { PageTemplate } from 'components';
import Head from 'next/head';

import { A } from '@/components/StyledHtml';

const seo = {
  author: 'Douglas Filho',
  title: 'IVMC',
  canonical: 'https://ivmc.com.br',
  description:
    'Um lugar pra encontrar opinões fortemente embasadas e pautadas nas multiplas vozes geniais da minha cabecinha.',
  keywords:
    'IVMC,instituto vozes da minha cabeça,instituto,vozes,da,minha,cabeça',
  type: 'website',
  image:
    'https://instagram.frec5-1.fna.fbcdn.net/v/t51.2885-15/275589808_1303287863502906_3511132225815790177_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.frec5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=fMGnqBli_YYAX9y82P7&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5MTAxNDgzODI0MDczMzc1OQ%3D%3D.2-ccb7-4&oh=00_AT-DjYW-rBmbcHRu2RdX_-WastcbJmC3vlRrk6Czj3kpdA&oe=6266B484&_nc_sid=30a2ef',
  twitter: {
    type: 'summary_large_image',
    domain: 'ivmc.com.br',
    author: '@douglasffilho',
  },
};

const twitterPosts = [
  '1519136492362338304',
  '1521189172224090112',
  '1521190422076346368',
  '1521190489961209856',
];

const renderPostsHeader = () => {
  return (
    <div className="posts-header">
      <A linkTo="#posts">Posts</A>
      <A linkTo="https://twitter.com/i_v_m_c" openInNewTab="true">
        Ver mais
      </A>
      <style jsx="true">{`
        .posts-header {
          display: flex;
          justify-content: space-between;
          border-bottom: solid rgb(0, 0, 0, 0.15) 0.01rem;
        }
      `}</style>
    </div>
  );
};

const renderPost = (ref, idx) => {
  return (
    <div className="post" key={idx}>
      <blockquote className="twitter-tweet">
        <a
          href={`https://twitter.com/i_v_m_c/status/${ref}?ref_src=twsrc%5Etfw`}
        >
          Carregando...
        </a>
      </blockquote>
      <style jsx="true">{`
        .posts-title {
          border-bottom: solid rgb(0, 0, 0, 0.15) 0.01rem;
        }

        .post {
          background: #fff;
          border: 0;
          border-radius: 3px;
          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5) 0 1px 10px 0
            rgba(0, 0, 0, 0.15);
          margin: 0.5rem;
          max-width: 12rem;
          min-width: 12rem;
          width: 12rem;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  return (
    <PageTemplate>
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href={seo.canonical} />

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
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:card" content={seo.twitter.type} />
        <meta property="twitter:domain" content={seo.twitter.domain} />
        <meta property="twitter:url" content={seo.canonical} />
        <meta name="twitter:site" content={seo.twitter.author} />
        <meta name="twitter:creator" content={seo.twitter.author} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>
      <h1>{seo.description}</h1>
      <br />
      <br />
      <br />
      {renderPostsHeader()}
      <br />
      <div className="posts">
        {twitterPosts.map(renderPost)}
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <style jsx="true">{`
        .posts {
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          justify-content: space-between;
          overflow: hidden;
        }
      `}</style>
    </PageTemplate>
  );
};

export default Home;
