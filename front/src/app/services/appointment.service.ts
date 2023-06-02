import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentUrl : string = "http://localhost:3000/appointment"
  constructor(private httpClient : HttpClient) { }

  takeIt(user) {
    return this.httpClient.post<{_id : any}>(this.appointmentUrl,user)
  }

  getAllAppointments(){
    return this.httpClient.get<{result : any}>(this.appointmentUrl);
  }

  acceptAppo(appo){
    return this.httpClient.put<{result : any}>(`${this.appointmentUrl}/accept/${appo._id}`,appo)
   }

   cancelAppointment(appo){
    return this.httpClient.put<{result : any}>(`${this.appointmentUrl}/cancel/${appo._id}`,appo)
  }

   refuseAppo(id){
     return this.httpClient.delete<{result : any}>(`${this.appointmentUrl}/${id}`)
   }

   editAppo(appo){
    return this.httpClient.put<{result : any}>(`${this.appointmentUrl}/${appo._id}`,appo)
   }

   getAppoById(id){
    return this.httpClient.get<{result : any}>(`${this.appointmentUrl}/${id}`)
   }
  //  getAppoUser(id){
  //    return this.httpClient.get<{result : any , result2 : any }>(`${this.appointmentUrl}/appoUser/${id}/`);
  //  }
  getAppointmentByIdUserAndDoctor(idUser,idDoctor){
    return this.httpClient.get<{result : any}>(`${this.appointmentUrl}/getAppoUser/${idUser}/${idDoctor}`)
  }
  getAppointmentByIdDoctor(idDoctor){
    return this.httpClient.get<{result : any}>(`${this.appointmentUrl}/getAppoDoctor/${idDoctor}`)
  }
  getAppoUser(idUser){
    return this.httpClient.get<{result : any}>(`${this.appointmentUrl}/getAppoUser/${idUser}`)
  }
  
  
}
