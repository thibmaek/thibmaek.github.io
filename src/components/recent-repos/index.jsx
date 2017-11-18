import React, { Component } from 'react';

import Repo from './Repo';

import './index.css';

class RecentRepos extends Component {

  state = {
    repos: [],
  }

  async componentWillMount() {
    const repos = await fetch(`https://sindresorhus-gh-latest-repos-rdwtooeefg.now.sh/`).then(r => r.json());
    // TODO: Limit to amountOfRepos
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
