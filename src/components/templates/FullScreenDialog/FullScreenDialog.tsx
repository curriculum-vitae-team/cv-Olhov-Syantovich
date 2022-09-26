import React, { FC, PropsWithChildren } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Transition } from '@atoms/transition';
import { FullScreenDialogProps } from '@templates/FullScreenDialog/FullScreenDialog.types';
import { appBarSX, typographySX } from '@templates/FullScreenDialog/FullScreenDialog.styles';
import { useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '@api/user/mutations';

export const FullScreenDialog: FC<PropsWithChildren<FullScreenDialogProps>> = ({
  dialogOpen,
  closeDialog,
  isUpdate,
  header,
  children
}) => {
  const useForm_ = useForm({
    defaultValues: {
      profile: { last_name: '', first_name: '', skills: [] },
      position_name: '',
      department_name: ''
    }
  });
  const { handleSubmit } = useForm_;
  const [updateUser, { data, error, loading }] = useMutation(UPDATE_USER);
  return (
    <FormProvider {...useForm_}>
      <Dialog fullScreen open={dialogOpen} onClose={closeDialog} TransitionComponent={Transition}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <AppBar sx={appBarSX}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={closeDialog}>
                <CloseIcon />
              </IconButton>
              <Typography sx={typographySX} variant="h6">
                {header}
              </Typography>
              <Button autoFocus color="primary" type="submit">
                {isUpdate ? 'Update' : 'Create'}
              </Button>
            </Toolbar>
          </AppBar>
          {children}
        </form>
      </Dialog>
    </FormProvider>
  );
};
