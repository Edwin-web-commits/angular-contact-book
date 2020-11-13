import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private contactService:ContactService, private router:Router) { }
  contactId=0;
  contact:Contact ;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.contactId=data.id;
    })
    this.contactService.viewContact(this.contactId).subscribe(data=>{
      this.contact=data;
    });
  }
  contactList(){
    this.router.navigate(['/contacts']);
  }
}
