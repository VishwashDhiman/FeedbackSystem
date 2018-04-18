import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  public FullName="";
  public checked1 = false;
  public checked2 = false;
  public checked3 = false;
  public checked4 = false;
  public id;
  hide = true;

  public course = new FormControl();

  courseList = ['Data Structurs', 'Operating Systems', 'DBMS', 'TOC'];

  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  submit(a)
  {

  }

  ngOnInit() {
  }

}
