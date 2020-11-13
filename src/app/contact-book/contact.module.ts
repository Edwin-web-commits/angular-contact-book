import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactBookComponent } from '../contact-book/contact-book.component'

@NgModule({
    declarations:[
        AddContactComponent,
        EditContactComponent,
        ViewAllContactsComponent,
        ViewContactComponent,
        ContactBookComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ContactRoutingModule

    ],
    exports:[]
})
export class ContactModule{}