import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';


@NgModule({
    declarations:[AuthComponent],
    imports:[FormsModule,CommonModule,AuthRoutingModule],
   
})
export class AuthModule{}