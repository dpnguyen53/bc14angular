import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';

import { Baitap2Module } from './baitap2/baitap2.module';
import { Baitap3Module } from './baitap3/baitap3.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { InteractionModule } from './interaction/interaction.module';
import { BookingBusModule } from './booking-bus/booking-bus.module';
import { HomeTemplateComponent } from './pages/home-template/home-template.component';
import { AdminTemplateComponent } from './pages/admin-template/admin-template.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home-template/home/home.component';
import { AboutComponent } from './pages/home-template/about/about.component';
import { ListCourseComponent } from './pages/home-template/list-course/list-course.component';
import { NavbarComponent } from './pages/home-template/_components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    HomeTemplateComponent,
    AdminTemplateComponent,
    HomeComponent,
    AboutComponent,
    ListCourseComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    Baitap2Module,
    Baitap3Module,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    InteractionModule,
    BookingBusModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
