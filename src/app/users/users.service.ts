import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private httpClient:HttpClient) { }

  viewAllUsers():Observable<Users>{
    const baseUrl = "http://localhost:3000/users/";
    return this.httpClient.get<Users>(baseUrl);
  }

  createUsers(userBody: any):Observable<Users>{
    const baseUrl = "http://localhost:3000/users/";
    return this.httpClient.post<Users>(baseUrl, userBody);
  }

  updateUsers(id: any, userBody: any):Observable<Users>{
    const baseUrl = "http://localhost:3000/users/" + id;
    return this.httpClient.put<Users>(baseUrl, userBody);
  }

  editUsers(id: any):Observable<Users>{
    const baseUrl = "http://localhost:3000/users/"+ id;
    return this.httpClient.get<Users>(baseUrl);
  }

  deleteUsers(id: any):Observable<Users>{
    const baseUrl = "http://localhost:3000/users/" + id;
    return this.httpClient.delete<Users>(baseUrl);
  }

}
