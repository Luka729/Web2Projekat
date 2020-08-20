import { Component, OnInit } from '@angular/core';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-verifikacija',
  templateUrl: './verifikacija.component.html',
  styleUrls: ['./verifikacija.component.css']
})
export class VerifikacijaComponent implements OnInit {
 verifikator: number;
  constructor() { }
  
 
  ngOnInit(): void {
    this.verifikator = 0;
  }
  Kliknuto(){
    this.verifikator = 1;

  }
}