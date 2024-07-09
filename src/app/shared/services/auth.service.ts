import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginstate:boolean=false
  constructor(private _router:Router) {
    console.log(this.loginstate);
    
   }


   isAuthcated(){
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
          resolve(this.loginstate)
      },1000);
      
    })
   }

  Applogin(){
    this.loginstate=true
    console.log('successfully login',this.loginstate);
  }
  Applogout(){
    this.loginstate=false
    console.log('successfully logout',this.loginstate);
    this._router.navigate(['/home'])
    
  }
}
