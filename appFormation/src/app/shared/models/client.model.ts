import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI{
  id: number;
  state = StateClient.ACTIVE;
  tva = 20;
  name: string;
  ca: number;
  comment: string;

  total(): number {
    return this.ca * (1 + this.tva / 100);
  }

  constructor(objet?: Partial<Client>) {
    if (objet) {
      Object.assign(this, objet);
    }
  }
}
