import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IviewJob } from 'src/app/interfaces/iview-job';
import { ViewJobService } from 'src/app/services/view-job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {


  job_id : number = 0;
  job : IviewJob | undefined;

  constructor(
    private route: ActivatedRoute,
    private viewjobService: ViewJobService,
    private router: Router
   
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.job_id = Number(params['id']);
      this.getJobDetails();
    });
  }

  getJobDetails(): void {

    if (isNaN(this.job_id)) {
      return;
    }

    this.viewjobService.getJobById(this.job_id)
      .subscribe((job: IviewJob)=>{
        this.job = job;
        console.log(job); 
      });
  }

  navigateToApplyjob(): void {
    this.router.navigate(['/apply-job']);
  }
}



