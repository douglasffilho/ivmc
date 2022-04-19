export const A = ({
  children,
  linkTo = '#',
  fontSize = 1,
  openInNewTab = false,
}) => {
  return (
    <div>
      <a
        className="styled-a"
        href={linkTo}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {children}
      </a>
      <style jsx="true">{`
        .styled-a {
          font-size: ${fontSize}rem;
        }
      `}</style>
    </div>
  );
};
