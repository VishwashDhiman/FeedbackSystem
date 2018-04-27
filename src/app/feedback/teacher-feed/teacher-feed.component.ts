import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { UIService } from './../../shared/ui.service';  
 
@Component({
  selector: 'app-teacher-feed',
  templateUrl: './teacher-feed.component.html',
  styleUrls: ['./teacher-feed.component.css']
})
export class TeacherFeedComponent implements OnInit {

  constructor(private auser: AuthService,private http:HttpClient,private uiser:UIService) { }

  private name;
  private teachersData;
  private oneStar;
  private twoStar;
  private threeStar;
  private fourStar;
  private fiveStar;
  private Reviews;
  private reviewForTeacher =[];

  ngOnInit() {
    this.name = this.auser.getName();
    console.log(this.name);
    this.http.get('http://localhost:3000/api/searchTeachersName/?name=' + this.name)
    .subscribe(response => {
      console.log(response);
      this.teachersData = response;
      this.oneStar = this.teachersData[0].rating.oneStar;
      this.twoStar = this.teachersData[0].rating.twoStar;
      this.threeStar = this.teachersData[0].rating.threeStar;
      this.fourStar = this.teachersData[0].rating.fourStar;
      this.fiveStar = this.teachersData[0].rating.fiveStar;
      this.Reviews = this.teachersData[0].reviews;

    //  for(let i of this.Reviews)
      this.reviewForTeacher = this.Reviews.split('$');
      console.log(this.oneStar+" "+this.twoStar+" "+this.threeStar+" "+this.fourStar+" "+this.fiveStar+" "+this.Reviews);
    }, error => {
      this.uiser.showSnackbar(error.message, 'ok', 5000);
    });

  }


}
