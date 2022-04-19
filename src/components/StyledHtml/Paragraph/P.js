export const P = ({ children, fontSize = 1 }) => {
  return (
    <div>
      <p className="styled-p">{children}</p>
      <style jsx="true">{`
        .styled-p {
          font-size: ${fontSize}rem;
        }
      `}</style>
    </div>
  );
};
