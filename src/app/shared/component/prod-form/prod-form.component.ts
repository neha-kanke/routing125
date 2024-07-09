import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
  productform!: FormGroup
  prodid !:string
  prodobj !:Iproduct
  iseditmode :boolean=false
  constructor(private _uuid: UuidService, private _prodserveive: ProductsService, private _routes: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.createproductform()
    this.iseditandpatch()
  }


  onproductform() {
    if (this.productform.valid) {
      let newobj = { ...this.productform.value, pId: this._uuid.generateUUID() }
      this._prodserveive.sendnewobj(newobj)
      this.productform.reset()
      this._router.navigate(['products'])
    }
  }

  iseditandpatch(){
    this._routes.params
    .subscribe((res)=>{
      this.prodid=res['pro-id']
    })
    if(this.prodid){
      this.iseditmode=true
      this.prodobj=this._prodserveive.singleobj(this.prodid)
      this.productform.patchValue(this.prodobj)
    }
  }

  createproductform() {
    this.productform = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }
  onupdate(){
    if(this.productform.valid){
      let updateobj={...this.productform.value,pId:this.prodid}
      this._prodserveive.updateobj(updateobj)
      this.productform.reset()
      this._router.navigate(['products'])
    }
  }
}
