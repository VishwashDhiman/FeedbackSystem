import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  constructor() { }

  private admin = {
    'id' : 12345,
    'password' : 'admin12'
  };

  public check(data)
  {
      if(data.id == this.admin.id && data.password == this.admin.password)
        return true;
      else
        return false;
  } 
}
