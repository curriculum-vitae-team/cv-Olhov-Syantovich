import React, { Suspense } from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import toastStore from '../../../store/toastStore/ToastsStore';
import { Snackbar } from '@mui/material';
import { Loader } from '@atoms/loader/loader';

export const CustomizedToast = observer(() => {
  const handleClose = (id: number) => () => {
    toastStore.closeId(id);
  };
  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={!!toastStore.toast}
          autoHideDuration={6000}
          sx={{ width: '100%' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {toastStore.toast && (
            <MuiAlert
              severity={toastStore.toast.severity}
              sx={{ width: '30%' }}
              elevation={6}
              variant="filled"
              onClose={handleClose(toastStore.toast.id)}
            >
              {toastStore.toast.message}
            </MuiAlert>
          )}
        </Snackbar>
      </Stack>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
});
