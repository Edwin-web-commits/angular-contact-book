import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  
  contId=Math.floor(Math.random() * 100)+1 ;
  constructor(private contactService:ContactService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit(form){

    
    let newContact={
      id:this.contId,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email:form.value.email,
      contacts: form.value.contacts
    }
    this.contactService.createContact(newContact).subscribe();
   
    //alert("Contact added succesfully")
  //this.router.navigate(["/contacts"]);
  this.router.navigate(['../'],{relativeTo:this.route});
  }
}
