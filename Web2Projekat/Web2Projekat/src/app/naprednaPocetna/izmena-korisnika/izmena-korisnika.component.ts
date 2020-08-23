import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.css']
})
export class IzmenaKorisnikaComponent implements OnInit {

  defaultComponent=0;
  username:string;

    
  toastr: any;
  load: number;
  rezultat: any;
  

  constructor(private fb: FormBuilder,private router:ActivatedRoute,private http:HttpClient,private route:Router) {
    this.load = 0
    this.defaultComponent = 1;
   router.params.subscribe(params => {
     this.username = params['username'];
   });
   console.log("USERNAME:"+this.username);

   }
   

   

  izmenaForm: FormGroup;
  telefonPattern: "([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})";
  formModel: FormGroup;
  readonly BaseURI ='http://localhost:58544/api';


  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.izmenaForm = this.fb.group({
    'imeProvera' :['',Validators.required],
    'prezimeProvera' : ['',Validators.required],
    'gradProvera': ['',Validators.required],
    'telefonProvera': ['',[Validators.required,Validators.maxLength(10),Validators.pattern("([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})")]],
    'lozinkaProvera': ['',[Validators.required, Validators.minLength(6)]],
    'proveralozinkeProvera' : ['',Validators.required],
    'eadresaProvera' : ['',[Validators.required,Validators.email]]
  },{ validator: this.comparePasswords})

  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('proveralozinkeProvera');

    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('lozinkaProvera').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  izmena() {
    var body = {
    Ime: this.izmenaForm.value.imeProvera,
    Prezime: this.izmenaForm.value.prezimeProvera,
    Grad: this.izmenaForm.value.gradProvera,
    Telefon: this.izmenaForm.value.telefonProvera,
    Email: this.izmenaForm.value.eadresaProvera,
    Lozinka: this.izmenaForm.value.lozinkaProvera,
    UserName: this.username,

    };
    return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/IzmenaPodataka', body);
}                                          
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.izmena().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.izmenaForm.reset();
        document.getElementById("labelaSaGreskom").innerHTML = "";
        console.log(res);

  
      },
      err => {
        console.log("NE RADI");
        document.getElementById("labelaSaGreskom").innerHTML = "Neuspesno registrovanje, korisnik sa ovim email-om vec postoji";

        console.log(err);
      }
    );
  }


  


}