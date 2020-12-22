import React, { FC } from "react"
import { Link } from "gatsby"

interface Props {
  location: any;
  title: any;
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ location, title, children }) => {
  console.log(location);

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
  )
}

export default Layout
