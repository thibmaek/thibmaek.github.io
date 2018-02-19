import React from 'react';

import { PageHelmet } from '../components/helmet/';

import './styles/spotify.css';

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
].sort((a, b) => a.id > b.id);

const Spotify = () => (
  <section>
    <PageHelmet title='🔊 Spotify' />
    <header>
      <h1>Spotify</h1>
    </header>
    <article className='playlist-list'>
      {PLAYLISTS.map(({ name, image, url }) => (
        <div className='row-container' key={name}>
          <h2>{name}</h2>
          <div className='playlist-item'>
            <img src={image} />
            <iframe allowTransparency='true' className='spotify-embed' frameBorder='0' src={url} />
          </div>
        </div>
      ))}
    </article>
  </section>
);

export default Spotify;
