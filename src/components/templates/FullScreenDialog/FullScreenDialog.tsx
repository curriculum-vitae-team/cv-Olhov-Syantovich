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

export const FullScreenDialog: FC<PropsWithChildren<FullScreenDialogProps>> = ({
  dialogOpen,
  closeDialog,
  isUpdate,
  header,
  children
}) => {
  return (
    <Dialog fullScreen open={dialogOpen} onClose={closeDialog} TransitionComponent={Transition}>
      <form>
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
  );
};
