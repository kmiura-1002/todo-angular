import { Injectable } from '@angular/core';
import { User } from './login/user';

@Injectable()
export class AuthService {

  private isLogin: boolean;
  private user: User;

  constructor() {
    this.isLogin = false;
    this.user = null;
  }

  public signIn(id: string, pass: string): boolean {
    this.user = {
      id: '',
      name: ''
    };
    this.user.id = id;
    this.isLogin = true;
    const jwt = 'jsonWebToken';
    localStorage.setItem('jwt', jwt);
    return true;
  }

  public signOut(): void {
    localStorage.removeItem('jwt');
    this.isLogin = false;
    this.user = null;
  }

  get userData() {
    return this.user;
  }

  get isLoggedIn() {
    return localStorage.getItem('jwt') !== null;
  }

  get isSuperAdmin() {
    return true;
  }
}
