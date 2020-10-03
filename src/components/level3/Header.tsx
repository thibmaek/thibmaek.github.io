import React from 'react';
import { PageHeader } from 'antd';

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return <PageHeader title={title} subTitle={description} />;
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
