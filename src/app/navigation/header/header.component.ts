import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavTog = new EventEmitter<void>();
  
  private user: String = null;
  private userSubs: Subscription;

  constructor( private authser: AuthService ) { }

  ngOnInit() {
    this.userSubs = this.authser.authChange.subscribe( user => {
      this.user = user
    });
  }

  toggleOnCLick(){
    this.sideNavTog.emit();
  }
  
  onLogout(){
    this.authser.logout();
  }

}
