import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  //public orders: Order[];
  public orders: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;
  public btnFilter: BtnI;
  public allOrder: boolean;
  public title: string;
  public subtitle: string;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.headers =['Type', 'Client', 'Nb. jours', 'TJM HT', 'Total HT', 'Total TTC', 'Etat'];
    this.title = "Orders";
    this.subtitle = "List of orders";
    this.createBtns();
    this.orders = this.orderService.collection;
    // this.orderService.collection.subscribe(datas => {
    //   this.orders = datas;
    //   this.allOrder = true;
    // });
  }

  public changeState(order: Order, event): void {
    console.log(event);
    this.orderService.changeState(order, event.target.value).subscribe(data => {
      order.state = data.state;
    })
  }

  public openPopup(): void {
    console.log('Test open popup');
  }

  public createBtns(): void {
    this.btnRoute = {label:'Add an order',  route: 'add'};
    this.btnHref = {label: 'Go to Google', href: 'http://www.google.fr'};
    this.btnAction = {label: 'Open popup', action: true };
    this.btnFilter = { action: true };
  }

  public filterState(): void {
    if (this.allOrder) {
      this.orders = this.orderService.collection.pipe(
        map(datas => datas.filter(data => data.state === StateOrder.CANCEL).map(filterData => new Order(filterData)))
      )
      // this.orders = this.orderService.getFilterByState(StateOrder.CANCEL);
      this.allOrder = false;
      // this.orderService.getFilterByState(StateOrder.CANCEL).subscribe(datas => {
      //   this.orders = datas;
      //   this.allOrder = false;
      // });
    } else {
      this.orders = this.orderService.collection;
      this.allOrder = true;
      // this.orderService.collection.subscribe(datas => {
      //   this.orders = datas;
      //   this.allOrder = true;
      // });
    }
  }
}
