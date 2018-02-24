import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Repo } from './';

import './index.css';

type State = {
  repos: Array<{
    name: string,
    description?: string,
    primaryLanguage?: {
      name: string,
    },
    url: string,
  }>
}

class RecentRepos extends Component<*, State> {

  state = {
    repos: [],
  }

  async componentWillMount() {
    const repos = await fetch(process.env.GATSBY_RECENT_REPOS_URL).then(r => r.json());
    this.setState({ repos: repos.reverse() });
  }

  render() {
    const { repos } = this.state;

    return (
      <section className='recent-repos'>
        {repos.map(repo => <Repo key={repo.name} {...repo} />)}
      </section>
    );
  }
}

export default RecentRepos;
