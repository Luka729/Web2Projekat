import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/shared/RentACar.service';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-izmena-podataka-orac',
  templateUrl: './izmena-podataka-orac.component.html',
  styleUrls: ['./izmena-podataka-orac.component.css']
})
export class IzmenaPodatakaORACComponent implements OnInit {

  username:string;
  load: number;

  constructor(private router:ActivatedRoute,public serviceRAC: RentACarService,public serviceUSER: UserService) {
    this.load = 0;
    router.params.subscribe(params => {
      this.username = params['userNameProvera'];
    });
   }
  ngOnInit() {
    this.serviceRAC.izmenaRACForm.reset();
    this.DobaviPodatkeKompanije();
  }
   
  DobaviPodatkeKompanije() :void{
    this.serviceRAC.NalogRAC(this.username).subscribe(
      (res: any) => {      
        document.getElementById("nazivServisa").innerText  = res.nazivServisa;
        document.getElementById("adresaRAC").innerText  = res.adresaServisa;
        document.getElementById("promoOpis").innerText = res.promoOpis;
       
      },
      err => {
        console.log("NE RADI DOBAVLJANJE RAC");
        console.log(err);
      }
    );
  }
                                        
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.serviceRAC.izmenaRAC(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.serviceRAC.izmenaRACForm.reset();
        console.log(res);

  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }


}
