import {Component, OnDestroy, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener(element) {
          return element.find('img');
        }
      }

    });
    $('.owl-carousel').owlCarousel( {
      items: 3,
      lazyLoad: true,
      margin: 30,
    });
  }
  ngOnDestroy() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

}
