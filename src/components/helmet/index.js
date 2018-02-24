export { default as Helmet } from './Head';
export { default as PageHelmet } from './PageHead';
export { default as PostHelmet } from './PostHead';

export type TMetaContent = {
  content?: ?string,
  name?: ?string,
  [string]: string,
}

export type TMeta = Array<TMetaContent>
