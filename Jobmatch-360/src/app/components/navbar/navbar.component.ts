import { Component,  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  openCandidateMenu: boolean = false;
  openEmployerMenu: boolean = false;
  navbarclass:boolean = false;
  openMenu(){
    this.navbarclass =! this.navbarclass;
  }
}

  //mobileNavActive = false;

  //toggleMobileNav(event: any): void{

    //this.mobileNavActive = !this.mobileNavActive;
    //event.target.classList.toggle('bi bi-list');
    //const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    //const navbarMobile = document.querySelector('.navbar-mobile');

    //if (mobileNavToggle && navbarMobile) {
      //mobileNavToggle.classList.toggle('bi bi-list');
      //navbarMobile.classList.toggle('active');
    
  

  