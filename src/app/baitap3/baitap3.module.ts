import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap3Component } from './baitap3.component';
import { Baitap3HeaderComponent } from './baitap3-header/baitap3-header.component';
import { Baitap3CarouselComponent } from './baitap3-carousel/baitap3-carousel.component';
import { Baitap3WwdComponent } from './baitap3-wwd/baitap3-wwd.component';
import { Baitap3ContactComponent } from './baitap3-contact/baitap3-contact.component';
import { Baitap3ListCardComponent } from './baitap3-list-card/baitap3-list-card.component';
import { Baitap3FooterComponent } from './baitap3-footer/baitap3-footer.component';
import { Baitap3CardComponent } from './baitap3-list-card/baitap3-card/baitap3-card.component';

@NgModule({
  declarations: [
    Baitap3Component,
    Baitap3HeaderComponent,
    Baitap3CarouselComponent,
    Baitap3WwdComponent,
    Baitap3ContactComponent,
    Baitap3ListCardComponent,
    Baitap3FooterComponent,
    Baitap3CardComponent,
  ],
  exports: [Baitap3Component],
  imports: [CommonModule],
})
export class Baitap3Module {}
