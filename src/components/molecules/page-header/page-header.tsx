import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { PageHeaderProps } from '@molecules/page-header/page-header.types';
import { boxSX } from '@molecules/page-header/page-header.styles';

export const PageHeader: FC<PageHeaderProps> = ({ header, description }) => {
  return (
    <Box sx={boxSX}>
      <Typography variant="h6">Breadcrumbs</Typography>
      <Typography variant="h3">{header}</Typography>
      <Typography variant="h6">{description}</Typography>
    </Box>
  );
};
