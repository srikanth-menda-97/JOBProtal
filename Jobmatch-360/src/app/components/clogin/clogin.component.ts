import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iclogin } from 'src/app/interfaces/iclogin';
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
  constructor(private router: Router, private icloginService: IcloginService) { }

  login() {
    this.icloginService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/cdashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'An error occurred during login.';
      }
    );
  }
  
  
}
