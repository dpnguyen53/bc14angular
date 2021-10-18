import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3ContactComponent } from './baitap3-contact.component';

describe('Baitap3ContactComponent', () => {
  let component: Baitap3ContactComponent;
  let fixture: ComponentFixture<Baitap3ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
