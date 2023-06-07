import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-edashboard',
  templateUrl: './edashboard.component.html',
  styleUrls: ['./edashboard.component.css']
})
export class EdashboardComponent implements OnInit {
  employerId: number;
  jobData: any = [];
  constructor(private employerService: EmployerServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employerId = this.activatedRoute.snapshot.params["term"];
    this.getJobData();
  }

  getJobData() {
    this.employerService.getPostedJobData(this.employerId)
      .subscribe({
        next: (response: any) => {
          this.jobData = response;
        },
        error : (error: any) => {
          console.error('Fetching job data failed:', error);
          alert('Fetching failed. Please try again.');
        },
      });
  }

  openJobPostForm() {
    this.router.navigate(["/edashboard", this.employerId, "post-job"])
  }
}
