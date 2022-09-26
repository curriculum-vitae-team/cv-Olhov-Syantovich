import { action, makeObservable, observable } from 'mobx';
import { IUser } from '@interfaces/IUser';
import { getFromLocalStorage } from '@utils/getFromLocalStorage';

class UserStore {
  user$: IUser | undefined = getFromLocalStorage('user');
  token$: string | undefined = getFromLocalStorage('token');
  constructor() {
    makeObservable(this, {
      user$: observable,
      token$: observable,
      setToken: action,
      setUser: action
    });
  }

  setToken(token: string) {
    this.token$ = token;
  }

  setUser(user: IUser) {
    this.user$ = user;
  }
}

export const userStore = new UserStore();
