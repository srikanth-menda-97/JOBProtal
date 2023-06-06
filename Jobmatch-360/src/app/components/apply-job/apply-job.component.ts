import { Component } from '@angular/core';
import { Iapplication } from 'src/app/interfaces/iapplication';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent {

  resume : File | null = null;
  cover_Letter: string = '';

  
  

  constructor(private applicationService: ApplicationService) { }

  submitApplication() {
   
    const newApplication = new FormData();
    if (this.resume) {
      newApplication.append('resume', this.resume, this.resume.name);
    }
    newApplication.append('coverLetter', this.cover_Letter);

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


