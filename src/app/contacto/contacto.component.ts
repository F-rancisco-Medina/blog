import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
    this.datos += "¿Quiénes Somos?..¿Qué es E-Tienda?.Somos la tienda online de abarrotes líder de América Latina";
    this.start();
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
