import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icdashboard } from 'src/app/interfaces/icdashboard';
import { CdashboardService } from 'src/app/services/cdashboard.service';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent implements OnInit {
  job_title: string = '';
  employerId: number;
  jobId: any;
  jobs: any = [];

  constructor(private router: Router, private jobService: CdashboardService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.employerId = this.activatedRoute.snapshot.params["term"];
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs()
      .subscribe(
        {
          next: (response: any) => {
            console.log(response);
            this.jobs = response;
          },
          error : (error: any) => {
            console.error('Something failed:', error);
            alert('Please try again.');
          },
        });
  }
  
  navigateToApplyjob(job_id: any): void {
    this.router.navigate(['/', this.employerId,  'apply-job', job_id]);
  }


}
