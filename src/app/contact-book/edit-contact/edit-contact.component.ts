import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
 contactId=0;
 contact:Contact;
  constructor(private contactService:ContactService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.contactId=data.id;

      this.contactService.viewContact(this.contactId).subscribe(data=>{
        this.contact=data;
      });
    })
  }
 onSubmit(form){
  let updatedContact={
    id:this.contactId,
    firstName: this.contact.firstName,
    lastName: this.contact.lastName,
    email:this.contact.email,
    contacts: this.contact.contacts
   }
   this.contactService.updateContact(this.contactId,updatedContact).subscribe();


   //this.router.navigate(['/view-contact',this.contactId]);
   this.router.navigate([this.contactId])
  }
}