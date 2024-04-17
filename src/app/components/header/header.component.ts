import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../services/static-product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  providers:[StaticProductService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
isUserLoggedIn!:boolean;
  constructor(private userAuthentaication:UserAuthService){

  }
  ngOnInit(): void {
    // this.isUserLoggedIn=this.userAuthentaication. getUserLogged();
    this.userAuthentaication.getAuthSubj().subscribe({
      next: (status) => {
        this.isUserLoggedIn = status;
      }
    });
  }

}
