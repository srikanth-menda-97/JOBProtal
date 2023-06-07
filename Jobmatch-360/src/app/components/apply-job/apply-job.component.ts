import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iapplication } from 'src/app/interfaces/iapplication';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit{
  resume : File | null = null;
  cover_Letter: string = '';
  candidateId: any;
  jobId: any;

  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.candidateId = this.activatedRoute.snapshot.params["term"];
    this.jobId = this.activatedRoute.snapshot.params["job_id"];
  }
  submitApplication() {
   
    const newApplication = new FormData();
    if (this.resume) {
      newApplication.append('resume', this.resume, this.resume.name);
      console.log(newApplication);
    }
    newApplication.append('cover_letter', this.cover_Letter);
    newApplication.append('candidate_id', this.candidateId);
    newApplication.append('job_id', this.jobId);
    console.log(newApplication);
    this.applicationService.submitApplication(newApplication)
      .subscribe(
        response => {
          console.log('Application created successfully:', response);
          // Handle success scenario, such as showing a success message
        },
        error => {
          console.error('Error creating application:', error);
          // Handle error scenario, such as showing an error message
        }
      );
  }

  onResumeSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.resume = inputElement.files[0];
    } else {
      this.resume = null;
    }
  }
   

}


