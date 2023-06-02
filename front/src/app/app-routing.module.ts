import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { DisplayDoctorComponent } from './components/display-doctor/display-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorV2Component } from './components/doctor-v2/doctor-v2.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FicheComponent } from './components/fiche/fiche.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalFormComponent } from './components/medical-form/medical-form.component';
import { NewsComponent } from './components/news/news.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { SignUpDocComponent } from './components/sign-up-doc/sign-up-doc.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TableAppointmentsComponent } from './components/table-appointments/table-appointments.component';
import { TableDoctorAppointmentsComponent } from './components/table-doctor-appointments/table-doctor-appointments.component';
import { TableUserAppointmentsComponent } from './components/table-user-appointments/table-user-appointments.component';
import { TableComponent } from './components/table/table.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {path: "doctors" , component:DoctorsComponent},
  {path: "aboutUs" , component:AboutUsComponent},
  {path: "news" , component:NewsComponent},
  {path: "signUp" , component:SignUpComponent},
  {path: "signUpDoc" , component:SignUpDocComponent},
  {path: "login" , component:LoginComponent},
  {path: "dashboardAdmin" , component:DashboardAdminComponent},
  {path: "editUser/:id" , component:EditUserComponent},
  {path: "editDoctor/:id" , component:EditDoctorComponent},
  {path: "displayDoctor/:doctorId" , component:DisplayDoctorComponent},
  {path: "table" , component:TableComponent},
  {path: "header" , component:HeaderComponent},
  {path: "appointement/:id" , component:AppointmentComponent},
  {path: "tableAppointment" , component:TableAppointmentsComponent},
  {path: "dashboardDoctor" , component:DashboardDoctorComponent},
  {path: "dashboardUser" , component:DashboardUserComponent},
  {path: "tableUserAppo" , component:TableUserAppointmentsComponent},
  {path: "editAppointment/:id" , component:EditAppointmentComponent},
  {path: "searchDoctor/:speciality/:governorate" , component:SearchDoctorComponent},
  {path: "chat/:roomname" , component:ChatComponent},
  {path: "doctorAppo" , component:TableDoctorAppointmentsComponent},
  {path: "doctorProfile/:doctorId" , component:DoctorProfileComponent},
  {path: "medicalForm/:doctorId" , component:FicheComponent},
  {path: "displayMedicalForm/:appoId" , component:MedicalFormComponent},
  {path: "userProfile/:userId" , component:UserProfileComponent},
  {path: "doctorV2" , component:DoctorV2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
