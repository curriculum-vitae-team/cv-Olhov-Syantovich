import { Box } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { Navbar } from '@organisms/navbar';

export const PageWithNavbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};
