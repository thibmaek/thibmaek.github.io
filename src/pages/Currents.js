import React from 'react';
import { TContentfulNode } from '../types/';

import { PageHelmet } from '../components/helmet/';

type Props = {
  data: {
    contentfulList: TContentfulNode,
  }
}

const Currents = ({ data }: Props) => {
  const { title, description, list } = data.contentfulList;

  return (
    <section>
      <PageHelmet title={title} />
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
