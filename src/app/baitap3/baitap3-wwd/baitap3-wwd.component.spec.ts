import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3WwdComponent } from './baitap3-wwd.component';

describe('Baitap3WwdComponent', () => {
  let component: Baitap3WwdComponent;
  let fixture: ComponentFixture<Baitap3WwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3WwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3WwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
