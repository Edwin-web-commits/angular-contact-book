
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-view-all-contacts',
  templateUrl: './view-all-contacts.component.html',
  styleUrls: ['./view-all-contacts.component.css']
})
export class ViewAllContactsComponent implements OnInit {

  contacts:Contact[]=[];
  firstName:any;
  //contacts:Contact;
  searchText=''
  constructor(private contactService: ContactService,private router:Router) { }

  ngOnInit(): void {

    this.contactService.viewAllContacts().subscribe(data=>{
      //this.contacts=data;
      this.contacts=Object.keys(data).map(key=>data[key])
    })
  }

  deleteContact(id:number){
    confirm("Delete this item?")
  this.contactService.deleteContact(id).subscribe();

  }
  editContact(id:number){
    //this.router.navigate(['edit',id]);
    this.router.navigate([id,'edit']);
  }
  viewContact(id:number){
    this.router.navigate(['view-contact',id]);
    this.router.navigate([id]);
  }

  Search(){

    if(this.firstName==""){
     this.ngOnInit();
    }else{
    this.contacts= this.contacts.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
    })}
  }
}
