import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3CardComponent } from './baitap3-card.component';

describe('Baitap3CardComponent', () => {
  let component: Baitap3CardComponent;
  let fixture: ComponentFixture<Baitap3CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
