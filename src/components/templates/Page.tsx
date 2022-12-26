import * as React from "react";
import { Helmet } from "react-helmet";

import "../../styles/reset.css";
import "../../styles/index.css";

import Header from "../Header";

type ChildrenProps = {
  children: React.ReactNode
}

const LayoutHeader: React.FC<any> = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="prefetch"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800;900&family=Source+Code+Pro:ital,wght@0,900;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;