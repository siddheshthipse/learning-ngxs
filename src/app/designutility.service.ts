import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

  fetchUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUsers(userData){
    return this.http.post('https://jsonplaceholder.typicode.com/users',userData);
  }

  deleteUser(id:number){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }

  updateUser(payload,id:number){
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+id, payload);
  }
}
