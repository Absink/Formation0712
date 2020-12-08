import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-deconnexion',
  templateUrl: './icon-deconnexion.component.html',
  styleUrls: ['./icon-deconnexion.component.scss']
})
export class IconDeconnexionComponent implements OnInit {

  public myIcon = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}
