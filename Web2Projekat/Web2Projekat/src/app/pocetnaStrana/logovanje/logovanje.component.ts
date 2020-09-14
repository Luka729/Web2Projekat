import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule, AuthService, FacebookLoginProvider } from 'angularx-social-login';

import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})

@Injectable()

export class LogovanjeComponent implements OnInit {

  loginForm = {
    UserName: '',
    Password: ''
  }


  socialProvider = "google";
  constructor(private service: UserService, private router: Router, private toastr: ToastrService,
    public OAuth: AuthService,
    private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/profil-korisnika' + this.loginForm.UserName);
  }

  LoginWithGoogle() {
    let socialPlatformProvider;
    if (this.socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (this.socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialusers);

      this.service.externalLogin(socialusers).subscribe((res: any) => {
        console.log("RADI PREKO GUGLA");
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/profil-korisnika/' + socialusers.firstName);

      },
        err => {
          console.log("Ne radi preko gugla")
          console.log(err);

        });

      console.log(socialusers);
    });

  }

  onSubmit(form: NgForm) {
    console.log("Uslo u submit")
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        if (this.loginForm.UserName.indexOf("AvioAdmin") !== -1) {
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(res.token);
          if(decodedToken.FirstLogin === "True"){
            var tenure = prompt("Prvo logovanje, molimo unesite novu sifru:","");
            var body= {
              IdToken: decodedToken.UserID,
              Password: tenure
            }
          
              this.service.promenaSifrePrvoLogovanje(body).subscribe((res: any)=>{
                if(res.succeded){
                  alert('Changing password sucesffully');
                  console.log(body);
                  this.router.navigateByUrl('/profil-avio-admin/' + this.loginForm.UserName);

                }
              },
              err =>{
                alert('username or password is incorrect');
              })
            }
            this.router.navigateByUrl('/profil-avio-admin/' + this.loginForm.UserName);

          }
        
        else if (this.loginForm.UserName.indexOf("CarAdmin") !== -1) {
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(res.token);
          if(decodedToken.FirstLogin === "True"){
            var tenure = prompt("Prvo logovanje, molimo unesite novu sifru:","");
            var body= {
              IdToken: decodedToken.UserID,
              Password: tenure
            }
          
              this.service.promenaSifrePrvoLogovanje(body).subscribe((res: any)=>{
                if(res.succeded){
                  alert('Changing password sucesffully');
                  console.log(body);
                  this.router.navigateByUrl('/profil-car-admin/' + this.loginForm.UserName);
                }
              },
              err =>{
                alert('username or password is incorrect');
              })
            }
            this.router.navigateByUrl('/profil-car-admin/' + this.loginForm.UserName);
          }
         
      
        
        else if (this.loginForm.UserName.indexOf("MainAdmin") !== -1) {
          
          this.router.navigateByUrl('/profil-main-admin/' + this.loginForm.UserName);
        }
        else if(this.loginForm.UserName.indexOf("Admin") === -1) {
         
          this.router.navigateByUrl('/profil-korisnika/' + this.loginForm.UserName);
        }
        else{
          
        }
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}




