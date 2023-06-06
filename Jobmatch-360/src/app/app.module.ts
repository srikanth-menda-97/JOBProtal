import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EregistrationComponent } from './components/eregistration/eregistration.component';
import { EloginComponent } from './components/elogin/elogin.component';
import { EdashboardComponent } from './components/edashboard/edashboard.component';
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { CregistrationComponent } from './components/cregistration/cregistration.component';
import { CloginComponent } from './components/clogin/clogin.component';
import { CdashboardComponent } from './components/cdashboard/cdashboard.component';
import { ViewJobComponent } from './components/view-job/view-job.component';
import { ApplyJobComponent } from './components/apply-job/apply-job.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateportalComponent } from './components/candidateportal/candidateportal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EregistrationComponent,
    EloginComponent,
    EdashboardComponent,
    ViewApplicationsComponent,
    PostJobComponent,
    CregistrationComponent,
    CloginComponent,
    CdashboardComponent,
    ViewJobComponent,
    ApplyJobComponent,
    ContactComponent,
    CandidateportalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
