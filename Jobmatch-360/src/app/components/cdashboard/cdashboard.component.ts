import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icdashboard } from 'src/app/interfaces/icdashboard';
import { CdashboardService } from 'src/app/services/cdashboard.service';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent implements OnInit {
  job_title: string = '';
  
  jobs: Icdashboard[] = [];

  constructor(private router: Router, private jobService: CdashboardService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
  }
  
  navigateToApplyjob(): void {
    this.router.navigate(['/apply-job']);
  }


}
