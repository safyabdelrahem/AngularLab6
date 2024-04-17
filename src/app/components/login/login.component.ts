import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 isUserLogged:boolean;

  constructor(private userAuthentaication:UserAuthService){
    this.isUserLogged=this.userAuthentaication.getUserLogged();
  }
  login(){
    this.userAuthentaication.login()
    this.isUserLogged=this.userAuthentaication.getUserLogged();
  }
  logout(){
    this.userAuthentaication.logout()
    this.isUserLogged=this.userAuthentaication.getUserLogged();
  }

}
