import { action, makeObservable, observable } from 'mobx';
import { setPageInfoProps } from '@store/PageHeaderStore/PageHeaderStore.types';

class PageHeaderStoreClass {
  header$ = '';
  description$ = '';

  constructor() {
    makeObservable(this, { header$: observable, description$: observable, setPageInfo: action });
  }
  setPageInfo = ({ header, description }: setPageInfoProps) => {
    this.header$ = header;
    this.description$ = description;
  };
}
export const PageHeaderStore = new PageHeaderStoreClass();
