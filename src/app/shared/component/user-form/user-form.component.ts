import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../../services/uuid.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  iseditmode: boolean = false
  userform !: FormGroup
  userid !: string
  userproj !: Iusers

  constructor(private _uuid: UuidService, private _userservice: UsersService, private _routes: ActivatedRoute, private _Router: Router) { }

  ngOnInit(): void {
    this.createuserform()
  }



  createuserform() {
    this.userform = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })
  }

  onuserform() {
    if (this.userform.valid) {
      let newuser = { ...this.userform.value, userId: this._uuid.generateUUID() }
      this._userservice.sendnewuser(newuser)
      this.userform.reset()
      this._Router.navigate(['users'])
    }

  }

  iseditandpatch() {
    this._routes.params
      .subscribe(res => {
        this.userid = res['userid']
      })



      
    if(this.userid) {
      this.iseditmode = true
      this.userproj = this._userservice.singleobj(this.userid)
      this.userform.patchValue(this.userproj)
    }


  }

  onupdateuser() {

  }


}
