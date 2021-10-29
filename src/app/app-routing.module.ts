import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './pages/home-template/home-template.component';
import { AdminTemplateComponent } from './pages/admin-template/admin-template.component';
import { HomeComponent } from './pages/home-template/home/home.component';
import { AboutComponent } from './pages/home-template/about/about.component';
import { ListCourseComponent } from './pages/home-template/list-course/list-course.component';

// Khai báo những đường dẫn tới trang
const routes: Routes = [
  //localhost:4200 => trang HomeTemplate
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      //Trang Home
      {
        path: '',
        component: HomeComponent,
      },

      //Trang About
      {
        path: 'about',
        component: AboutComponent,
      },

      //Trang ListCourse
      {
        path: 'list-course',
        component: ListCourseComponent,
      },
    ],
  },

  //localhost:4200/admin => trang AdminTemplate
  {
    path: 'admin',
    component: AdminTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
