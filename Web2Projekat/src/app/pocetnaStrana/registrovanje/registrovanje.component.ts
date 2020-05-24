import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrovanje',
  templateUrl: './registrovanje.component.html',
  styleUrls: ['./registrovanje.component.css']
})
export class RegistrovanjeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registrovanjeForm: FormGroup;
  telefonPattern: "([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})";


  ngOnInit(): void {
    this.initForm();    
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }

  private initForm() {
    this.registrovanjeForm = this.fb.group({
      'imeProvera' : new FormControl('',[Validators.required]),
      'prezimeProvera' : new FormControl('',[Validators.required]),
      'gradProvera': new FormControl('',[ Validators.required]),
      'telefonProvera': new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})")]),
      'lozinkaProvera': new FormControl('',[Validators.required, Validators.minLength(6)]),
      'proveralozinkeProvera' : new FormControl('',[Validators.required]),
      'eadresaProvera' : new FormControl('',[Validators.required,Validators.email])
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

  onSubmit() {
    console.log(this.registrovanjeForm.value);
    console.log(this.registrovanjeForm);
  }

}


