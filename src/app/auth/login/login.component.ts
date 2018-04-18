import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from'../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public selected ="";
  public id;
  public pass;
  constructor(private http:HttpClient, private router:Router,private adminAuth:AdminService) { }

  public submit()
  {
    let data ={
                "name" : "Vishwash",
                "id" : this.id,
                "password" : this.pass
              } ;
    if(this.selected == "Student")
    {
      console.log(data);
      this.http.post('http://localhost:3000/api/student', data, { observe: 'response' })
            .subscribe(response => {
              let status = response.status;
              console.log(response);
              if(response.body != null)
               this.router.navigate(['/student'], { fragment: 'top' });
              else 
              alert("Enter valid id and password");
            }, error => {
              console.log("Error is there " + error);
              alert(`Error is there ${error.error.message}`);
            });
    }
    else if(this.selected == "Teacher")
    {
      this.http.post('http://localhost:3000/api/faculty', data, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        console.log(response.body);
        if(response.body != null)
         this.router.navigate(['/faculty'], { fragment: 'top' });
        else
          alert("Enter valid id and password");
      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });
    }
    else 
    {
      let auth = this.adminAuth.check(data);
      if(auth)
        this.router.navigate(['/admin'], { fragment: 'top' });
      else
        alert("Enter correct id and password");
    }
  }



  ngOnInit() {
  }

} 
