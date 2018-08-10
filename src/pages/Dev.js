import React from 'react';

import { dependencies, devDependencies } from '../../package.json';
import { PageHelmet } from '../components/helmet/';

const getDependencies = () => [
  ...Object.keys(dependencies),
  ...Object.keys(devDependencies),
].sort();

const Dev = () => {
  return (
    <section>
      <PageHelmet title='Dev' />
      <header>
        <h1>Dev</h1>
        <p>This page shows the development stuff powering this website</p>
      </header>
      <article>
        <h2>The big stuff</h2>
        <p>
          Website source code publically available on <a href='github.com/thibmaek/thibmaek.github.io'>Github</a>.
          Content infrastructure provided by <a href='contentful.com'>Contentful</a>.
          Domain name &amp; hosting with <a href='netlify.com'>Netlify</a>.
        </p>
        <h2>Dependencies</h2>
        <ul>
          {getDependencies().map(dep => (
            <a href={`https://www.npmjs.com/package/${dep}`} key={dep}>
              <li>{dep}</li>
            </a>
          ))}
        </ul>
        <h2>Extras</h2>
        <p>
          Serverless cloud function (AWS Lambda) to post a new tweet for every new article published.
        </p>
      </article>
    </section>
  );
};

export default Dev;
