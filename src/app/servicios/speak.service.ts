import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Speech from 'speak-tts';


@Injectable({
  providedIn: 'root'
})
export class SpeakService {

  constructor() { 
    console.log("Hola");
  }
}
