import { useLocation } from 'react-router-dom';
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material';

import { BreadcrumbsProps } from '@organisms/breadcrumbs/breadcrumbs.types';
import { LinkTo } from '@atoms/link-to';

export const Breadcrumbs = ({ config = {} }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((e) => e);
  return (
    <Breadcrumb aria-label="breadcrumb">
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
    </Breadcrumb>
  );
};
