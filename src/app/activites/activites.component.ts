import {Component, OnDestroy, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    $('.owl-carousel').owlCarousel( {
      items: 1,
      loop : true,
      center : true,
      autoWidth : true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      navContainer: '.main-content .custom-nav'
    });
  }
  ngOnDestroy() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

}
