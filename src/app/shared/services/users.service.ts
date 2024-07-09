import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { alluserdata } from '../consts/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getalluserdata: Array<Iusers> = alluserdata
  constructor() { }


  
  getalldata() {
    return this.getalluserdata
  }

  sendnewuser(newuser: Iusers) {
    this.getalluserdata.push(newuser)
  }


  singleobj(prodid: string) {
    return this.getalluserdata.find((res) => res.userId === prodid)!

  }
}
