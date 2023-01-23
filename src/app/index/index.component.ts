import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';
declare var $: any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const rellaxHeader = new Rellax('.rellax-header');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');


    $('.headerwrap').backstretch([
      '../assets/img/bg/bg1.jpg',
      '../assets/img/bg/bg2.jpg',
      '../assets/img/bg/bg3.jpg'
    ], {
      duration: 5000,
      fade: 500
    });

    $('.smooth-scoll').on('click', function foo(){

      function scrollTo( target ) {
        if ( target.length ) {
          $('html, body').stop().animate( { scrollTop: target.offset().top }, 1500);
        }
      }
      scrollTo( $('#pres') );
    });

    $('.rotate').textrotator({
      animation: 'dissolve',
      separator: ',',
      speed: 5000 // How many milliseconds until the next word show.
    });
    $('#arrow').hover(
      function() {
        $(this).attr('src', '../../assets/img/arrow.png');
      },
      function() {
        $(this).attr('src', '../../assets/img/double-arrow.png');
      }
    );
  }
}
