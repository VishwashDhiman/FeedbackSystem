import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-admin-feed',
  templateUrl: './admin-feed.component.html',
  styleUrls: ['./admin-feed.component.css']
})
export class AdminFeedComponent implements OnInit {
  constructor(private http: HttpClient, private uiser: UIService) {

  }

  public studentData;
  public facultyRecord;
  public displayedColumns: object;
  public displayedColumnsForTeacher;
  public facultySource;
  public dataSource;
  public hide = true;
  public course = new FormControl();

  courseList = ['Data Structurs', 'Operating Systems', 'DBMS', 'TOC'];

  classControl = new FormControl('', [Validators.required]);

  availableClass = ['UCA1', 'UCA2', 'UCA3'];

  public studentForm(studentData) {
    let record = {
      name: studentData.value.username,
      id: studentData.value.id,
      password: studentData.value.password,
      class: studentData.value.select
    }
    console.log(record);
    this.http.post('http://localhost:3000/api/addstudent', record, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        console.log(response);
      }, error => {
        //console.log("Error is there " + error);
        //alert(`Error is there ${error.error.message}`);
        this.uiser.showSnackbar(error.message, 'ok',5000);
      });
  }

  public showStudent() {
    this.http.get('http://localhost:3000/api/student')
      .subscribe(response => {
        console.log(response);
        this.studentData = response;
        this.displayedColumns = ['id', 'name', 'password', 'class'];

        this.dataSource = new MatTableDataSource(this.studentData);

      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public applyFilterForFaculty(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.facultySource.filter = filterValue;
  }

  public facultyData(facultyData) {
    let record = {
      id: facultyData.value.id,
      name: facultyData.value.username,
      password: facultyData.value.password,
      subject: facultyData.value.subject,
      class: facultyData.value.class

    }
    console.log(record);
    this.http.post('http://localhost:3000/api/addfaculty', record, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        console.log(response);
      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });

  }

  public showFaculty() {
    this.http.get('http://localhost:3000/api/faculty')
      .subscribe(response => {
        console.log(response);
        this.facultyRecord = response;
        this.displayedColumnsForTeacher = ['id', 'name', 'password', 'class', 'subject'];

        this.facultySource = new MatTableDataSource(this.facultyRecord);

      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });
  }
  ngOnInit() {
  }


}
