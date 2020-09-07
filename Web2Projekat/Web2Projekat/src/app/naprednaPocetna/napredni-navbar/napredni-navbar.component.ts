import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import {JwtHelperService} from '@auth0/angular-jwt';
import { tipovi} from 'src/app/entiteti/enumeracija';

@Component({
  selector: 'app-napredni-navbar',
  templateUrl: './napredni-navbar.component.html',
  styleUrls: ['./napredni-navbar.component.css']
})
export class NapredniNavbarComponent implements OnInit {

  constructor(private route: Router,public OAuth: AuthService) { }

  user:any = tipovi.neregular;

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    var decodeToken = helper.decodeToken(token);
    if(token != null)
    {
      console.log(decodeToken.role);
      if(decodeToken.role === "main_admin"){this.user = tipovi.main;}
      else if(decodeToken.role === "avio_admin"){this.user = tipovi.avio;}
      else if(decodeToken.role === "car_admin"){ this.user = tipovi.rent;}
      else if(decodeToken.role === "regular_user"){ this.user = tipovi.regular;}
      else{this.user = tipovi.neregular;}
    }
  }
  unklik():void{
    this.route.navigate(['']);
    this.OAuth.signOut(true).then().catch(error => console.log(error));
    localStorage.removeItem("token");
    return;
  }

}
