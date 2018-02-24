import React from 'react';
import { TContentfulNode } from '../types';

import { PageHelmet } from '../components/helmet/';

type Props = {
  data: {
    contentfulPage: TContentfulNode,
  }
}

const Publications = ({ data }: Props) => {
  const { title, body } = data.contentfulPage;

  return (
    <section>
      <PageHelmet title={title} />
      <header>
        <h1>{title}</h1>
      </header>
      <article dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
    </section>
  );
};

export const query = graphql`
  query PublicationsPageQuery {
    contentfulPage(slug: { eq: "publications" }) {
      title
      body { childMarkdownRemark { html } }
    }
  }
`;

export default Publications;
