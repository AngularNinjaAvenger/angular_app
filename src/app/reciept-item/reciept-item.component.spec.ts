import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptItemComponent } from './reciept-item.component';

describe('RecieptItemComponent', () => {
  let component: RecieptItemComponent;
  let fixture: ComponentFixture<RecieptItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieptItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
