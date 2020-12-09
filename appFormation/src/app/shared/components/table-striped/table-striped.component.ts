import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableStripedComponent implements OnInit {

  @Input() public headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
