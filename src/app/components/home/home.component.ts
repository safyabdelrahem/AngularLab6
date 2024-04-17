import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent implements OnInit,OnDestroy  {
  subscription!:Subscription;
  notifications: string[] = [];
  constructor(private _NotificationService:NotificationService){}


  ngOnInit(): void {
  //  this.subscription= this._NotificationService.getNotifications().subscribe({
  //     next:(notification)=>{console.log(notification)},
  //     error:(err)=>{console.log(err)},
  //     complete:()=>{"notification completed successfully"},
  //   })
  this.subscription = this._NotificationService.notification$.subscribe({
    next: (notification) => { this.notifications.push(notification); },
    error: (err: any) => { console.log(err); },
    complete: () => { console.log("Notifications completed successfully"); },
  });
}
  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }

}
