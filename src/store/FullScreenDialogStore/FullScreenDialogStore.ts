import { action, makeObservable, observable } from 'mobx';
import { openDialogTypes } from '@store/FullScreenDialogStore/FullScreenDialogStore.types';

class FullScreenDialogStore {
  header?: string;
  isOpened$ = false;
  textOfSubmit$ = '';
  elementToRender?: JSX.Element;
  constructor() {
    makeObservable(this, {
      textOfSubmit$: observable,
      isOpened$: observable,
      openDialog: action,
      closeDialog: action
    });
  }
  openDialog({ element, textOfSubmit, header }: openDialogTypes) {
    this.isOpened$ = true;
    this.header = header;
    this.textOfSubmit$ = textOfSubmit;
    this.elementToRender = element;
  }
  closeDialog = () => {
    this.isOpened$ = false;
    this.elementToRender = undefined;
    this.textOfSubmit$ = '';
  };
}
export const DialogStore = new FullScreenDialogStore();
