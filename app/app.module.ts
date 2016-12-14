import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot(), BrowserModule],
  declarations: [ 
                  AppComponent,
                  CarouselComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
