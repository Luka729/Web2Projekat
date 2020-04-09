import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registrovanje',
  templateUrl: './registrovanje.component.html',
  styleUrls: ['./registrovanje.component.css']
})
export class RegistrovanjeComponent implements OnInit {

  constructor() { }

  registrovanjeForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public jeJednako(c:AbstractControl):ValidationErrors | null{
    const kljuc: string[]=Object.keys(c.value);
    for(const i in kljuc){
      if(i!=='0'&&c.value[kljuc[+i-1]]!==c.value[kljuc[i]]){
        return{jeJednako:true};
      }
    }  
  }

  private initForm() {
    this.registrovanjeForm = new FormGroup({
      'imeProvera' : new FormControl('',[Validators.required]),
      'prezimeProvera' : new FormControl('',[Validators.required]),
      'userNameProvera': new FormControl('', [Validators.required,Validators.minLength(6)]),
      'lozinkaProvera': new FormControl('',[Validators.required, Validators.minLength(6)]),
      'proveralozinkeProvera' : new FormControl('',[Validators.required]),
      'eadresaProvera' : new FormControl('',[Validators.required,Validators.email])
    });
  }

  onSubmit() {
    console.log(this.registrovanjeForm.value);
    console.log(this.registrovanjeForm);
  }

}
