import { TestBed } from '@angular/core/testing';

import { CardListService } from './card-list.service';
import { ENDPOINTS } from 'src/app/core/api/api.service';
import { api } from 'src/app/core/api/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardListService', () => {
  let service: CardListService;
  const API = { provide: ENDPOINTS, multi: true, useValue: api };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [API]
    });
    service = TestBed.inject(CardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
