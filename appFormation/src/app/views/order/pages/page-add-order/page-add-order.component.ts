import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public title: string;
  public subtitle: string;


  constructor(
    private orderService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Add an order";
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        console.log(params.get('id'))
      }
    })
  }

  public addOrder(order: Order): void {
    this.orderService.add(order).subscribe(data => {
      console.log(data);
      this.router.navigate(['orders']);
    });
  }

}
