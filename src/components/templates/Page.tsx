import * as React from "react"
import "../../styles/reset.css";
import "../../styles/index.css"; 

import { Helmet } from "react-helmet";

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800;900&family=Source+Code+Pro:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

const Layout: React.FC<ChildrenProps> = ({
  children
}) => {
  return (
    <>
      <LayoutHeader />
      <main>
        { children }
      </main>
    </>
  );
}

export default Layout;