import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Imported to use animations
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { UIService } from './shared/ui.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

import { AppRoutingModule} from './/app-routing.module';
import { MaterialModule } from './material/material.module';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';
import { WelcomeComponent } from './welcome/welcome.component';

//Required Modules
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './feedback/student-feed/questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    StudentFeedComponent,
    TeacherFeedComponent,
    AdminFeedComponent,
    WelcomeComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,UIService],
  bootstrap: [AppComponent]
})

export class AppModule { }
