import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UIService } from '../shared/ui.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  
  authChange = new Subject<String>();//Sends data onChange

  private admin =
  {
    id: 'AD123',
    password: 'password'
  }

  private class;
  private teacher;
  private name;
  private adminLogin = false;
  private studentLogin = false;
  private teacherLogin = false;

  constructor(private http: HttpClient, private uiser:UIService, private router:Router) { }

  public checkAdmin(id: any, pass: any) {
    if (id == this.admin.id && pass == this.admin.password) {
      this.authChange.next("Admin");
      this.adminLogin = true;
      return this.adminLogin;
    }
    else {
      return this.adminLogin;
    }
  }

  public chechStudent(data)
  {
    this.http.post('http://localhost:3000/api/student', data, { observe: 'response' })
    .subscribe(response => {
      if (response.body == null) {
        this.uiser.showSnackbar('Enter valid credentials', 'ok', 4000);
      }
      else {
        this.class = response.body;
        let studentClass = this.class.class;
        console.log(studentClass);
        this.class = studentClass;
        this.authChange.next("Student");
        this.studentLogin = true;
        this.router.navigate(['/student']);
        
      }
      //console.log(response);
    }, error => {
      this.uiser.showSnackbar(error.message, 'ok', 5000);
    });
  }

  public checkTeacher(data)
  {
    this.http.post('http://localhost:3000/api/faculty', data, { observe: 'response' })
    .subscribe(response => {
      if (response == null) {
        this.uiser.showSnackbar('Enter valid credentials', 'ok', 4000);
      }
      else {
        console.log(response);
        this.name = response.body;
        let teacherName = this.name.name;
        console.log(teacherName);
        this.name = teacherName;
        this.authChange.next("Teacher");
        this.teacherLogin = true;
        this.router.navigate(['/teacher']);
      }
    }, error => {
      this.uiser.showSnackbar(error.message, 'ok', 5000);
    });
  }


  public getClass() {
    return this.class;
  }

  public setTeacher(name) {
    this.teacher = name;
  }

  public getTeacher() {
    return this.teacher;
  }

  public getName() {
    return this.name;
  }

  public logout() {
    this.router.navigate(['/login']);
    this.authChange.next('');
    this.class = null;
    this.teacher = null;
    this.name = null;
    this.adminLogin = false;
    this.studentLogin = false;
    this.teacherLogin = false;
  }

  adming(){
    return this.adminLogin;
  }

  studentg(){
    return this.studentLogin;
  }

  teacherg(){
    return this.teacherLogin;
  }

}
