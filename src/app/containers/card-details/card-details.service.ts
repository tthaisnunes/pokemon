import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api/api.service';
import { Cards } from './card-details.model';

@Injectable({
  providedIn: 'root'
})

export class CardDetailsService {
  constructor(
    private api: ApiService,
    private httpCliente: HttpClient
  ) { }

  get(id): Observable<Cards> {
    return this.httpCliente.get<Cards>(this.api.request(this.api.endPoints.cards), {
      params: { id }
    });
  }

}
