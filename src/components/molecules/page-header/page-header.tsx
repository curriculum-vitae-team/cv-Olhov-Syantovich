import { FC } from 'react';
import { AppBar, Typography, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Breadcrumb } from '@organisms/breadcrumbs/breadcrumbs';
import { PageHeaderStore } from '@store/PageHeaderStore/PageHeaderStore';
import { observer } from 'mobx-react-lite';

export const PageHeader: FC = observer(() => {
  return (
    <>
      <AppBar
        sx={{
          top: 44,
          right: 0,
          width: '100%',
          background: '#212121',
          boxShadow: 'none',
          zIndex: 1,
          padding: '30px 20px 0 40px'
        }}
      >
        <Breadcrumb config={{ employees: 'Employees' }} />
        <Typography variant="h3">{PageHeaderStore.header$}</Typography>
        <Typography variant="h6">{PageHeaderStore.description$}</Typography>
      </AppBar>
      <Container maxWidth="xl" sx={{ marginTop: '230px' }}>
        <Outlet />
      </Container>
    </>
  );
});
