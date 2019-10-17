import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import idx from 'idx';

import { Header, Footer } from './level3';

import 'antd/dist/antd.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = idx(data, _ => _.site.siteMetadata);

  return (
    <>
      <Header title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
