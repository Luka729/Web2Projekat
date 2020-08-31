import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.css']
})
export class IzmenaKorisnikaComponent implements OnInit {
  

  defaultComponent=0;
  username:string;
  korisnik:any;
    
  toastr: any;
  load: number;
  rezultat: any;
  

  constructor(private fb: FormBuilder,private router:ActivatedRoute,private http:HttpClient,private route:Router,public service: UserService) {
    this.load = 0
    this.defaultComponent = 1;
   router.params.subscribe(params => {
     this.username = params['userNameProvera'];
   });
   console.log("USERNAME:"+this.username);

   }


   ngOnInit() {
    this.service.registrovanjeForm.reset();
    this.DobaviPodatkeKorisnika();
  }
   
  DobaviPodatkeKorisnika() :void{
    this.service.KorisnickiNalog(this.username).subscribe(
      (res: any) => {      
        document.getElementById("ImeKorisnika").innerText  = res.ime;
        document.getElementById("PrezimeKorisnika").innerText  = res.prezime;
        document.getElementById("EmailKorisnika").innerText = res.email;
        document.getElementById("GradKorisnika").innerText = res.grad;
        document.getElementById("TelefonKorisnika").innerText = res.phoneNumber;
        console.log("RES:"+res.grad);
      },
      err => {
        console.log("NE RADI DOBAVLJANJE KORISNIKA");
        document.getElementById("labelaSaGreskom").innerHTML = "Neuspelo dobavljanje korisnika";

        console.log(err);
      }
    );
  }
                                        
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.izmena(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.registrovanjeForm.reset();
        document.getElementById("labelaSaGreskom").innerHTML = "";
        console.log(res);

  
      },
      err => {
        console.log("NE RADI");
        document.getElementById("labelaSaGreskom").innerHTML = "Neuspesna izmena podataka";

        console.log(err);
      }
    );
  }


  


}