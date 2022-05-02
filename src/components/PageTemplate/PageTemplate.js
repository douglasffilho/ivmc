import { Footer, Header, Icon, Logo } from 'components';

import { A } from '../StyledHtml';

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
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
            link="https://www.twitter.com/i_v_m_c"
            openInNewTab="true"
            icon="explore"
          />

          <Icon
            title="Curte meu perfil aew"
            link="https://www.instagram.com/shadllarossine/"
            openInNewTab="true"
            icon="like"
          />
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <A
          linkTo="https://github.com/douglasffilho"
          openInNewTab={true}
          fontSize={0.5}
        >
          Desenvolvido por Douglas Filho
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
