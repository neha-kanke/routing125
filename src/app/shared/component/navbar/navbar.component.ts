import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authser:AuthService) { }

  ngOnInit(): void {
  }

  onlogin(){
    this._authser.Applogin()
    
  }
  onlogout(){
this._authser.Applogout()
  }
}
