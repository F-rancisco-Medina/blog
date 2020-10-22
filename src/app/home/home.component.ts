import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private speak:SpeakService) { 

    this.start();
    this.pause();
    this.cancelar();
    this.resumen();
  }

  ngOnInit(): void {
  }

  start(){
    this.speak.start();
    console.log("f1");
  }

  pause(){
    this.speak.pause();
    console.log('f2');
  }

  cancelar(){
    this.speak.cancelar();
    console.log("f3");
  }

  resumen(){
    this.speak.resume();
    console.log("f4");
  }

}
