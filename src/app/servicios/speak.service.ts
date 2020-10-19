import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Speech from 'speak-tts';


@Injectable({
  providedIn: 'root'
})
export class SpeakService {
  speech:any;
  datos: any;


  constructor() { 
    console.log("Hola");
    this.speech = new Speech();
    console.log("Se declaro");
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
    console.log("SE configuro");
    this.datos = 'aloja';
  }

  start(){
    console.log(this.datos);
    this.speech.speak({ 
      text: this.datos,
    });
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
