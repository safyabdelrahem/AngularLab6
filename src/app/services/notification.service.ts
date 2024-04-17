import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string>("Default notification");
  notification$= this.notificationSubject.asObservable();

  private notifications: string[] = [
    "Hanoda sent you a friend request",
    "You have unread messages",
    "People reacting to your post",
    "",
    "Post shared successfully"
  ];

  constructor() {
    this.startNotifications();
  }

  private startNotifications() {
    let count = 0;
    const notificationInterval = setInterval(() => {
      if (count == this.notifications.length) {
        clearInterval(notificationInterval);
        this.notificationSubject.complete();
      }
      if (this.notifications[count] !== "") {
        this.notificationSubject.next(this.notifications[count]);
      } else {
        this.notificationSubject.error("This notification is empty");
      }
      count++;
    }, 2000);
  }
}