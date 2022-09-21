import { makeAutoObservable } from 'mobx';
import { IToast, SeverityEnum } from './ToastsStore.type';

class ToastsStoreClass {
  freeId: number;
  toasts$: Array<IToast | undefined>;
  delay: number;

  constructor(delay: number) {
    this.delay = delay;
    this.freeId = 0;
    this.toasts$ = [];
    makeAutoObservable(this);
  }

  addToast(severity: SeverityEnum, message: string) {
    this.toasts$[this.freeId] = { severity, message, id: this.freeId };
    const id = this.freeId;
    setTimeout(() => this.closeId(id), this.delay);
    this.freeId++;
  }
  closeId(id: number) {
    console.log(id);
    this.toasts$[id] = undefined;
  }
}
export const ToastStore = new ToastsStoreClass(2000);
