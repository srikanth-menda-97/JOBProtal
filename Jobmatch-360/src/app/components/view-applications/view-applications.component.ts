import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {
  jobId: any;
  applicationsData: any;
  employerId: any;
  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.employerId = this.activatedRoute.snapshot.params["term"];
    this.jobId = this.activatedRoute.snapshot.params["job_id"];
    this.getApplicationsData();
  }

  getApplicationsData() {
    this.applicationService.viewApplications(this.jobId)
      .subscribe({
        next: (response: any) => {
          this.applicationsData = response;
        },
        error: (error: any) => {
          console.error('Fetching applications data failed:', error);
          alert('Fetching failed. Please try again.');
        },
      });
  }

  downloadResume(resumePath: string) {
    let payload: any = {
      "path": resumePath
    }
    this.applicationService.downloadResume(payload)
      .subscribe({
        next: (response: Blob) => {
          let url = window.URL.createObjectURL(response);
          let a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = url;
          a.download = resumePath;
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        },
        error: (error: any) => {
          console.error('Download failed:', error);
          alert('Download failed. Please try again.');
        },
      });
  }

  goToDashboard() {
    this.router.navigate(['/edashboard', this.employerId]);
  }
}
