import React, { FC, PropsWithChildren } from 'react';
import { Title } from '@atoms/text-title/text-title.styles';

const TextTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TextTitle;
