import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptDetailsComponent } from './reciept-details.component';

describe('RecieptDetailsComponent', () => {
  let component: RecieptDetailsComponent;
  let fixture: ComponentFixture<RecieptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
