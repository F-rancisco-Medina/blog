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
    this.datos = ".. ";
    this.datos += "Puedes contactarme por redes sociales: .";
    this.datos += " Por Git hub, https dos puntos diagonal diagonal git hub punto com diagonal Paco Medina Mz..";
    this.datos += "Por Linked In: triple w linked in punto com diagonal in diagonal paco guión medina mz ..";
    this.datos += "Por Correo: paco medina punto 05 punto 12 punto 99 @ out look punto com ..";
    this.datos += "Por Twitter: https dos puntos diagonal twitter punto com diagonal Paco Medina Mz";

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
