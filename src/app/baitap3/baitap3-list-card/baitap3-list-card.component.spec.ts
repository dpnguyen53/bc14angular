import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3ListCardComponent } from './baitap3-list-card.component';

describe('Baitap3ListCardComponent', () => {
  let component: Baitap3ListCardComponent;
  let fixture: ComponentFixture<Baitap3ListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3ListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
