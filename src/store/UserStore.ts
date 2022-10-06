import { action, makeObservable, observable } from 'mobx';
import { IUser } from '@interfaces/IUser';
import { getFromLocalStorage } from '@utils/getFromLocalStorage';

class UserStore {
  user$?: IUser = getFromLocalStorage('user');
  token$?: string = getFromLocalStorage('token');
  constructor() {
    makeObservable(this, {
      user$: observable,
      token$: observable,
      setToken: action,
      setUser: action
    });
  }

  setToken(token?: string) {
    this.token$ = token;
    if (token === undefined) {
      localStorage.removeItem('token');
    }
  }

  setUser(user?: IUser) {
    this.user$ = user;
    if (user === undefined) {
      localStorage.removeItem('user');
    }
  }
}

export const userStore = new UserStore();
