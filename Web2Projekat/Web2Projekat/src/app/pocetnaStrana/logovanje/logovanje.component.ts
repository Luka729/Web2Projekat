import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
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

  constructor(private route: ActivatedRoute,private http:HttpClient,private fb: FormBuilder) { }

  private initForm() {
    this.loginForm= this.fb.group({
      'userNameProvera': new FormControl('', [Validators.required,Validators.minLength(6)]),
      'lozinkaProvera': new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }

  /* socialProvider = "google";
  constructor( private router: Router, private toastr: ToastrService,private http:HttpClient,
    public OAuth: AuthService,
    private cookieService: CookieService, @Inject(DOCUMENT) private document: Document,private route: ActivatedRoute) { }*/


  /*LoginWithGoogle(){
    let socialPlatformProvider;  
    if (this.socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (this.socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialusers);   

      this.externalLogin(socialusers).subscribe((res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      });
   
      console.log(socialusers);  
    });  

  }

  externalLogin(loginForm){
    return this.http.post(this.BaseURI + '/ApplicationUser/SocialLogin',loginForm);
  }*/

  login() {
    var body = { 
      Lozinka: this.loginForm.value.lozinkaProvera,
      UserName: this.loginForm.value.userNameProvera
  
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
      },
      err => {
          console.log("Ne radi")
          console.log(err);
      }
    );
  }

  

}
