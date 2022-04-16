import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
  {path: "courseDetails/:id" , component: CoursedetailsComponent},
  {path: "notFound" , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
