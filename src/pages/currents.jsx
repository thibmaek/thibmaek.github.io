import React from 'react';
import { object } from 'prop-types';

import '../queries/page-currents';

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

export default Currents;
