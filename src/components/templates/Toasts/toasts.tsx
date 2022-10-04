import { Suspense } from 'react';
import { Stack, Alert } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ToastStore } from '@store/toastStore/ToastsStore';
import { Loader } from '@atoms/loader';
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
              <Alert
                key={toast.id}
                severity={toast.severity}
                sx={AlertStyleSX}
                elevation={6}
                variant="filled"
                onClose={handleClose(toast.id)}
              >
                {toast.message}
              </Alert>
            )
        )}
      </Stack>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
});
