import React from 'react';
import { object } from 'prop-types';

const Publications = ({ data }) => (
  <section>
    <article dangerouslySetInnerHTML={{
      __html: data.contentfulPage.body.childMarkdownRemark.html,
    }} />
  </section>
);

Publications.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query PublicationsPageQuery {
    contentfulPage(title: { eq: "Publications" }) {
      title
      body { childMarkdownRemark { html } }
    }
  }
`;

export default Publications;
