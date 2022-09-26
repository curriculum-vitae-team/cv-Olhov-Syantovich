import { ElementType } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { openDialogTypes } from '@store/FullScreenDialogStore/FullScreenDialogStore.types';

class FullScreenDialogStore {
  header?: string;
  isOpened$ = false;
  isUpdate$ = false;
  elementToRender?: ElementType;
  defaultValuesForm: object = {};
  propsOfElement: object = {};
  constructor() {
    makeObservable(this, {
      isUpdate$: observable,
      isOpened$: observable,
      elementToRender: observable,
      propsOfElement: observable,
      openDialog: action,
      closeDialog: action
    });
  }
  openDialog({ defaultValuesForm, element, propsOfElement, isUpdate, header }: openDialogTypes) {
    this.isOpened$ = true;
    this.header = header;
    this.defaultValuesForm = defaultValuesForm;
    this.isUpdate$ = isUpdate;
    this.elementToRender = element;
    this.propsOfElement = propsOfElement;
  }
  closeDialog = () => {
    this.defaultValuesForm = {};
    this.isOpened$ = false;
    this.elementToRender = undefined;
    this.propsOfElement = {};
  };
}
export const DialogStore = new FullScreenDialogStore();
