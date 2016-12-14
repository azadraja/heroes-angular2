import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
    <carousel></carousel>
  </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
