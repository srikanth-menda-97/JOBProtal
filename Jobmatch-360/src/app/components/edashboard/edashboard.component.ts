import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-edashboard',
  templateUrl: './edashboard.component.html',
  styleUrls: ['./edashboard.component.css']
})
export class EdashboardComponent implements OnInit {
  employerId: number;
  jobData: any = [];
  constructor(private employerService: EmployerServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employerId = this.activatedRoute.snapshot.params["term"];
    this.getJobData();
  }

  getJobData() {
    this.employerService.getPostedJobData(this.employerId)
      .subscribe((response: any) => {
        console.log(response);
        this.jobData = response;
      });
  }

  openJobPostForm() {
    this.router.navigate(["/edashboard", this.employerId, "post-job"])
  }
}
