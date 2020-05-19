import {Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {OnInit} from '@angular/core';
import {Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjetWebEssenciel';
  @ViewChild(IndexComponent) navbar: IndexComponent;

  constructor(private renderer: Renderer2, private element: ElementRef, public location: Location) {
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this.renderer.listen('window', 'scroll', (event) => {
      const n = window.scrollY;
      let l = this.location.path();
      l = l.split('/')[1];

      if (n >= 150 || window.pageYOffset >= 150) {
        navbar.classList.remove('navbar-transparent');
      } else if (l !== 'index') {
        // remove logic
        navbar.classList.remove('navbar-transparent');
      } else{
        navbar.classList.add('navbar-transparent');

      }
    });
  }
}
