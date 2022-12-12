import * as React from "react"
import "../../styles/reset.css";

type ChildrenProps = { 
  children: React.ReactNode
}

const Layout: React.FC<ChildrenProps> = ({
  children
}) => {
  return (
    <main>
      { children }
    </main>
  );
}

export default Layout;