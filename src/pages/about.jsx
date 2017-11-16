import React from 'react';
import { object } from 'prop-types';

const About = ({ data }) => (
  <section>
    <article dangerouslySetInnerHTML={{
      __html: data.allContentfulPage.edges[0].node.body.childMarkdownRemark.html,
    }} />
  </section>
);

About.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query AboutPageQuery {
    allContentfulPage(filter: { title: { eq: "About" } }) {
      edges {
        node {
          title
          body { childMarkdownRemark { html } }
        }
      }
    }
  }
`;

export default About;
