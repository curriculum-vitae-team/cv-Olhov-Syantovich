import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '@organisms/navbar';
import { boxSX } from '@templates/page-with-navbar/page-with-navbar.styles';

export const PageWithNavbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={boxSX}>
      <Navbar />
      {children}
    </Box>
  );
};
