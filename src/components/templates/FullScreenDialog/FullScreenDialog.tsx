import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Transition } from '@atoms/transition';
import { appBarSX, typographySX } from '@templates/FullScreenDialog/FullScreenDialog.styles';
import { DialogStore } from '@store/FullScreenDialogStore/FullScreenDialogStore';
import { observer } from 'mobx-react-lite';

export const FullScreenDialog = observer(() => {
  const InnerElement: React.ElementType | undefined = DialogStore.elementToRender;
  return (
    <>
      <Dialog
        fullScreen
        open={DialogStore.isOpened$}
        onClose={DialogStore.closeDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={appBarSX}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={DialogStore.closeDialog}>
              <CloseIcon />
            </IconButton>
            <Typography sx={typographySX} variant="h6">
              {DialogStore.header}
            </Typography>
            <Button autoFocus color="primary" type="submit" form="formInDialog">
              {DialogStore.isUpdate$ ? 'Update' : 'Create'}
            </Button>
          </Toolbar>
        </AppBar>
        {InnerElement && <InnerElement {...DialogStore.propsOfElement} />}
      </Dialog>
      <Outlet />
    </>
  );
});
