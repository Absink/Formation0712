import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public clientEdition: Client;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.get('id')){
        this.clientService.getById(Number(x.get('id'))).subscribe(datas => {
          this.clientEdition = datas;
        });
      }
    })
    this.title = "Clients";
    this.subtitle = "Add a client";
  }

  public add(client: Client): void {
    this.clientService.add(client).subscribe(data => this.router.navigate(['clients']));
  }

  public update(client: Client): void {
    client.id = this.clientEdition.id;
    this.clientService.update(client).subscribe(data => this.router.navigate(['clients']));
  }

}
