import React from 'react';
import { object } from 'prop-types';

const Currents = ({ data }) => (
  <section>
    <article>
      <h1>{data.allContentfulList.edges[0].node.title}</h1>
      <blockquote>{data.allContentfulList.edges[0].node.description}</blockquote>
      <ul>
        {data.allContentfulList.edges[0].node.list.map(i => <li key={i}>{i}</li>)}
      </ul>
    </article>
  </section>
);

Currents.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query WeirdPageQuery {
    allContentfulList(filter: { title: { eq: "Weird" } }) {
      edges {
        node {
          title
          description
          list
        }
      }
    }
  }
`;

export default Currents;
