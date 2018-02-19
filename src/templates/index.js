/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { object } from "prop-types";

import { RecentRepos } from "../components/recent-repos/";
import { Preview as PostPreview } from "../components/post/";
import { Pagination } from "../components/footer/";

const IndexPage = ({ pathContext: { index, group, ...ctx } }) => {
  const prevUrl = `${index - 1 === 1 ? `` : index - 1}`;
  const nextUrl = `${index + 1}`;

  return (<div>
    <RecentRepos />
    <section className='main-posts-list'>
      {group.map(({ node: post }) => (
        <PostPreview
          excerpt={post.body.childMarkdownRemark.excerpt}
          key={post.id}
          timeToRead={post.body.childMarkdownRemark.timeToRead}
          {...post}
        />
      ))}
    </section>
    <Pagination {...ctx} index={index} nextUrl={nextUrl} prevUrl={prevUrl} />
  </div>);
};

IndexPage.propTypes = {
  pathContext: object.isRequired,
};

export default IndexPage;
