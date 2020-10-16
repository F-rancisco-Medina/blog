import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private speak:SpeakService) { }

  ngOnInit(): void {
  }

}
