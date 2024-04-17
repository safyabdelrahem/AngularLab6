import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
// isUserLogged:boolean=false;
private authSubject!:BehaviorSubject<boolean>
  constructor() { 
    this.authSubject=new BehaviorSubject <boolean>(false);
  }
  getAuthSubj():BehaviorSubject<boolean>{
    return this.authSubject;
  }

  login(){
    localStorage.setItem('token',"23kjhhdjskll")
    this.authSubject.next(true);
  }

  logout(){
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }
  getUserLogged():boolean{
    return localStorage.getItem('token') ? true : false;
  }

 }


