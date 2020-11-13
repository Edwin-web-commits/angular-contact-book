import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{

  private subscribtion:Subscription;
  isAuthenticated=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  this.subscribtion= this.authService.user.subscribe(user=>{
     this.isAuthenticated=!user? false: true;
   })
  }
  onLogout(){
    this.authService.logout();
  }
 ngOnDestroy(){
  this.subscribtion.unsubscribe();
 }
}
