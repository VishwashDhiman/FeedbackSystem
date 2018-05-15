import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authser: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authser.studentg() == true) {
      this.router.navigate(['/student']);
    }
    else if (this.authser.teacherg() == true) {
      this.router.navigate(['/teacher']);
    }
    else if (this.authser.adming() == true) {
      this.router.navigate(['/admin']);
    }
    else{
      return true;
    }
  }
}