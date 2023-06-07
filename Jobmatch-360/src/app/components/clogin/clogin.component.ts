import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icandidate } from 'src/app/interfaces/icandidate';
import { Iclogin } from 'src/app/interfaces/iclogin';
import { CandidateService } from 'src/app/services/candidate.service';
import { IcloginService } from 'src/app/services/iclogin.service';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent {

email!: string;
 password!:string ;
  errorMessage!: string;
  candidate: Icandidate = {
    candidate_id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  };
  constructor(private router: Router, private candidateService: CandidateService) { }

  login(loginForm: any) {
    (<any>Object).values(loginForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });

    this.candidateService.loginCandidate(this.candidate).subscribe({
      next: (response: any) => {
        let newCandidate : Icandidate = response.candidate;
        console.log('Candidate Login successfully!', newCandidate);
        alert('Login successful!');
        this.router.navigate(['/cdashboard', newCandidate.candidate_id]);
      },
      error : (error) => {
        console.error('Candidate login failed:', error);
        alert('Login failed. Please try again later.');

      },
    });
  }
  
  
}
