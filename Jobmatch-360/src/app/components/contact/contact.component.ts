import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ContactModal } from 'src/app/_modals/contact.modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData: any = new ContactModal();
  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    
  }

  onSubmit(loginForm : any) {
    (<any>Object).values(loginForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    this.contactService.contactUs(this.contactData)
      .subscribe(
        {
          next: (response: any) => {
            console.log('Contact information sent successfully!', response);
            alert('Contact information sent successfully!');
            console.log(response);
            this.contactData = response.employer;
            this.contactData = new ContactModal();
            loginForm.reset();

            Object.keys(loginForm.controls).forEach(key => {
              loginForm.get(key).setErrors(null);
            });
          },
          error : (error: any) => {
            console.error('Contact information sent failed:', error);
            alert('Contact information sent. Please try again.');
          },
        });
  }
}
