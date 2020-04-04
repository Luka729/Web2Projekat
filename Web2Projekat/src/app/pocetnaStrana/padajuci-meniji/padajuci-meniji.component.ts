import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AutomobiliEntiteti} from 'src/app/entiteti/automobili-entiteti'
import {AutomobiliServisi} from 'src/app/servisi/automobili-servisi'

@Component({
  selector: 'app-padajuci-meniji',
  templateUrl: './padajuci-meniji.component.html',
  styleUrls: ['./padajuci-meniji.component.css']
})
export class PadajuciMenijiComponent implements OnInit {
  allCars: Array<AutomobiliEntiteti>;

  constructor(private automobili: AutomobiliServisi) 
  {
    this.allCars = this.automobili.loadCars();
   }

  ngOnInit(): void {
  }

}
