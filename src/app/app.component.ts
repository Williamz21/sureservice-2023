import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "sureservice";
  classToggled=false;

  constructor(public router: Router){
    
  }
  
  ngOnInit(): void {
    document.body.classList.add("bodyOnAll");
  }

  toggleBar(){
    this.classToggled=!this.classToggled;
    document.body.classList.toggle('bodyWidth');
    document.body.classList.toggle("bodyOnAll");
  }
}
