import { Outlet } from 'react-router-dom';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Transition } from '@atoms/transition';
import { appBarSX, typographySX } from '@templates/FullScreenDialog/FullScreenDialog.styles';
import { DialogStore } from '@store/FullScreenDialogStore/FullScreenDialogStore';
import { observer } from 'mobx-react-lite';

export const FullScreenDialog = observer(() => {
  const InnerElement: JSX.Element | undefined = DialogStore.elementToRender;
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
              <Close />
            </IconButton>
            <Typography sx={typographySX} variant="h6">
              {DialogStore.header}
            </Typography>
            {DialogStore.textOfSubmit$ && (
              <Button autoFocus color="primary" type="submit" form="formInDialog">
                {DialogStore.textOfSubmit$}
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {InnerElement}
      </Dialog>
      <Outlet />
    </>
  );
});
