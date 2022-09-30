import { Box } from '@mui/material';
import { FC } from 'react';
import { Navbar } from '@organisms/navbar';
import { boxSX } from '@templates/page-with-navbar/page-with-navbar.styles';
import { Outlet } from 'react-router-dom';

export const PageWithNavbar: FC = () => {
  return (
    <Box sx={boxSX}>
      <Navbar />
      <Outlet />
    </Box>
  );
};
