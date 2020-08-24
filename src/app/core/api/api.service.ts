import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Endpoints } from './api.d';
import { environment } from '../../../environments/environment';

export const ENDPOINTS = new InjectionToken('ENDPOINTS');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _apiUrl = environment.apiUrl;

  endPoints: Endpoints;
  constructor(@Inject(ENDPOINTS) private _endPoints) {
    this.endPoints = _endPoints.reduce((acc, current) => {
      return current;
    }, {});
  }

  request(url: string){
    return `${this._apiUrl}${url}`;
  }

}