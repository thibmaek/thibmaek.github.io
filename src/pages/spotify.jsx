import React from 'react';

import Helmet from '../components/helmet/page';

const styles = {
  playlist: {
    display: `flex`,
    justifyContent: `space-around`,
    alignItems: `flex-start`,
    height: `100%`,
    marginBottom: `4rem`,
  },
  container: {
    width: `100%`,
  },
  title: {
    textAlign: `center`,
    marginBottom: `2rem`,
  },
  playlists: {
    display: `flex`,
    flexDirection: `column`,
  },
  iframe: {
    width: `60%`,
    height: `18rem`,
  },
};

const PLAYLISTS = [
  {
    id: `aperitief`,
    image: `https://pl.scdn.co/images/pl/default/77ab29f193715b43d3c664d624cb3375fcb1e6e3`,
    name: `🥂 Diner | Feestje | Aperitief`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/5HDQmC0jdxsu5XeVuQzvwy`,
  },
  {
    id: `world`,
    image: `https://pl.scdn.co/images/pl/default/136858c6083ce422e86864abc4d73cbf40f00efa`,
    name: `🌍 World`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/0S3ijUMYfcTbPkTUjHGF4v`,
  },
  {
    id: `neon`,
    image: `https://pl.scdn.co/images/pl/default/136858c6083ce422e86864abc4d73cbf40f00efa`,
    name: `💎 Neon`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/4DuiX3HXjFVXBHVNxajhYy`,
  },
  {
    id: `fall`,
    image: `https://pl.scdn.co/images/pl/default/8ce0c5a02f11b2f65bdaa5baa43eeafcb8d37a4d`,
    name: `🍁 Fall`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/2Ui8wlScpXhXAF9Ou4qlLK`,
  },
  {
    id: `big_from_belgium`,
    image: `https://pl.scdn.co/images/pl/default/fbc308b0a0af4ab814b93dafe9e6e1fc1f6c721c`,
    name: `🇧🇪 Big from Belgium`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/3GNcIkMbPXDXdlDUYbLvwV`,
  },
];

const Spotify = () => (
  <section>
    <Helmet title='🔊 Spotify' />
    <header>
      <h1>Spotify</h1>
    </header>
    <article style={styles.playlists}>
      {PLAYLISTS.sort((a, b) => a.id > b.id).map(({ name, image, url }) => (
        <div key={name} style={styles.container}>
          <h2 style={styles.title}>{name}</h2>
          <div style={styles.playlist}>
            <img src={image} />
            <iframe style={styles.iframe} src={url} frameBorder='0' allowTransparency='true'></iframe>
          </div>
        </div>
      ))}
    </article>
  </section>
);

export default Spotify;
