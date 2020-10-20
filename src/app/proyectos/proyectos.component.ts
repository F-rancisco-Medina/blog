import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private speak:SpeakService) {
    this.start();
   }

  ngOnInit(): void {
  }

  start(){
    this.speak.start();
  }

  pause(){}

  cancelar(){}

  resumen(){}

}
