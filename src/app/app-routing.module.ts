import { NgModule,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule, ActivatedRoute,CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './feedback/student-feed/questions/questions.component';


const routes : Routes = [
  { path : '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'student', component: StudentFeedComponent },
  { path: 'admin', component: AdminFeedComponent },
  { path: 'teacher', component: TeacherFeedComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'home', component: WelcomeComponent }
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

