import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { alluserdata } from '../consts/users';
import { Allrpodcutsarr } from '../consts/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productarr:Array<Iproduct>=Allrpodcutsarr
  constructor() { }

  getallproduct(){
    return this.productarr
  }

  sendnewobj(newprod:Iproduct){
    this.productarr.push(newprod)
  }

  singleobj(proid:string){
  return  this.productarr.find((res)=>res.pId===proid)!

  }

  updateobj(update:Iproduct){
   let getindex=this.productarr.findIndex((res)=>res.pId==update.pId)
    this.productarr[getindex].pName=update.pName
    this.productarr[getindex].pStatus=update.pStatus
  }
}
