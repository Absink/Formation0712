import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public clients: Client[];
  public headers: string[];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.headers =['Name', 'TVA', 'CA', 'Commentaires', 'Etat', 'Total']
    this.clientService.collection.subscribe(datas => {
      this.clients = datas;
      console.log(this.clients);
    });
  }

}
