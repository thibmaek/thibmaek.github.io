export type TSiteSocial = {
  [string]: string,
  github: string,
  twitter: string,
}

export type TSiteMeta = {
  author: string,
  description: string,
  keywords: string,
  social: TSiteSocial,
  title: string,
}

export type TGatsbySite = {
  siteMetadata: TSiteMeta,
}
