import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titres-a',
  templateUrl: './titres-a.component.html',
  styleUrls: ['./titres-a.component.scss']
})
export class TitresAComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
