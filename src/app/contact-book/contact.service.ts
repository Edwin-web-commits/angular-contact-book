import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  

  constructor(private httpClient: HttpClient) { }

   createContact(contact):Observable<Contact>{
    const contactUrl='http://localhost:3000/contacts';
    return this.httpClient.post<Contact>(contactUrl,contact)
   }
   updateContact(contactId,contact):Observable<Contact>{
    const contactUrl='http://localhost:3000/contacts/'+contactId;
    return this.httpClient.put<Contact>(contactUrl,contact)
   }
   viewContact(contactId):Observable<Contact>{
    const contactUrl='http://localhost:3000/contacts/'+contactId;
    return this.httpClient.get<Contact>(contactUrl)
   }
   viewAllContacts():Observable<Contact>{
    const contactUrl='http://localhost:3000/contacts';
    return this.httpClient.get<Contact>(contactUrl)
   }
   deleteContact(contactId){
    const contactUrl='http://localhost:3000/contacts/'+contactId;
    return this.httpClient.delete<Contact>(contactUrl)
   }
}
