import { makeAutoObservable } from 'mobx';
import { IUser } from '@interfaces/IUser';
import { getFromLocalStorage } from '@utils/getFromLocalStorage';

class User {
  user: IUser | undefined = getFromLocalStorage('user');
  token: string | undefined = getFromLocalStorage('token');

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setToken(token: string) {
    this.token = token;
  }

  setUser(user: IUser) {
    this.user = user;
  }
}

const user = new User();

export default user;
