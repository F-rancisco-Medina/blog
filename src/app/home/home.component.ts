import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
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

}
