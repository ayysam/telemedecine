import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalFormService {

  medicalFormUrl : string = "http://localhost:3000/medicalForm"
  constructor(private httpClient : HttpClient) { }

  saveForm(form){
    return this.httpClient.post<{result : any}>(`${this.medicalFormUrl}/save`, form)
  }
  getMedicalFormByIdAppointment(idAppo){
    return this.httpClient.get<{result : any}>(`${this.medicalFormUrl}/getByAppoId/${idAppo}`);
  }
  deleteMedicalForm(idAppo){
    return this.httpClient.delete<{result : any}>(`${this.medicalFormUrl}/${idAppo}`);
  }
}
