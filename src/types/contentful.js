// @flow
export type TContentfulEdges = {
  edges: Array<{
    node: TContentfulNode,
  }>
}

export type TContentfulNode = {
  slug: string,
  title: string,
  date?: Date | string,
  tags?: Array<string>,
  body?: TContentfulBody,
  list?: TContentfulList,
}

export type TContentfulBody = {
  childMarkdownRemark: {
    html: string,
    timeToRead: number,
  }
}

export type TContentfulList = {
  list: Array<string>,
}
