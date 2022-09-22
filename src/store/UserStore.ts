import { makeAutoObservable } from 'mobx';
import { IUser } from '@interfaces/IUser';
import { getFromLocalStorage } from '@utils/getFromLocalStorage';

class UserStore {
  user$: IUser | undefined = getFromLocalStorage('user');
  token$: string | undefined = getFromLocalStorage('token');

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setToken(token: string) {
    this.token$ = token;
  }

  setUser(user: IUser) {
    this.user$ = user;
  }
}

export const userStore = new UserStore();
