import React from 'react';
import { object } from 'prop-types';

const About = ({ data }) => (
  <section>
    <article dangerouslySetInnerHTML={{
      __html: data.contentfulPage.body.childMarkdownRemark.html,
    }} />
  </section>
);

About.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query AboutPageQuery {
    contentfulPage(title: {eq: "About"}) {
      title
      body {
        childMarkdownRemark { html }
      }
    }
  }
`;

export default About;
