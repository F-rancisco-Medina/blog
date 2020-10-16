import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../servicios/speak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private speak:SpeakService) { }

  ngOnInit(): void {
  }

}
