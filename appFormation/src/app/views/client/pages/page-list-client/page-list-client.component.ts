import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  // public clients: Client[];
  public clients: Observable<Client[]>;
  public headers: string[];
  public statesClient = Object.values(StateClient);
  public btnFilter: BtnI;
  public fullTable: boolean;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.headers =['Name', 'TVA', 'CA', 'Commentaires', 'Etat', 'Total']
    this.btnFilter = { label: '', action: true }
    this.clients = this.clientService.collection;
    this.fullTable = true;
  }

  public updateState(client: Client, event): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => client.state = data.state);
  }

  public filter(): void {
    if (this.fullTable){
      this.fullTable = false;
      this.btnFilter.label = 'Réinitialiser';
      this.clients = this.clientService.getFilterByCA(100000);
    } else {
      this.fullTable = true;
      this.btnFilter.label = '';
      this.clients = this.clientService.collection;
    }

  }

}
