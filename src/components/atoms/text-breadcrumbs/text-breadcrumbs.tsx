import React, { FC, PropsWithChildren } from 'react';
import { BreadcrumbsText } from '@atoms/text-breadcrumbs/text-breadcrumbs.styles';

const TextBreadcrumbs: FC<PropsWithChildren> = ({ children }) => {
  return <BreadcrumbsText>{children}</BreadcrumbsText>;
};

export default TextBreadcrumbs;
