import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router) {}

  canActivate(): boolean {

    if(this.auth.estaAutenticado()){
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;

    
  }
  
}
