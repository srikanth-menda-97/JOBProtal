import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { EmployerModal } from 'src/app/_modals/employer.modal';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent {
  employerData: any = new EmployerModal();
  constructor(private employerService: EmployerServiceService,
    private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(loginForm : any) {
    (<any>Object).values(loginForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    this.employerService.loginEmployer(this.employerData)
      .subscribe((response: any) => {
        console.log(response);
        this.employerData = response.employer;
        this.router.navigate(['/edashboard', this.employerData.employer_id]);
      });
  }
}
