import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
