import { makeObservable, observable, action } from 'mobx';
import { IToast, SeverityEnum } from './ToastsStore.type';

class ToastsStoreClass {
  freeId: number;
  toasts$: Array<IToast | undefined>;
  delay: number;

  constructor(delay: number) {
    this.delay = delay;
    this.freeId = 0;
    this.toasts$ = [];
    makeObservable(this, { toasts$: observable, addToast: action, closeId: action });
  }

  addToast(severity: SeverityEnum, message: string) {
    this.toasts$[this.freeId] = { severity, message, id: this.freeId };
    const id = this.freeId;
    setTimeout(() => this.closeId(id), this.delay);
    this.freeId++;
  }
  closeId(id: number) {
    this.toasts$[id] = undefined;
  }
}
export const ToastStore = new ToastsStoreClass(2000);
