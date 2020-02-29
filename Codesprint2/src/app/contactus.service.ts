import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactUs } from 'src/models/contactus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  httpUrl='http://localhost:3000/contactus/';
  constructor(private httpClient:HttpClient) { }
  
getAllContacts():Observable<ContactUs[]>{
  return this.httpClient.get<ContactUs[]>(this.httpUrl);
}
saveContact(contactus:ContactUs):Observable<ContactUs>{
  return this.httpClient.post<ContactUs>(this.httpUrl,contactus);
}
deleteContact(id:number):Observable<ContactUs>{
  return this.httpClient.delete<ContactUs>(this.httpUrl+ id);
}
updateContactInfo(contactus :ContactUs) :Observable<ContactUs>{
  return this.httpClient.put<ContactUs>(this.httpUrl + contactus.id, contactus);
}
getContactById(id:number): Observable<ContactUs>{
  return this.httpClient.get<ContactUs>(this.httpUrl+id);
   
}
}
