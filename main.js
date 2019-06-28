(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-shows/all-shows.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-shows/all-shows.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    opacity:0.1;\r\n    background: linear-gradient(to bottom right, white , silver);\r\n    /* z-index: 1;   */\r\n}\r\n\r\n\r\n#summary_shown {\r\n    position: absolute; \r\n    bottom: 0; \r\n    left: 0; \r\n    margin: 0; \r\n    padding: 10px; \r\n    padding-top: 45%; \r\n    padding-bottom: 5px;\r\n    max-width: 210px; \r\n    overflow: hidden;\r\n    max-height: 295px; \r\n    background-image: linear-gradient(to bottom  , rgba(0,0,0,0), rgba(0,0,0,1));font-size: 12px;  \r\n}\r\n\r\n\r\n/* #searchBox{\r\n    background-color: whitesmoke;\r\n    padding: 15px;\r\n    border-radius: 30px;\r\n} */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXNob3dzL2FsbC1zaG93cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDREQUE0RDtJQUM1RCxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDRFQUE0RSxDQUFDLGVBQWU7QUFDaEc7OztBQUVBOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9hbGwtc2hvd3MvYWxsLXNob3dzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgb3BhY2l0eTowLjE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB3aGl0ZSAsIHNpbHZlcik7XHJcbiAgICAvKiB6LWluZGV4OiAxOyAgICovXHJcbn1cclxuXHJcblxyXG4jc3VtbWFyeV9zaG93biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgYm90dG9tOiAwOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgcGFkZGluZy10b3A6IDQ1JTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMjk1cHg7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSAgLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpKTtmb250LXNpemU6IDEycHg7ICBcclxufVxyXG5cclxuLyogI3NlYXJjaEJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufSAqL1xyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/all-shows/all-shows.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-shows/all-shows.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id= \"searchBox\">\n<!-- <h5>\n  Discover a new show\n</h5> -->\n\n\n<form  (submit)='filter()'>\n  <div>\n  <p style='display: inline-block; margin: 10px;'>Genre:\n    <select name=\"genre\" [(ngModel)]='filterFor.genre'>\n      <option selected value='all'>All</option>\n      <option value=\"Drama\">Drama</option>\n      <option value=\"Science-Fiction\">Science-Fiction</option>\n      <option value=\"Thriller\">Thriller</option>\n      <option value=\"Action\">Action</option>\n      <option value=\"Crime\">Crime</option>\n      <option value=\"Adventure\">Adventure</option>\n      <option value=\"Music\">Music</option>\n      <option value=\"Romance\">Romance</option>\n      <option value=\"Mystery\">Mystery</option>\n      <option value=\"Supernatural\">Supernatural</option>\n      <option value=\"Fantasy\">Fantasy</option>\n      <option value=\"Horror\">Horror</option>\n      <option value=\"Family\">Family</option>\n      <option value=\"Anime\">Anime</option>\n      <option value=\"Comedy\">Comedy</option>\n      <option value=\"History\">History</option>\n      <option value=\"Medical\">Medical</option>\n      <option value=\"Legal\">Legal</option>\n      <option value=\"Western\">Western</option>\n      <option value=\"Espionage\">Espionage</option>\n      <option value=\"War\">War</option>\n      <option value=\"Sports\">Sports</option>\n    </select>\n  </p>\n  \n    <h6 style='display: inline-block; margin: 10px;'>Rating:\n      <select name=\"rating\" [(ngModel)]='filterFor.rating'>\n        <option selected value=\"0\">All</option>\n        <option value=\"8\">4+</option>\n        <option value=\"6\">3+</option>\n        <option value=\"4\">2+</option>\n      </select>\n    </h6>\n\n\n\n    <input type=\"submit\" value=\"Search\" style='display: inline-block; margin: 0 20px;'>\n\n</div>\n</form>\n\n</div>\n\n  <h6 [innerHTML]=\"noShows\" style=\"padding: 15px; color: darkblue;\"></h6>\n  <!-- <div>\n      <p *ngFor = \"let s of starring\" style='display: inline-block; width: 200px;'>\n      {{ s.person.name }}\n    </p>\n  </div> -->\n<div *ngFor = \"let d of apiData$\" class=\"show_box\" >\n  <h5 style=\"font-weight: bold \">{{d.name}} </h5>\n  <h6>Type: {{d.type}} </h6>\n  <div *ngIf = \"d.rating.average\" style=\"max-width: 100px; text-align: left;\">\n\n      <!-- <div class=\"rating value-1 half\">\n        <div class=\"star-container\">\n          <star-rating [starType]=\"'svg'\" [rating]=1.5></star-rating>\n        </div>\n      </div> -->\n\n      \n      <star-rating [starType]=\"'svg'\" [rating]='d.rating.average/2' [showHalfStars]=\"true\"></star-rating>\n      </div>\n\n\n  <!-- <div *ngIf = \"d.rating.average>=8\">\n      <h6 class=\"highly__rated\" style=\"color: green\"> Rating: {{d.rating.average}} </h6>\n  </div>\n\n  <div *ngIf = \"d.rating.average>=6 && d.rating.average<8\">\n      <h6 class=\"avg__rated\" style=\"color: orange\"> Rating: {{d.rating.average}} </h6>\n  </div>\n\n  <div *ngIf = \"d.rating.average<=6 && d.rating.average!=null\">\n      <h6 class=\"low__rated\" style=\"color: red\"> Rating: {{d.rating.average}} </h6>\n  </div>-->\n  \n  <div *ngIf = \"d.rating.average==null\">\n      <h6 class=\"not__rated\" style=\"color: black\"> Rating: Not Available </h6>\n  </div> \n\n  <a [routerLink]=\"['/shows/', d.id]\"  id='small_pic' >\n    <div id='hovered_show' style=\"position: relative; color: white;\" (mouseenter)= \"onMouseover(d.id)\" (mouseleave) = \"onMouseout()\">\n      <img src=\"{{d.image.medium}}\" id='pic_hover'>\n        <p *ngIf=\"hoveredId===d.id\"  id='summary_shown' >\n          {{d.summary}}\n        </p>\n    </div>\n  </a>\n      <!-- <p *ngIf= \"hoveredId===d.id\" style=\" position: absolute; bottom: 0; left: 0; max-width: 210px; max-height: 280px\">\n          {{d.summary }}</p> -->\n</div>\n \n  \n\n"

/***/ }),

/***/ "./src/app/all-shows/all-shows.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-shows/all-shows.component.ts ***!
  \**************************************************/
/*! exports provided: AllShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllShowsComponent", function() { return AllShowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var AllShowsComponent = /** @class */ (function () {
    // hovered = false;
    function AllShowsComponent(spinner, _router, _httpService) {
        this.spinner = spinner;
        this._router = _router;
        this._httpService = _httpService;
        this.apiData$ = [];
        // genre: any;
        this.filteredData = [];
    }
    AllShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAPI();
        this.filterFor = { genre: '', rating: 0 };
        // this.filteredData;
        // this.starring ;
        // this.hovered;
        // this.genre;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 2000);
    };
    AllShowsComponent.prototype.fetchAPI = function () {
        var _this = this;
        var obs = this._httpService.fetchAllfromAPI();
        obs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var d = data_1[_i];
                d.summary = d.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
                if (d.summary.length > 280) {
                    d.summary = d.summary.substring(0, 280) + "...";
                }
            }
            _this.apiData$ = data;
            console.log("from fetch API", _this.apiData$);
        });
    };
    // onShowClick(id){
    //   console.log('the show id is:' , id);
    // }
    AllShowsComponent.prototype.filter = function () {
        var _this = this;
        // #1 all genres & and all ratings
        if (this.filterFor.genre == 'all' && this.filterFor.rating == 0) {
            console.log('genre is', this.filterFor.genre, "and rating is", this.filterFor.rating, 'in the if statement');
            this.fetchAPI();
        }
        else {
            // # 2, 3 
            this.filteredData = [];
            console.log(this.filterFor);
            var obs = this._httpService.searchGenres(this.filterFor);
            obs.subscribe(function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var d = data_2[_i];
                    d.summary = d.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
                    if (d.summary.length > 280) {
                        d.summary = d.summary.substring(0, 279) + "...";
                    }
                }
                // #2 specific genre & all or any ratings
                for (var _a = 0, data_3 = data; _a < data_3.length; _a++) {
                    var d = data_3[_a];
                    if (_this.filterFor.genre != 'all') {
                        for (var _b = 0, _c = d.genres; _b < _c.length; _b++) {
                            var g = _c[_b];
                            if (g === _this.filterFor.genre && d.rating.average >= _this.filterFor.rating) {
                                _this.filteredData.push(d);
                            }
                        }
                    }
                    // if(d.rating.average >= this.filterFor.rating){
                    //   this.filteredData.push(d);
                    // }
                    // #3 specific rating & any or all genre
                    else if (_this.filterFor.rating != 0 && d.rating.average >= _this.filterFor.rating) {
                        _this.filteredData.push(d);
                    }
                }
                console.log(_this.filteredData, "is the filtered data");
                if (_this.filteredData.length === 0) {
                    _this.noShows = "<h3> Sorry, no shows found</h3>";
                }
                else {
                    _this.noShows = "";
                }
                _this.apiData$ = _this.filteredData;
                // this.filteredData = data;
                // this.apiData$ = data
            });
        }
    };
    AllShowsComponent.prototype.onMouseover = function (id) {
        // this.hovered =true;
        this.hoveredId = id;
    };
    AllShowsComponent.prototype.onMouseout = function () {
        this.hoveredId = null;
    };
    AllShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-shows',
            template: __webpack_require__(/*! ./all-shows.component.html */ "./src/app/all-shows/all-shows.component.html"),
            styles: [__webpack_require__(/*! ./all-shows.component.css */ "./src/app/all-shows/all-shows.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AllShowsComponent);
    return AllShowsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-shows/all-shows.component */ "./src/app/all-shows/all-shows.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");






var routes = [
    { path: 'shows', component: _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_3__["AllShowsComponent"] },
    { path: 'shows/:id', component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_4__["ViewDetailsComponent"] },
    { path: 'shows/topRated', component: _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_5__["TopRatedComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/shows' },
    { path: '**', component: _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_3__["AllShowsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerText h1 {\r\n    display: inline-block;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    font-size: 100px;\r\n    padding: 0 20%;\r\n    /* margin-top: 25px; */\r\n}\r\n\r\n\r\n\r\n#headerText {\r\n    padding-bottom: 225px;\r\n}\r\n\r\n\r\n\r\n.wrapper{\r\n    min-width: 100%;\r\n    height: 600px;\r\n    overflow: hidden;\r\n    z-index: -100;\r\n    position: absolute;\r\n    top: -10px; \r\n    left: 0px;\r\n}\r\n\r\n\r\n\r\n.wrapper #myVideo{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -100;\r\n    opacity: 0.5;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0VBQXNFO0lBQ3RFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOzs7O0FBSUE7SUFDSSxxQkFBcUI7QUFDekI7Ozs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7OztBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyVGV4dCBoMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDAgMjAlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cclxufVxyXG5cclxuXHJcblxyXG4jaGVhZGVyVGV4dCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjI1cHg7XHJcbn1cclxuXHJcblxyXG4ud3JhcHBlcntcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwcHg7IFxyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciAjbXlWaWRlb3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n\n<header style=\"text-align:center;\" >\n    <div class=\"wrapper\">\n      <video autoplay muted loop id=\"myVideo\">\n          <!-- <source src=\"../assets/images/Film-set.mp4\" type=\"video/mp4\"> -->\n          <source src=\"assets/images/Film-set.mp4\" type=\"video/mp4\">\n      </video>\n    </div> \n    \n  <div id='headerText'>\n    <h1 >\n      What Will You Binge Next?\n    </h1>\n    <h5 id='tagline' style=\"font-style: italic;\">\n      Select from an extensive collection of high-quality television shows!\n    </h5>\n</div>\n\n</header>\n<br>\n\n\n<router-outlet></router-outlet>\n\n <p style=\"text-align: center; font-size: 11px; padding-top: 55px;\">Designed & build by Mayan Rothstein  <br/>\n            {{'\\u00A9'}} 2019</p>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, spinner) {
        this._httpService = _httpService;
        this.spinner = spinner;
    }
    AppComponent.prototype.ngOnInit = function () {
        /** spinner starts on init */
        // this.spinner.show();
        // setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.hide();
        // }, 2000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-shows/all-shows.component */ "./src/app/all-shows/all-shows.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_7__["ViewDetailsComponent"],
                _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_8__["AllShowsComponent"],
                _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_9__["TopRatedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_11__["StarRatingModule"].forRoot()
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.fetchAllfromAPI = function () {
        return this._http.get('//api.tvmaze.com/shows');
    };
    HttpService.prototype.getOneShow = function (show_id) {
        return this._http.get("//api.tvmaze.com/shows/" + show_id);
    };
    HttpService.prototype.searchGenres = function (filter) {
        console.log('from service', filter.rating, filter.genre);
        //  /search/shows?q=:query
        // return this._http.get(`http://api.tvmaze.com/search/q=${filter.genre}`);
        return this._http.get("//api.tvmaze.com/shows");
    };
    HttpService.prototype.getStars = function (show_id) {
        return this._http.get("//api.tvmaze.com/shows/" + show_id + "/cast");
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/top-rated/top-rated.component.css":
/*!***************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1yYXRlZC90b3AtcmF0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  top-rated works!\n</p>\n"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.ts ***!
  \**************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent() {
    }
    TopRatedComponent.prototype.ngOnInit = function () {
    };
    TopRatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! ./top-rated.component.html */ "./src/app/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.css */ "./src/app/top-rated/top-rated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-details/view-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\r\n.flip-box {\r\n    /* background-color: transparent; */\r\n    width: 75px;\r\n    height: 150px;\r\n    /* border: 1px solid #f1f1f1; */\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px; /* Remove this if you don't want the 3D effect */\r\n    display: inline-block;\r\n    margin-left: 15px;\r\n  }\r\n/* This container is needed to position the front and back side */\r\n.flip-box-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: -webkit-transform 0.8s;\r\n    transition: transform 0.8s;\r\n    transition: transform 0.8s, -webkit-transform 0.8s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n  }\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-box:hover .flip-box-inner {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n/* Position the front and back side */\r\n.flip-box-front, .flip-box-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n  }\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-box-front {\r\n    color: black;\r\n    font-size: 11px;\r\n  }\r\n/* Style the back side */\r\n.flip-box-back {\r\n    color: black;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    font-size: 11px;\r\n  }\r\n.official_site_link{\r\n      text-align: center;\r\n      margin: 0 auto;\r\n      margin-bottom: 50px;\r\n  }\r\n#selfStars {\r\n    display: inline-block;\r\n    margin-left: 15px;\r\n    width: 75px;\r\n    height: 150px;\r\n    color: black;\r\n    font-size: 11px;\r\n    vertical-align: top;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1PQUFtTztBQUNuTztJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUUsZ0RBQWdEO0lBQ3JFLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFFQSxpRUFBaUU7QUFDakU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0NBQTBCO0lBQTFCLDBCQUEwQjtJQUExQixrREFBMEI7SUFDMUIsb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtBQUVBLDhFQUE4RTtBQUM5RTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7QUFFQSxxQ0FBcUM7QUFDckM7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCO0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFQSx3QkFBd0I7QUFDeEI7SUFDRSxZQUFZO0lBQ1osa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixlQUFlO0VBQ2pCO0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLG1CQUFtQjtFQUN2QjtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGZsaXAgYm94IGNvbnRhaW5lciAtIHNldCB0aGUgd2lkdGggYW5kIGhlaWdodCB0byB3aGF0ZXZlciB5b3Ugd2FudC4gV2UgaGF2ZSBhZGRlZCB0aGUgYm9yZGVyIHByb3BlcnR5IHRvIGRlbW9uc3RyYXRlIHRoYXQgdGhlIGZsaXAgaXRzZWxmIGdvZXMgb3V0IG9mIHRoZSBib3ggb24gaG92ZXIgKHJlbW92ZSBwZXJzcGVjdGl2ZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbi5mbGlwLWJveCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7ICovXHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbiAgLmZsaXAtYm94LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuICBcclxuICAvKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXHJcbiAgLmZsaXAtYm94OmhvdmVyIC5mbGlwLWJveC1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuICAuZmxpcC1ib3gtZnJvbnQsIC5mbGlwLWJveC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cclxuICAuZmxpcC1ib3gtZnJvbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXHJcbiAgLmZsaXAtYm94LWJhY2sge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5cclxuICAub2ZmaWNpYWxfc2l0ZV9saW5re1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI3NlbGZTdGFycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button style=\"padding: 10px;\"  [routerLink]=\"['/shows']\" >Back</button>  \n<br>\n\n<div class='show_profile'>\n\n  <h2>{{ thisShow.name }}</h2>\n  <h5>{{ thisShow.type }} | {{ thisShow.language }}</h5>\n  <h6>Status: {{ thisShow.status }}</h6>\n  <h6>Runtime: {{ thisShow.runtime }} minutes</h6>\n\n   \n    <div *ngIf = \"thisShow.rating.average\" style=\"max-width: 100px; text-align: left; display: inline-block; font-size: 12px;\">\n      <!-- <div class=\"star-container\"> -->\n      <star-rating [starType]=\"'svg'\" [rating]='thisShow.rating.average/2 ' [showHalfStars]=\"true\">\n      </star-rating>\n      ({{ thisShow.rating.average/2 }} Stars)\n    <!-- </div> --> \n    </div>\n\n\n  <!-- <h6>Average Rating: {{ thisShow.rating.average }} stars</h6> -->\n  <h6>Premiered: {{ thisShow.premiered }}</h6>\n\n  <h6>Synopsis:</h6> \n    <p class='summary'>{{ summary }}</p>\n\n  <h6>Genre(s):</h6>\n  <ul *ngFor=\"let genre of thisShow.genres\">\n    <li>{{  genre }}</li>\n  </ul>\n<br>\n\n\n    <div *ngIf = \"!noStars\">\n\n      <h6 >Starring:</h6>\n      <p style=\"font-style: italic;\">Hover over the actor to see the character (s)he portrays</p>\n\n      <div *ngFor=\"let s of starring\" class=\"flip-box\">\n          <span  *ngIf = \"s.character.image != null && s.person.image != null\">\n              <div class=\"flip-box-inner\">\n                <div class=\"flip-box-front\">\n\n      <img src=\"{{ s.person.image.medium }}\" height=\"100\"> <p>{{s.person.name}}</p>\n                </div>\n\n                <div class=\"flip-box-back\">  \n      <img src=\"{{ s.character.image.medium }}\" height=\"100\" ><p>{{s.character.name}}</p> \n        \n            </div>\n          </div>\n          <br>\n        </span>\n    </div>\n  </div>\n\n\n    <div *ngIf = \"noStars\">\n      <h6 >Starring:</h6>\n      <br>\n      <div *ngFor=\"let s of starring\" id=\"selfStars\">\n        <img src=\"{{ s.person.image.medium }}\" height=\"100\"> <p>{{s.person.name}}</p>\n      </div>\n    </div>\n\n</div>\n\n<img class='show_profile_pic' src=\"{{thisShow.image.original}}\">\n\n<div class='official_site_link' *ngIf= \"thisShow.officialSite != null\">\n  <a href=\"{{ thisShow.officialSite }}\" target=\"_blank\"><button style=\"padding: 15px;\" >More details on the official site</button></a>\n</div> "

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-details/view-details.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            // console.log(params["id"])
            _this.showId = params['id'];
        });
        this.getThisShow(this.showId);
        this.thisShow = { name: '', type: '', language: '', status: '', runtime: '', premiered: '', genre: [], rating: '', image: '' },
            this.getStars(this.showId);
    };
    ViewDetailsComponent.prototype.getThisShow = function (show_id) {
        var _this = this;
        console.log(this.showId);
        var obs = this._httpService.getOneShow(this.showId);
        obs.subscribe(function (data) {
            //  console.log("got the one rider:" , data);
            _this.thisShow = data;
            _this.summary = _this.thisShow.summary.replace('<p>', ' ').replace('<b>', ' ').replace('</b>', ' ').replace('</p>', ' ').replace('<br>', '').replace('<p>', ' ').replace('</p>', ' ').replace('</i>', ' ').replace('<i>', ' ').replace('<p>', ' ').replace('</p>', ' ');
            console.log(_this.thisShow);
        });
    };
    ViewDetailsComponent.prototype.getStars = function (show_id) {
        var _this = this;
        var obs = this._httpService.getStars(this.showId);
        obs.subscribe(function (data) {
            console.log("get starts is:", data);
            _this.starring = data;
            for (var _i = 0, _a = _this.starring; _i < _a.length; _i++) {
                var s = _a[_i];
                if (s.self === true) {
                    _this.noStars = true;
                    console.log('do not display starring section', _this.noStars);
                }
            }
        });
    };
    ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.css */ "./src/app/view-details/view-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aroth\Desktop\CodingDojo\MEAN\Angular\APIproj\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map