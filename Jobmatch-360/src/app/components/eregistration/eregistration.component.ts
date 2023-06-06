import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { EmployerModal } from 'src/app/_modals/employer.modal';

@Component({
  selector: 'app-eregistration',
  templateUrl: './eregistration.component.html',
  styleUrls: ['./eregistration.component.css']
})
export class EregistrationComponent implements OnInit {
  employerData: any = new EmployerModal();

  constructor(private employerService: EmployerServiceService,
    private router: Router) { }

  ngOnInit() {

  }

  onSubmit(registrationForm : any) {
    (<any>Object).values(registrationForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    this.employerService.createEmployer(this.employerData)
      .subscribe(response => {
        this.employerData = response;
        this.router.navigate(['/edashboard']);
      });
  }
}
