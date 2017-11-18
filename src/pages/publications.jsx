import React from 'react';
import { object } from 'prop-types';

const Publications = ({ data }) => (
  <section>
    <article dangerouslySetInnerHTML={{
      __html: data.allContentfulPage.edges[0].node.body.childMarkdownRemark.html,
    }} />
  </section>
);

Publications.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query PublicationsPageQuery {
    allContentfulPage(filter: { title: { eq: "Publications" } }) {
      edges {
        node {
          title
          body { childMarkdownRemark { html } }
        }
      }
    }
  }
`;

export default Publications;
