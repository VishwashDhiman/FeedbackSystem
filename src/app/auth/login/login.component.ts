import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  class;
  name;
  constructor(
    private auser: AuthService,
    private router: Router,
    private http: HttpClient,
    private uiser: UIService
  ) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    var id = form.value.id;
    var password = form.value.password;
    var user = form.value.user;

    var data = {
      'id': id,
      'password': password
    }
    if (user == 'Admin') {

      if (this.auser.checkAdmin(id, password)) {
        this.router.navigate(['/admin']);
      }
      else {
        this.uiser.showSnackbar('Enter valid credentials', 'ok', 4000);
      }
      
    }
    else if (user == 'Student') {
      this.auser.chechStudent(data);
    }
    else if (user == 'Teacher') {
      this.auser.checkTeacher(data);
    }
  }

}