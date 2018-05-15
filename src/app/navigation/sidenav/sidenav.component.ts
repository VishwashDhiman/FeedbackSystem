import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() listclose = new EventEmitter<void>();

  private user: String = null;
  private userSubs: Subscription;

  constructor(private authser: AuthService) { }

  ngOnInit() {
    this.userSubs = this.authser.authChange.subscribe(user => {
      this.user = user
    });
  }
  listClose() {
    this.listclose.emit();
  }
  
  onLogout(){
    this.authser.logout();
    this.listclose.emit();
  }

}
