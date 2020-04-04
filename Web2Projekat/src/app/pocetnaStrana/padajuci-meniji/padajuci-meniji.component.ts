import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AutomobiliEntiteti} from 'src/app/entiteti/automobili-entiteti'
import {AutomobiliServisi} from 'src/app/servisi/automobili-servisi'
import {HoteliEntiteti} from 'src/app/entiteti/hoteli-entiteti'
import {HoteliServisi} from 'src/app/servisi/hoteli-servisi'

@Component({
  selector: 'app-padajuci-meniji',
  templateUrl: './padajuci-meniji.component.html',
  styleUrls: ['./padajuci-meniji.component.css']
})
export class PadajuciMenijiComponent implements OnInit {
  allCars: Array<AutomobiliEntiteti>;
  allHotels: Array<HoteliEntiteti>;

  constructor(private automobili: AutomobiliServisi, private hoteli: HoteliServisi) 
  {
    this.allCars = this.automobili.loadCars();
    this.allHotels = this.hoteli.loadHotels();
   }

  ngOnInit(): void {
  }

}
