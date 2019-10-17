import React from 'react';
import { Card as CardComponent } from 'antd';
import { CardProps } from 'antd/lib/card';

const Post = ({ children, title }: CardProps) => (
  <CardComponent title={title}>{children}</CardComponent>
);

export default Post;
