import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-izaberi-sediste',
  templateUrl: './izaberi-sediste.component.html',
  styleUrls: ['./izaberi-sediste.component.css']
})
export class IzaberiSedisteComponent implements OnInit {

  letID: string;
  fly: any;
  constructor(private route:ActivatedRoute, private router: Router, public service:AvioKompanijaService) { 
    route.params.subscribe(params => {
      this.letID = params['lett'];
      console.log("LET ID:"+this.letID);
      this.dobavkaLeta(this.letID);

    });
  }

  dobavkaLeta(ID): void {
    this.service.dobaviLet(ID).subscribe(
      (res: any) => {
        this.fly = res;
        console.log(this.fly)
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
