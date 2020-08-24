import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AttackDetailsComponent } from './attack-details.component';

const mockDialogRef = {
  close: jasmine.createSpy('close')
};

const MAT_DIALOG_DATA_MOCK = {};

describe('AttackDetailsComponent', () => {
  let component: AttackDetailsComponent;
  let fixture: ComponentFixture<AttackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttackDetailsComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: MAT_DIALOG_DATA_MOCK
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
