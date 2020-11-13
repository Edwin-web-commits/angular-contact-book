import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

 
  isAuthenticated=false;
  constructor(private authService:AuthService){}
  ngOnInit(){
    
  this.authService.autoLogin();
    
  }
  
  

}
