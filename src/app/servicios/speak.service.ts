import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Speech from 'speak-tts';


@Injectable({
  providedIn: 'root'
})
export class SpeakService {
  speech:any;


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
  }
}
