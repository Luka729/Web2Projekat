import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'userNameProvera': new FormControl('', [Validators.required,Validators.minLength(6)]),
      'lozinkaProvera': new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }

}
