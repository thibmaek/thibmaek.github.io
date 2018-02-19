import React from 'react';
import { object } from 'prop-types';

import { PageHelmet } from '../components/helmet/';

const Publications = ({ data }) => {
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

Publications.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query UsesPageQuery {
    contentfulPage(slug: { eq: "uses" }) {
      title
      body { childMarkdownRemark { html } }
    }
  }
`;

export default Publications;
