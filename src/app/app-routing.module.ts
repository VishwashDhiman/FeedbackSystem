import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminComponent } from './feedback//admin/admin.component';
import  { FacultyComponent } from './feedback/faculty/faculty.component';

const routes : Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'student', component: FeedbackComponent },
  { path: 'faculty', component:  FacultyComponent}, 
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
