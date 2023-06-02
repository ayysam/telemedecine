import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpDocComponent } from './components/sign-up-doc/sign-up-doc.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DisplayDoctorComponent } from './components/display-doctor/display-doctor.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TableComponent } from './components/table/table.component';
import { MatCardModule, MatProgressSpinnerModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { TableDoctorsComponent } from './components/table-doctors/table-doctors.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TableAppointmentsComponent } from './components/table-appointments/table-appointments.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { TableDoctorAppointmentsComponent } from './components/table-doctor-appointments/table-doctor-appointments.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import {MatListModule} from '@angular/material/list';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { ChatComponent } from './components/chat/chat.component';
import { TableUserAppointmentsComponent } from './components/table-user-appointments/table-user-appointments.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { FicheComponent } from './components/fiche/fiche.component';
import {MatSelectModule} from '@angular/material/select';
import { MedicalFormComponent } from './components/medical-form/medical-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DoctorV2Component } from './components/doctor-v2/doctor-v2.component';
import {MatMenuModule} from '@angular/material/menu';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorsComponent,
    AppointmentComponent,
    AboutUsComponent,
    HeaderComponent,
    TopBarComponent,
    OurDoctorsComponent,
    NewsComponent,
    FooterComponent,
    SignUpComponent,
    SignUpDocComponent,
    LoginComponent,
    DashboardAdminComponent,
    EditUserComponent,
    EditDoctorComponent,
    DoctorComponent,
    DisplayDoctorComponent,
    MobileComponent,
    TableComponent,
    TableDoctorsComponent,
    TableAppointmentsComponent,
    DashboardDoctorComponent,
    TableDoctorAppointmentsComponent,
    DashboardUserComponent,
    EditAppointmentComponent,
    SearchDoctorComponent,
    ChatComponent,
    TableUserAppointmentsComponent,
    DoctorProfileComponent,
    FicheComponent,
    MedicalFormComponent,
    UserProfileComponent,
    DoctorV2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatCarouselModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule

  ],
 

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
