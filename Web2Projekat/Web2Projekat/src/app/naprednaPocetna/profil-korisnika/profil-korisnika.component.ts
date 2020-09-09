import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profil-korisnika',
  templateUrl: './profil-korisnika.component.html',
  styleUrls: ['./profil-korisnika.component.css']
})
export class ProfilKorisnikaComponent implements OnInit {
  defaultComponent=0;
  username:string;

  constructor(private route:ActivatedRoute, private router: Router,public service:UserService) {
    this.defaultComponent = 1;
   route.params.subscribe(params => {
     this.username = params['userNameProvera'];
   });
   console.log("USERNAME:"+this.username);
   this.DobaviPodatkeKorisnika();
   }

   vidiKorisnike(){
     this.router.navigateByUrl('/prikaz-prijatelja/'+this.username);
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
  izmeniPodatke(){
    this.router.navigateByUrl('/izmena-korisnika/' + this.username);

  }

  rezervisiKarte(){}
  rezervisiVozilo(){}


  ngOnInit(): void {
  }

}
