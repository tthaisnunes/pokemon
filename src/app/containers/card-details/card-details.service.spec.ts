import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardDetailsService } from './card-details.service';
import { ENDPOINTS } from 'src/app/core/api/api.service';
import { api } from 'src/app/core/api/api';


describe('CardDetailsService', () => {
  let service: CardDetailsService;
  const API = { provide: ENDPOINTS, multi: true, useValue: api };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [API]
    });
    service = TestBed.inject(CardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
