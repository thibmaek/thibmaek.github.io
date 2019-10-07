import React from 'react';
import { Card as CardComponent } from 'antd';
import { CardProps } from 'antd/lib/card';

interface Props extends CardProps {}

const Card = ({ children }: Props) => <CardComponent>{children}</CardComponent>;

export default Card;
