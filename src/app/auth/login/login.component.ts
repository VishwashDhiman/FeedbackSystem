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
      'id' : id,
      'password' : password
    }
    if (user == 'Admin') {

      if (this.auser.checkAdmin(id, password)) {
        this.router.navigate(['/admin']);
      }
      else {
        // alert("Enter valid email and password");
        this.uiser.showSnackbar('Enter valid credentials','ok',4000);
      }
    }
    else if(user == 'Student')
    {
      console.log(data);
      this.http.post('http://localhost:3000/api/student', data, { observe: 'response' })
      .subscribe(response => {
        if(response.body == null)
         {
          this.uiser.showSnackbar('Enter valid credentials', 'ok',4000);
         }
        else
        {
          this.class = response.body;
          let d = this.class.class;
          console.log(d);
          this.auser.setClass(d);
          this.router.navigate(['/student']);
        }
        //console.log(response);
      }, error => {
        this.uiser.showSnackbar(error.message, 'ok',5000);
      });
    }
    else if(user == 'Teacher')
    {
      this.http.post('http://localhost:3000/api/faculty', data, { observe: 'response' })
      .subscribe(response => {
        if(response == null)
         {
          this.uiser.showSnackbar('Enter valid credentials', 'ok',4000);
         }
        else
        {
          console.log(response);
          this.name = response.body;
          let d = this.name.name;
          console.log(d);
          this.auser.setName(d);
          this.router.navigate(['/teacher']);
        }
      }, error => {
        this.uiser.showSnackbar(error.message, 'ok',5000);
      });
    }
  }

}
