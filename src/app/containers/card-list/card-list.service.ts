import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/api/api.service';
import { Cards } from './card-list.model';

@Injectable({
  providedIn: 'root'
})

export class CardListService {
  constructor(
    private api: ApiService,
    private httpCliente: HttpClient
  ) { }

  get(pageSize, pageIndex, name = '') {
    return this.httpCliente.get<Cards>(this.api.request(this.api.endPoints.cards),
      {
        observe: 'response',
        params: { page: pageIndex, pageSize: pageSize, name: name }
      }
    );
  }
}
