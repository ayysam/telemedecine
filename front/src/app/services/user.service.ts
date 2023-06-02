import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  userUrl: string = "http://localhost:3000/users"

  signUp(user) {
    
    return this.httpClient.post<{ result: string }>(`${this.userUrl}/signup`, user);
  }
  getAllUsers() {
    return this.httpClient.get<{ users: any }>(`${this.userUrl}/getAllUsers`);
  }
  getUsers() {
    return this.httpClient.get<{ result: any }>(`${this.userUrl}/getUsers`);
  }
  getDoctors() {
    return this.httpClient.get<{ result: any }>(`${this.userUrl}/getDoctors`);
  }
  getUserById(id) {
    return this.httpClient.get<{ result: any }>(`${this.userUrl}/${id}`)
  }
  updateUser(user) {
    return this.httpClient.put<{ result: any }>(`${this.userUrl}/${user._id}`, user)
  }
  deleteUser(id) {
    return this.httpClient.delete<{ result: string }>(`${this.userUrl}/${id}`);
  }
  login(user) {
    return this.httpClient.post<{ result: any }>(`${this.userUrl}/login`, user);
  }
  searchDoctor(gov, spec) {
    return this.httpClient.get<{ res: any }>(`${this.userUrl}/search3/${gov}/${spec}`)
  }
  searchDoctorByGov(gov) {
    return this.httpClient.get<{ res: any }>(`${this.userUrl}/search1/${gov}`)
  }
  searchDoctorBySpec(spec) {
    return this.httpClient.get<{ res: any }>(`${this.userUrl}/search2/${spec}`)
  }

}
