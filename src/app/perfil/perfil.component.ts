import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';
import Speech from 'speak-tts';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  datos:any;
  speech:any;

  constructor() {
    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      // returns a boolean
      console.log('speech synthesis supported');
      this.speech.init({
          volume: 1,
          lang: 'es-MX',
          rate: 1,
          pitch: 1,
          voice: 'Microsoft Sabina Desktop - Spanish (Mexico)',
          splitSentences: true
        });
        
    }
    this.datos = ".. ";
    this.datos += "Bienvenido!!! .";
    this.datos += "Soy un estudiante de Ingeniería en sistemas computacionales de la Universidad autónoma de Aguascalientes.";
    this.datos += "Mi principal rama de la programación son los sistemas web, los cuales he estado estudiando y practicando durante un";
    this.datos += "año.";
   }

   start(){
    console.log(this.datos);
    this.speech.speak({ 
      text: this.datos,
    });
  }

  ngOnInit(): void {
  }

  pause(){
    this.speech.pause();
    console.log("f");
  }

  resume(){
    this.speech.resume();
    console.log("f1");
  }

  cancelar(){
    this.speech.cancel();
    console.log("f3");
  }
}
