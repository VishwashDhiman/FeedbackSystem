import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute, CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './feedback/student-feed/questions/questions.component';

import { AdminGuard } from './authguards/admin.guard';
import { StudentGuard } from './authguards/student.guard';
import { TeacherGuard } from './authguards/teacher.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminFeedComponent, canActivate: [AdminGuard] },
  { path: 'teacher', component: TeacherFeedComponent, canActivate: [TeacherGuard] },
  { path: 'student', component: StudentFeedComponent, canActivate: [StudentGuard] },
  { path: 'questions', component: QuestionsComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [
    AdminGuard,
    StudentGuard,
    TeacherGuard
  ]
})
export class AppRoutingModule { }
