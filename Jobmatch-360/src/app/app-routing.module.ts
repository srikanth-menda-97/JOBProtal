import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { CandidateportalComponent } from './components/candidateportal/candidateportal.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'eregistration', component: EregistrationComponent },
  { path: 'elogin', component: EloginComponent  },
  { path: 'edashboard', component: EdashboardComponent },
  { path: 'view-applications', component: ViewApplicationsComponent  },
  { path: 'post-job', component: PostJobComponent  },
  { path: 'candidateportal', component: CandidateportalComponent  },
  { path: 'cregistration', component: CregistrationComponent  },
  { path: 'clogin', component:  CloginComponent },
  { path: 'cdashboard', component: CdashboardComponent  },
  { path: 'view-job/:job_id', component:  ViewJobComponent  },
  { path: 'apply-job', component: ApplyJobComponent  },
  { path: 'contact', component:  ContactComponent  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
