import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ViewAllContactsComponent } from './contact-book/view-all-contacts/view-all-contacts.component';

const routes: Routes = [
 // {path:'',component:ViewAllContactsComponent},
  {path:'',redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', loadChildren:()=>import('./contact-book/contact.module').then(m=>m.ContactModule)},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(myModule=>myModule.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
