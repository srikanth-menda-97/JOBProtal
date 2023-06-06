import { Component } from '@angular/core';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent {
  employerData: any;
  constructor(private employerService: EmployerServiceService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    let payload: any;
    this.employerService.createEmployer(payload)
      .subscribe(response => {
        this.employerData = response;
      });
  }
}
