import { makeAutoObservable, toJS } from 'mobx';

class AuthStore {
  isAuth = false;

  user = {};

  constructor() {
    makeAutoObservable(this);
  }

  get User() {
    return toJS(this.user);
  }

  setUser(user) {
    this.user = user;
  }

  setAuth(bool) {
    this.isAuth = bool;

    if (!bool) {
      this.setUser({});
      localStorage.removeItem('token');
    }
  }
}

export default new AuthStore();
