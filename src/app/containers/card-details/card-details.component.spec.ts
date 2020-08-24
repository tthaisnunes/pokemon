import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsComponent } from './card-details.component';
import { CardDetailsService } from './card-details.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENDPOINTS } from 'src/app/core/api/api.service';
import { api } from 'src/app/core/api/api';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  const fakeActivatedRoute = {} as ActivatedRoute;
  const API = { provide: ENDPOINTS, multi: true, useValue: api };
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  const MAT_DIALOG_DATA_MOCK = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [CardDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        },
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: MAT_DIALOG_DATA_MOCK
        },
        API,
        CardDetailsService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
