import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { JobModal } from 'src/app/_modals/job.modal';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobDetail: any = new JobModal();

  constructor(private employerService: EmployerServiceService,
    private router: Router, private activatedRoute: ActivatedRoute,) {

  }
  ngOnInit(): void {
    this.jobDetail.employer_id = this.activatedRoute.snapshot.params["term"];
  }

  onSubmit(jobForm : any) {
    (<any>Object).values(jobForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    this.employerService.createJob(this.jobDetail)
      .subscribe(
        {
          next: (response: any) => {
            console.log('Job created successfully!', response);
            alert('Job created successful!');
            console.log(response);
            this.jobDetail = response;
            this.router.navigate(['/edashboard', this.jobDetail.employer_id]);
          },
          error : (error: any) => {
            console.error('Job creation failed:', error);
            alert('Job creation failed. Please try again.');
          },
        });
  }
}
