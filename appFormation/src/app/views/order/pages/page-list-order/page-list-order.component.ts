import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public orders: Order[];
  public headers: string[];
  public states = Object.values(StateOrder);

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.headers =['Type', 'Client', 'Nb. jours', 'TJM HT', 'Total HT', 'Total TTC', 'Etat'];
    this.orderService.collection.subscribe(datas => {
      this.orders = datas;
      console.log(this.orders);
    });
  }

  public changeState(order: Order, event): void {
    console.log(event);
    this.orderService.changeState(order, event.target.value).subscribe(data => {
      console.log("Before", order.state);
      order.state = data.state;
      console.log("After", order.state);
    })
  }
}
