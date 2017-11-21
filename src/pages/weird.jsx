import React from 'react';
import { object } from 'prop-types';

const Weird = ({ data }) => {
  const { title, list, description } = data.contentfulList;

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <article>
        <blockquote><p>{description}</p></blockquote>
        <ul>
          {list.map(i => <li key={i}>{i}</li>)}
        </ul>
      </article>
    </section>
  );
};

Weird.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query WeirdPageQuery {
    contentfulList(slug: { eq: "weird" }) {
      description
      list
      title
    }
  }
`;

export default Weird;
