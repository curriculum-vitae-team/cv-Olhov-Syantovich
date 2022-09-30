import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

import { BreadcrumbsProps } from '@organisms/breadcrumbs/breadcrumbs.types';
import { LinkTo } from '@atoms/link-to/LinkTo';

export const Breadcrumb = ({ config = {} }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((e) => e);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {crumbs.map((crumb, index, array) => {
        const routeTo = crumbs.slice(0, index + 1).join('/');
        const configItem = config[crumb] || crumb;
        return array.length - index === 1 ? (
          <Typography key={crumb}> {configItem} /</Typography>
        ) : (
          <LinkTo key={crumb} to={routeTo}>
            {configItem}
          </LinkTo>
        );
      })}
    </Breadcrumbs>
  );
};
