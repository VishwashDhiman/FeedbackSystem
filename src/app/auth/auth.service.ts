import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  admin =
  {
    id: 'AD123',
    password: 'password'
  }
  private class;
  private teacher;
  private name;
  public checkAdmin(id: any, pass: any) {
    if (id == this.admin.id && pass == this.admin.password) {
      return true;
    }
    else {
      return false;
    }

  }

  public setClass(Class: any) {
    this.class = Class;
  }

  public getClass() {
    return this.class;
  }

  public setTeacher(name)
  {
    this.teacher = name;
  }

  public getTeacher()
  {
    return this.teacher;
  }

  public setName(n)
  {
    this.name = n;
  }

  public getName()
  {
    return this.name;
  }
}
