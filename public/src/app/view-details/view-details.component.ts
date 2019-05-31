import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  thisShow: any;
  showId: any;
  summary: any;
  starring:any; 
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // console.log(params["id"])
      this.showId = params['id'];
    })
    this.getThisShow(this.showId);
    this.thisShow = { name: '', type: '', language:'', status:'', runtime: '', premiered: '', genre: [], rating: '', image: ''},
    this.getStars(this.showId);
  }

  getThisShow(show_id){
    console.log(this.showId);
    let obs = this._httpService.getOneShow(this.showId);
    obs.subscribe(data => {
      //  console.log("got the one rider:" , data);
       this.thisShow = data;
       this.summary = this.thisShow.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
       console.log(this.thisShow)
    })
  }

  getStars(show_id){
  let obs = this._httpService.getStars(this.showId);
    obs.subscribe(data => {
      console.log(data);
      this.starring = data;
    })
  }
}
