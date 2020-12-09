import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
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
  public statesClient = Object.values(StateClient);

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.headers =['Name', 'TVA', 'CA', 'Commentaires', 'Etat', 'Total']
    this.clientService.collection.subscribe(datas => {
      this.clients = datas;
      console.log(this.clients);
    });
  }

  public updateState(client: Client, event): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => client.state = data.state);
  }

}
