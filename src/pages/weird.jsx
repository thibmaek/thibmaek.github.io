import React from 'react';
import { object } from 'prop-types';

const Currents = ({ data }) => (
  <section>
    <article>
      <h1>{data.contentfulList.title}</h1>
      <blockquote><p>{data.contentfulList.description}</p></blockquote>
      <ul>
        {data.contentfulList.list.map(i => <li key={i}>{i}</li>)}
      </ul>
    </article>
  </section>
);

Currents.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query WeirdPageQuery {
    contentfulList(title: { eq: "Weird" }) {
      description
      list
      title
    }
  }
`;

export default Currents;
