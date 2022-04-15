import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ViewCourseCreatedComponent } from './view-course-created/view-course-created.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ViewCourseCreatedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
