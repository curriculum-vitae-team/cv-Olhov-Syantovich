import { makeAutoObservable } from 'mobx';
import { IToast, SeverityEnum } from './ToastsStore.type';

class ToastsStore {
  freeId: number;
  toast?: IToast;
  delay: number;

  constructor(delay: number) {
    this.delay = delay;
    this.freeId = 1;
    makeAutoObservable(this);
  }

  addToast(severity: SeverityEnum, message: string) {
    this.toast = { severity, message, id: this.freeId };
    this.freeId++;
    setTimeout(() => this.closeId(this.freeId), this.delay);
  }
  closeId(id: number) {
    console.log('close', this.toast && this.toast.id === id ? undefined : this.toast);
    this.toast = this.toast && this.toast.id === id ? undefined : this.toast;
  }
}
export default new ToastsStore(2000);
