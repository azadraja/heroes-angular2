import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'carousel',
  templateUrl: './../app/carousel.component.html',
})
export class CarouselComponent  { 
    constructor(config: NgbCarouselConfig) {
    
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
  } 
}
