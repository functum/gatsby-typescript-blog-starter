import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        header component will go in here
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
