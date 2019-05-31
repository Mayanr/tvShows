import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit {
  apiData$: any = []; 
  filterFor: any;
  // genre: any;
  filteredData: any = [];
  // starring: any = [];
  hoveredId: any;
  noShows: any;
  // hovered = false;


  constructor(
    private spinner: NgxSpinnerService,
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.fetchAPI();
    this.filterFor = { genre: '', rating: 0};
    // this.filteredData;
    // this.starring ;
    // this.hovered;
    // this.genre;

      /** spinner starts on init */
      this.spinner.show();
   
      setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
      }, 2000);
    
  }

  fetchAPI() {
    let obs = this._httpService.fetchAllfromAPI();
    obs.subscribe((data: any) => {
      for(var d of data){
        d.summary = d.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
        if(d.summary.length > 280){
          d.summary = d.summary.substring(0,280) + "...";
        }
      }
      this.apiData$ = data;
      console.log("from fetch API", this.apiData$);
  }) 
}

  // onShowClick(id){
  //   console.log('the show id is:' , id);
  // }

  filter(){

    // #1 all genres & and all ratings
    if(this.filterFor.genre == 'all' && this.filterFor.rating == 0){
      console.log('genre is' ,this.filterFor.genre, "and rating is", this.filterFor.rating, 'in the if statement')
      this.fetchAPI();
    } else {

    // # 2, 3 
    this.filteredData = [];
    console.log(this.filterFor)
    let obs = this._httpService.searchGenres(this.filterFor);
    obs.subscribe((data: any) => {

      for(var d of data){
        d.summary = d.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
        if(d.summary.length > 280){
          d.summary = d.summary.substring(0,279) + "...";
        }
      }

      // #2 specific genre & all or any ratings
      for(var d of data){
        if(this.filterFor.genre != 'all'){
          for(var g of d.genres){
            if(g === this.filterFor.genre && d.rating.average >= this.filterFor.rating){
              this.filteredData.push(d);
            }
          }
        }
        // if(d.rating.average >= this.filterFor.rating){
        //   this.filteredData.push(d);
        // }
        
        // #3 specific rating & any or all genre
         else if(this.filterFor.rating !=0 && d.rating.average >= this.filterFor.rating){
            this.filteredData.push(d);
          }
        }
        console.log(this.filteredData, "is the filtered data");
        if(this.filteredData.length === 0){
          this.noShows = `<h3> Sorry, no shows found</h3>`;
        } else{
          this.noShows = ``;
        }

        this.apiData$ = this.filteredData;
      
      // this.filteredData = data;
      // this.apiData$ = data
    })
    }
  }

  onMouseover(id){
    // this.hovered =true;
    this.hoveredId = id;
  }

  onMouseout(){
    this.hoveredId = null;
  }

}
