import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titres-b',
  templateUrl: './titres-b.component.html',
  styleUrls: ['./titres-b.component.scss']
})
export class TitresBComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
