import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UIService } from '../../../shared/ui.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public teacherName;
  isLinear = true;
  public review;
  public ratting: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  eleventhFormGroup: FormGroup;
  points = "";
  one = 0;
  two = 0;
  three = 0;
  four = 0;
  five = 0;

  constructor(private autser: AuthService, private formBuilder: FormBuilder,
    private http: HttpClient, private uiser: UIService) { }

  ngOnInit() {
    this.teacherName = this.autser.getTeacher();

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this.formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this.formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this.formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this.formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
    this.eleventhFormGroup = this.formBuilder.group({
      eleventhCtrl: ['', Validators.required]
    });

    this.http.get('http://localhost:3000/api/getRatting/?name=' + this.teacherName)
      .subscribe(response => {
        console.log(response, this.teacherName);
        this.ratting = response;

        this.one = this.ratting[0].rating.oneStar;
        this.two = this.ratting[0].rating.twoStar;
        this.three = this.ratting[0].rating.threeStar;
        this.four = this.ratting[0].rating.fourStar;
        this.five = this.ratting[0].rating.fiveStar;
         this.review = this.ratting[0].reviews;
      }, error => {
        this.uiser.showSnackbar(error.message, 'ok', 5000);
      });
  }
  public submit() {
    this.points = this.firstFormGroup.value.firstCtrl + this.secondFormGroup.value.secondCtrl +
      this.thirdFormGroup.value.thirdCtrl + this.fourthFormGroup.value.fourthCtrl + this.fifthFormGroup.value.fifthCtrl +
      this.sixthFormGroup.value.sixthCtrl + this.seventhFormGroup.value.seventhCtrl + this.eighthFormGroup.value.eighthCtrl +
      this.ninthFormGroup.value.ninthCtrl + this.tenthFormGroup.value.tenthCtrl;
    for (let i = 0; i < this.points.length; i++) {
      if (this.points[i] == '1') {
        this.one++;
      }
      else if (this.points[i] == '2') {
        this.two++;
      }
      else if (this.points[i] == '3') {
        this.three++;
      }
      else if (this.points[i] == '4') {
        this.four++;
      }
      else if (this.points[i] == '5') {
        this.five++;
      }
    }
     this.review += this.eleventhFormGroup.value.eleventhCtrl + "$";

    let data = {
      'rating': {
        'oneStar': this.one,
        'twoStar': this.two,
        'threeStar': this.three,
        'fourStar': this.four,
        'fiveStar': this.five
      },
      'name': this.teacherName,
      'reviews': this.review
    }
    this.http.post('http://localhost:3000/api/update', data, { observe: 'response' })
      .subscribe(response => {
        console.log(response.body);
      }, error => {

        this.uiser.showSnackbar(error.message, 'ok', 5000);
      });
  }
}
