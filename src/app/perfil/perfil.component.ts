import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private speak:SpeakService) { }

  ngOnInit(): void {
  }

}
