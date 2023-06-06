import { Component } from '@angular/core';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { EmployerModal } from 'src/app/_modals/employer.modal';

@Component({
  selector: 'app-eregistration',
  templateUrl: './eregistration.component.html',
  styleUrls: ['./eregistration.component.css']
})
export class EregistrationComponent {
  employerData: any = new EmployerModal();

  constructor(private employerService: EmployerServiceService) { }

  ngOnInit() {

  }

  onSubmit(registrationForm : any) {
    let payload: any;
    this.employerService.createEmployer(this.employerData)
      .subscribe(response => {
        this.employerData = response;
      });
  }
}
