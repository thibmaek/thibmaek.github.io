import React from 'react';

import styles from './Reactions.module.css';

const Reactions = () => (
  <ul className={styles.container}>
    {[`❤`, `😛`, `🚨`, `👍`, `🙏`].map(r => (
      <li className={styles.reaction} key={r}>
        <button>
          {r}
        </button>
      </li>
    ))}
  </ul>
);

export default Reactions;
