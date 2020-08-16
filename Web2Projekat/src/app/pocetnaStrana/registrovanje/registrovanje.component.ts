import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-registrovanje',
  templateUrl: './registrovanje.component.html',
  styleUrls: ['./registrovanje.component.css']
})

@Injectable()

export class RegistrovanjeComponent implements OnInit {
  toastr: any;
  load: number;

  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.load = 0
   }

  registrovanjeForm: FormGroup;
  telefonPattern: "([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})";
  formModel: FormGroup;
  readonly BaseURI ='http://localhost:57382/api';



  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.registrovanjeForm = this.fb.group({
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
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('lozinkaProvera').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  register() {
    var body = {
    Ime: this.registrovanjeForm.value.imeProvera,
    Prezime: this.registrovanjeForm.value.prezimeProvera,
    Grad: this.registrovanjeForm.value.gradProvera,
    Telefon: this.registrovanjeForm.value.telefonProvera,
    Email: this.registrovanjeForm.value.eadresaProvera,
    Lozinka: this.registrovanjeForm.value.lozinkaProvera
    };
    return this.http.post(this.BaseURI + '/User/Register', body);
}
  onSubmit() {
    this.load = 1
    this.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.registrovanjeForm.reset();
          this.toastr.success('New user created!','registration success full');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  


}