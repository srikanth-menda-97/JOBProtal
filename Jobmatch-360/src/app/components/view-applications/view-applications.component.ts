import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {
  jobId: any;
  applicationsData: any;
  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
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
        },
        error: (error: any) => {
          console.error('Download failed:', error);
          alert('Download failed. Please try again.');
        },
      });
  }
}
