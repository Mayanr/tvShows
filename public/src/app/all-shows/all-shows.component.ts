import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


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

  constructor(
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.fetchAPI();
    this.filterFor = { genre: ''};
    this.filteredData;
    // this.genre;
  }

  fetchAPI() {
    let obs = this._httpService.fetchAllfromAPI();
    obs.subscribe(data => {
      this.apiData$ = data;
      console.log(data)
  }) 
}

  // onShowClick(id){
  //   console.log('the show id is:' , id);
  // }

  filter(){
    this.filteredData = [];
    console.log(this.filterFor)
    let obs = this._httpService.searchGenres(this.filterFor);
    obs.subscribe(data => {
      console.log("data is" , data);
      for(var d of data){
        for(var g of d.genres){
          if(g === this.filterFor.genre){
            this.filteredData.push(d);
          }
        }
      }
        console.log(this.filteredData);
        this.apiData$ = this.filteredData;
      // this.filteredData = data;
      // this.apiData$ = data
    })
  }

  onMousemove(id){
    // console.log('the show id is:' , id);
  }

}
