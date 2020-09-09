import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl:string = "http://localhost:3000/users";

  constructor(private _http : HttpClient) { }
  getAllUsers(){
    return this._http.get<UserTable[]>(this.baseUrl)
  }
  getUserById(id){
    return this._http.get<UserTable[]>(this.baseUrl+"\\"+id);
  }
  setNewusers(data){
    return this._http.post<UserTable>(this.baseUrl,JSON.stringify(data),this.httpOptions);

  }
  addUser(user) { 
     return this._http.post<UserTable>(this.baseUrl,JSON.stringify(user),this.httpOptions)
  }

  delUser(id){
    return this._http.delete<UserTable>(this.baseUrl+"/"+id,this.httpOptions)
  }
  edituser(id,data){
    return this._http.put<UserTable>(this.baseUrl+"/"+id,JSON.stringify(data),this.httpOptions);
  }
}