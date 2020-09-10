import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarService } from 'src/app/shared/RentACar.service';

@Component({
  selector: 'app-izmeni-filijalu',
  templateUrl: './izmeni-filijalu.component.html',
  styleUrls: ['./izmeni-filijalu.component.css']
})
export class IzmeniFilijaluComponent implements OnInit {

  id:string;
  constructor(private route:ActivatedRoute,private router:Router,public service:RentACarService) { 
    route.params.subscribe(params => {
      this.id = params['id'];
      console.log("UNUTAR KONSTRUKTORA:"+params['id']);
    });
    console.log("ID::"+this.id);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Uslo u submit");
    this.service.izmeniFilijalu(this.id).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.filijalaForm.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

}

