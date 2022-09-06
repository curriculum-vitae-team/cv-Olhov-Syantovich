import React, { FC, PropsWithChildren } from 'react';
import { DefaultText } from '@atoms/text-default/text-default.styles';

const TextDefault: FC<PropsWithChildren> = ({ children }) => {
  return <DefaultText>{children}</DefaultText>;
};

export default TextDefault;
