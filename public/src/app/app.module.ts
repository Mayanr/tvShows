import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating'
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ViewDetailsComponent,
    AllShowsComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    StarRatingModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
