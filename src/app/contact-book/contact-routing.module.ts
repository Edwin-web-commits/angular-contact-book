import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import { ContactBookComponent} from './contact-book.component'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes=[
    
    {path:'',component:ContactBookComponent,canActivate:[AuthGuard],children:[
      {path:'',component:ViewAllContactsComponent},
      { path: 'contacts', component:ViewAllContactsComponent },
      { path: 'add', component: AddContactComponent },
     // { path: 'edit/:id', component: EditContactComponent },
     { path: ':id/edit', component: EditContactComponent },
      //{ path: 'view-contact/:id', component: ViewContactComponent }
      { path: ':id', component: ViewContactComponent }
    ]
   }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ContactRoutingModule{}