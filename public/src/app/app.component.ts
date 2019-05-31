import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private _httpService: HttpService,
    private spinner: NgxSpinnerService){}
  
    ngOnInit() {
      /** spinner starts on init */
      // this.spinner.show();
   
      // setTimeout(() => {
      //     /** spinner ends after 5 seconds */
      //     this.spinner.hide();
      // }, 2000);
    }

}
