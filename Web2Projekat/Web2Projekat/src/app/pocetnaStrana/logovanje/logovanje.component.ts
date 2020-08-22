import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceConfig,GoogleLoginProvider,SocialLoginModule, AuthService, FacebookLoginProvider} from 'angularx-social-login';

import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  loginForm: FormGroup;
  readonly BaseURI ='http://localhost:58544/api';

  ngOnInit(): void {
    this.initForm();
  }
  constructor( private router: Router,private http:HttpClient,
    public OAuth: AuthService,private route: ActivatedRoute,private fb: FormBuilder) { }

  private initForm() {
    this.loginForm= this.fb.group({
      'userNameProvera': new FormControl('', [Validators.required,Validators.minLength(6)]),
      'lozinkaProvera': new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }

  socialProvider = "google";



  LoginWithGoogle(){
    let socialPlatformProvider;  
    if (this.socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (this.socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialusers);   

      this.externalLogin(socialusers).subscribe((res:any)=>{
        console.log("RADI PREKO GUGLA");
        localStorage.setItem('token', res.token);
        document.getElementById("labelaSaGreskom").innerHTML = "";
        this.router.navigateByUrl('/profil-korisnika');

      },
      err => {
        console.log("Ne radi preko gugla")
        console.log(err);
        document.getElementById("labelaSaGreskom").innerHTML = "Neuspesno logovanje, probajte opet";

    });
   
      console.log(socialusers);  
    });  

  }

  externalLogin(loginForm){
    return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/DrustveneMrezeLogin',loginForm);
  }

  login() {
    var body = { 
      Lozinka: this.loginForm.value.lozinkaProvera,
      UserName: this.loginForm.value.userNameProvera,
  
      };
    return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/Logovanje',body);
  }

  onSubmit() {
    console.log("Uslo u submit")
    this.login().subscribe(
      (res: any) => {
        console.log("Radi")
        this.loginForm.reset();
        localStorage.setItem('token', res.token);
        document.getElementById("labelaSaGreskom").innerHTML = "";
        this.router.navigateByUrl('/profil-korisnika');

      },
      err => {
          console.log("Ne radi")
          console.log(err);
          document.getElementById("labelaSaGreskom").innerHTML = "Neuspesno logovanje, probajte opet";

      }
    );
  }

  

}
