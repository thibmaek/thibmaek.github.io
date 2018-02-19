import React from 'react';
import { object } from 'prop-types';

import Helmet from '../components/helmet/page';

const Currents = ({ data }) => {
  const { title, description, list } = data.contentfulList;

  return (
    <section>
      <Helmet title={title} />
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

Currents.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query CurrentsPageQuery {
    contentfulList(slug: {eq: "currents"}) {
      description
      list
      title
    }
  }
`;


export default Currents;
