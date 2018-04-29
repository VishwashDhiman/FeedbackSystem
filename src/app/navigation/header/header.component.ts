import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavTog = new EventEmitter<void>();
  constructor(private auser: AuthService,private router:Router) {
  } 
  user = true;

  ngOnInit() {
  }

  toggleOnCLick(){
    this.sideNavTog.emit();
  }
  
  onLogout()
  {
    console.log("heyy");
    this.auser.setClass(null);
    this.auser.setTeacher(null);
    this.auser.setName(null);
    this.router.navigate(['/home']);
  }
}
