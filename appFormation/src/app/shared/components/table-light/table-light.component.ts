import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() public collectionOrder: Order[];
  @Input() public collectionClient: Client[];
  @Input() public headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
