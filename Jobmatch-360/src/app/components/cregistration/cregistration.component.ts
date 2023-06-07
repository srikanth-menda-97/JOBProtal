import { Component } from '@angular/core';
import { Icandidate } from 'src/app/interfaces/icandidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cregistration',
  templateUrl: './cregistration.component.html',
  styleUrls: ['./cregistration.component.css']
})
export class CregistrationComponent {

  agree: boolean = false;
  isFormSubmitted: boolean = false;

  candidate: Icandidate = {
    candidate_id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  };

  constructor(private candidateService: CandidateService,
    private router: Router) { }
  registerCandidate(registerForm : any): void {

    this.isFormSubmitted = true;
    (<any>Object).values(registerForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });

    this.candidateService.registerCandidate(this.candidate).subscribe({
      next: (newCandidate: Icandidate) => {
        // console.log('Candidate registered successfully!', newCandidate);
        // alert('Registration successful!');
        this.clearForm();
        this.router.navigate(['/cdashboard', newCandidate.candidate_id]);
      },
      error : (error) => {
        console.error('Candidate registration failed:', error);
        alert('Registration failed. Please try again later.');

      },
    });
  }
  private isFormInvalid(): boolean {
    return (
      !this.candidate.name ||
      !this.candidate.username ||
      !this.candidate.email ||
      !this.candidate.phone ||
      !this.candidate.password 
      
    );
  }
  private clearForm(): void {
    this.candidate = {
      candidate_id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      password: '',
    };
  }
}
