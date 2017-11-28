import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Repo from './Repo';

import styles from './index.module.css';

class RecentRepos extends Component {

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
      <section className={styles[`recent-repos`]}>
        {repos.map(repo => <Repo key={repo.name} {...repo} />)}
      </section>
    );
  }
}

export default RecentRepos;
