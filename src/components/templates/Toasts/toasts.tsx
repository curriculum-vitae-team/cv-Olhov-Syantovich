import React, { Suspense } from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ToastStore } from '../../../store/toastStore/ToastsStore';
import { Loader } from '@atoms/loader/loader';
import { AlertStyleSX, StackStyleSX } from '@templates/Toasts/toast.style';

export const CustomizedToast = observer(() => {
  const handleClose = (id: number) => () => {
    ToastStore.closeId(id);
  };
  return (
    <>
      <Stack
        spacing={2}
        direction="column-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={StackStyleSX}
      >
        {ToastStore.toasts$.map(
          (toast) =>
            toast && (
              <MuiAlert
                key={toast.id}
                severity={toast.severity}
                sx={AlertStyleSX}
                elevation={6}
                variant="filled"
                onClose={handleClose(toast.id)}
              >
                {toast.message}
              </MuiAlert>
            )
        )}
      </Stack>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
});
