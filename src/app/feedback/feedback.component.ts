import { Component, OnInit } from '@angular/core';
import { allResolved } from 'q';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  panelOpenState: boolean = false;
  public name = "Abhishek"

  ngOnInit() {
  }
  public fun(){
    alert("adsad");
  }
  }
