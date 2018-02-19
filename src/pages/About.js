import React from 'react';
import { object } from 'prop-types';

import { PageHelmet } from '../components/helmet/';

const About = ({ data }) => {
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

About.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query AboutPageQuery {
    contentfulPage(slug: {eq: "about"}) {
      title
      body {
        childMarkdownRemark { html }
      }
    }
  }
`;

export default About;
