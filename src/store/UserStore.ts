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
      setUser: action,
      setAvatar: action
    });
  }

  setToken(token?: string) {
    this.token$ = token;
  }

  setUser(user?: IUser) {
    this.user$ = user;
  }

  setAvatar(avatar?: string) {
    if (this.user$) {
      this.user$.profile.avatar = avatar;
      localStorage.setItem('user', JSON.stringify(this.user$));
    }
  }
}

export const userStore = new UserStore();
