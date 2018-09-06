import React from "react";
import { shape, string, object } from 'prop-types';

import { PageHelmet } from "../components/helmet/";

import styles from "./Spotify.module.css";

const Spotify = ({ data: { allContentfulSpotifyPlaylist: playlists } }) => (
  <section>
    <PageHelmet title='🔊 Spotify' />
    <header>
      <h1>Spotify</h1>
    </header>
    <article className={styles.playlistItems}>
      {playlists.edges
        .sort(({ node: node1 }, { node: node2 }) => {
          const dateA = new Date(node1.createdAt).valueOf();
          const dateB = new Date(node2.createdAt).valueOf();
          return dateA < dateB;
        })
        .map(({ node: { playlistTitle, playlistImageLocal, playlistUrl, playlistDescription } }) => (
          <div className={styles.playlistItemContainer} key={playlistTitle}>
            <h2>{playlistTitle}</h2>
            {playlistDescription && <p className={styles.playlistDescription}>{playlistDescription}</p>}
            <div className={styles.playlistItem}>
              <img alt='Spotify Cover' className={styles.playlistImage} src={playlistImageLocal.file.url} />
              <iframe
                allowTransparency='true'
                className={styles.spotifyEmbed}
                frameBorder='0'
                src={playlistUrl}
                title={playlistTitle}
              />
            </div>
          </div>
        ))
      }
    </article>
  </section>
);

Spotify.propTypes = {
  data: shape({
    allContentfulSpotifyPlaylist: shape({
      edges: shape({
        node: shape({
          createdAt: string,
          playlistUrl: string,
          playlistTitle: string,
          playlistDescription: string,
          playlistImageLocal: shape({
            file: object,
          }),
        }),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query SpotifyPlaylistsQuery {
    allContentfulSpotifyPlaylist {
      edges {
        node {
          createdAt
          playlistUrl
          playlistTitle
          playlistDescription
          playlistImageLocal {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default Spotify;
