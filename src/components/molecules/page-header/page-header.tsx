import { FC } from 'react';
import { AppBar, Typography } from '@mui/material';
import { PageHeaderProps } from '@molecules/page-header/page-header.types';

export const PageHeader: FC<PageHeaderProps> = ({ header, description }) => {
  return (
    <AppBar position="sticky" sx={{ top: 64, background: '#212121', boxShadow: 'none', zIndex: 1 }}>
      <Typography variant="h6">Breadcrumbs</Typography>
      <Typography variant="h3">{header}</Typography>
      <Typography variant="h6">{description}</Typography>
    </AppBar>
  );
};
