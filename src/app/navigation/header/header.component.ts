import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavTog = new EventEmitter<void>();
  constructor( private authser: AuthService, private router:Router ) { }
  private user: String = 'login';
  private userSubs: Subscription;
  ngOnInit() {
    this.userSubs = this.authser.authChange.subscribe( user => {
       this.user = user;
    });
  }
  onLogout()
  {
    this.authser.setClass(null);
    this.authser.setName(null);
    this.authser.setTeacher(null);
    this.authser.logout('login');
    this.router.navigate(['/home']);
  }
  toggleOnCLick(){
    this.sideNavTog.emit();
  }
}
