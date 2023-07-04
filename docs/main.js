"use strict";
(self["webpackChunkMovie_iit"] = self["webpackChunkMovie_iit"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/movie/movie.component */ 2265);
/* harmony import */ var _component_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/movie-details/movie-details.component */ 6041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_0__.MovieComponent
}, {
  path: 'movie/:id',
  component: _component_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__.MovieDetailsComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'Movie-iit';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/movie/movie.component */ 2265);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _component_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/movie-details/movie-details.component */ 6041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__.MovieComponent, _component_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__.MovieDetailsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
})();

/***/ }),

/***/ 6041:
/*!********************************************************************!*\
  !*** ./src/app/component/movie-details/movie-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieDetailsComponent: () => (/* binding */ MovieDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_littlebeast_Angular_Movie_iit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_service_movie_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/movie-api.service */ 349);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function MovieDetailsComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.getMovieDetailResult.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MovieDetailsComponent_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.trim(g_r3));
  }
}
function MovieDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_4_span_1_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getMovieDetailResult.Genre.split(",", 3));
  }
}
class MovieDetailsComponent {
  constructor(service, router) {
    this.service = service;
    this.router = router;
  }
  ngOnInit() {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getMovie(getParamId);
  }
  getMovie(id) {
    var _this = this;
    this.service.getMovieDetails(id).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_littlebeast_Angular_Movie_iit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        console.log(result, 'getmoviedetails#');
        _this.getMovieDetailResult = yield result;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  trim(str) {
    return str.replace(/ /g, "");
  }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) {
  return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_movie_api_service__WEBPACK_IMPORTED_MODULE_1__.MovieApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
MovieDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MovieDetailsComponent,
  selectors: [["app-movie-details"]],
  decls: 40,
  vars: 11,
  consts: [[1, "container"], [1, "row"], [1, "col-lg-3", "col-md-8", "col-sm-12", "text-center"], ["alt", "Movie Poster", 3, "src", 4, "ngIf"], ["class", "genre-list mt-4 mb-4 cursor-pointer", 4, "ngIf"], [1, "col-lg-5", "movie-details", "mt-2"], ["src", "../assets/star.svg", 1, "pb-1"], ["target", "_blank", 3, "href"], ["src", "../assets/imdb.png", "width", "100px", 1, "mt-2"], [1, "row", "mt-4"], [1, "col-lg-12", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], ["alt", "Movie Poster", 3, "src"], [1, "genre-list", "mt-4", "mb-4", "cursor-pointer"], ["class", "genre text-center", 4, "ngFor", "ngForOf"], [1, "genre", "text-center"]],
  template: function MovieDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MovieDetailsComponent_img_3_Template, 1, 1, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MovieDetailsComponent_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "ul")(7, "li")(8, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Released: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Writer: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Director: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Duration: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li")(30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Rating: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9)(37, "div", 10)(38, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getMovieDetailResult.Poster);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getMovieDetailResult.Genre);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.getMovieDetailResult.Title, " ( ", ctx.getMovieDetailResult.Year, " ) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getMovieDetailResult.Plot);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getMovieDetailResult.Released, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getMovieDetailResult.Writer, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getMovieDetailResult.Director, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getMovieDetailResult.Runtime, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getMovieDetailResult.imdbRating, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/title/", ctx.getMovieDetailResult.imdbID, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #ffffff;\n  padding: 20px;\n  font-size: 16px;\n  width: 90vw;\n  max-width: 80.5em;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  border-radius: 0.6em;\n  box-shadow: 1.2em 2em 3em rgba(0, 0, 0, 0.2);\n}\n\n.movie-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.movie-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  max-width: 100%;\n}\n\n.genre[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #cacaca;\n  border-radius: 20px;\n  padding: 5px 12px;\n  margin-right: 10px;\n  transition: 0.3s;\n  color: rgb(73, 73, 73);\n  cursor: pointer;\n}\n\n.genre[_ngcontent-%COMP%]:hover {\n  background-color: #cacaca;\n}\n\n@media (max-width: 768px) {\n  .col-lg-3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .col-lg-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n\n  .col-lg-5[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #E50914;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogOTB2dztcbiAgbWF4LXdpZHRoOiA4MC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xuICBib3gtc2hhZG93OiAxLjJlbSAyZW0gM2VtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1vdmllLWRldGFpbHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW92aWUtZGV0YWlscyB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZ2VucmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdlbnJlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbGctMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbC1sZy0zIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cblxuICAuY29sLWxnLTUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNTA5MTQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2265:
/*!****************************************************!*\
  !*** ./src/app/component/movie/movie.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieComponent: () => (/* binding */ MovieComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_service_movie_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/movie-api.service */ 349);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);






function MovieComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const genre_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", genre_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r11);
  }
}
function MovieComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rating_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", rating_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rating_r12);
  }
}
function MovieComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
const _c0 = function (a1) {
  return ["/movie", a1];
};
function MovieComponent_div_40_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
  }
  if (rf & 2) {
    const movie_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", movie_r13.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, movie_r13.imdbID));
  }
}
function MovieComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MovieComponent_div_40_img_2_Template, 1, 4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38)(4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const movie_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", movie_r13.Poster !== "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r13.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Year: ", movie_r13.Year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Type: ", movie_r13.Type, "");
  }
}
function MovieComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", a_r16.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, a_r16.imdbID));
  }
}
function MovieComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", a_r17.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, a_r17.imdbID));
  }
}
function MovieComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", a_r18.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, a_r18.imdbID));
  }
}
function MovieComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", c_r19.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, c_r19.imdbID));
  }
}
function MovieComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const d_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", d_r20.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, d_r20.imdbID));
  }
}
function MovieComponent_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sf_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", sf_r21.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, sf_r21.imdbID));
  }
}
function MovieComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const th_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", th_r22.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, th_r22.imdbID));
  }
}
class MovieComponent {
  constructor(service) {
    this.service = service;
    this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      movieName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    this.isSearchPerformed = false;
    this.genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western'];
    this.ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedGenre = '';
    this.selectedRating = 0;
    this.selectedYear = null;
    this.movies = [];
    this.actionMovieResult = [];
    this.adventureMovieResult = [];
    this.animationMovieResult = [];
    this.comedyMovieResult = [];
    this.documentaryMovieResult = [];
    this.sciencefictionMovieResult = [];
    this.thrillerMovieResult = [];
  }
  ngOnInit() {
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  applyFilters() {
    this.service.fetchMoviesByFilter(this.selectedGenre, this.selectedRating, this.selectedYear).subscribe(result => {
      if (result?.Search) {
        this.searchResult = result.Search.slice(0, 20);
      } else {
        this.searchResult = [];
      }
    });
  }
  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe(result => {
      this.actionMovieResult = result.Search;
    });
  }
  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe(result => {
      this.adventureMovieResult = result.Search;
    });
  }
  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe(result => {
      this.animationMovieResult = result.Search;
    });
  }
  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe(result => {
      this.comedyMovieResult = result.Search;
    });
  }
  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe(result => {
      this.documentaryMovieResult = result.Search;
    });
  }
  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe(result => {
      this.sciencefictionMovieResult = result.Search;
    });
  }
  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe(result => {
      this.thrillerMovieResult = result.Search;
    });
  }
  submitForm() {
    const movieName = this.searchForm.value.movieName;
    if (movieName) {
      this.service.getMoviesByTitle(movieName).subscribe(result => {
        console.log(result, 'searchmovie##');
        if (result.Error) {
          // Handle movie not found error
          this.searchResult = null; // Reset search results
          this.errorMessage = result.Error;
        } else {
          this.searchResult = result.Search;
          this.errorMessage = null; // Reset error message
        }
      });
    } else {
      // Handle case where no movie is entered
      this.searchResult = null; // Reset search results
      this.errorMessage = "Please enter a movie name.";
    }
  }
  scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000'
      };
    } else {
      this.navbg = {};
    }
  }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) {
  return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_movie_api_service__WEBPACK_IMPORTED_MODULE_0__.MovieApiService));
};
MovieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MovieComponent,
  selectors: [["app-movie"]],
  hostBindings: function MovieComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MovieComponent_scroll_HostBindingHandler() {
        return ctx.scrollover();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    }
  },
  decls: 77,
  vars: 16,
  consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", 3, "ngStyle"], [1, "container-fluid"], ["routerLink", "", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "align-items-center"], [1, "d-flex", "flex-wrap", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["type", "text", "formControlName", "movieName", "placeholder", "Search Movie Here ...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "contain", "mt-5", "p-5", 2, "display", "flex", "align-items", "center"], [1, "form-group"], ["for", "genre", 1, "form-label"], ["id", "genre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "rating", 1, "form-label"], ["id", "rating", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "year", 1, "form-label"], ["id", "year", "type", "number", "placeholder", "Year", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "mt-4"], [1, "btn", "btn-primary", "form-control", 3, "click"], [1, "container", "mt-5"], [1, "row"], [1, "col-lg-12"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "col-lg-2 col-md-6 col-sm-10 mb-2", 4, "ngFor", "ngForOf"], [1, "contain", "mt-3", "mb-5", "p-4"], [1, "row", "mt-4"], [1, "text-white"], [1, "rowposter", "mt-3", "p-2"], [4, "ngFor", "ngForOf"], [3, "value"], ["role", "alert", 1, "alert", "alert-danger"], [1, "col-lg-2", "col-md-6", "col-sm-10", "mb-2"], [1, "card", "h-100"], ["class", "card-img-top", "alt", "Movie Poster", 3, "src", "routerLink", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["alt", "Movie Poster", 1, "card-img-top", 3, "src", "routerLink"], ["alt", "...", 1, "rowimg", "largeposter", 3, "src", "routerLink"]],
  template: function MovieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "MOVIEBUFF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MovieComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Genre:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.selectedGenre = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Any Genre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MovieComponent_option_20_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Rating:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_select_ngModelChange_24_listener($event) {
        return ctx.selectedRating = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Any Rating");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MovieComponent_option_27_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Year:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.selectedYear = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21)(33, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieComponent_Template_button_click_33_listener() {
        return ctx.applyFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, MovieComponent_div_38_Template, 2, 1, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, MovieComponent_div_40_Template, 10, 4, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28)(42, "div", 29)(43, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Action Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, MovieComponent_ng_container_46_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29)(48, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Adventure Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, MovieComponent_ng_container_51_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29)(53, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Animation Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, MovieComponent_ng_container_56_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29)(58, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Comedy Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, MovieComponent_ng_container_61_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 29)(63, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Documentary Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, MovieComponent_ng_container_66_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 29)(68, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Science-Fiction Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, MovieComponent_ng_container_71_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29)(73, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Thriller Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, MovieComponent_ng_container_76_Template, 2, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.navbg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedGenre);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genres);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedRating);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ratings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage || ctx.searchResult === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actionMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.adventureMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.animationMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comedyMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentaryMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sciencefictionMovieResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.thrillerMovieResult);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".rowposter[_ngcontent-%COMP%]{\n    display: flex;\n    overflow-y: hidden;\n    overflow-x: scroll;\n}\n\n.rowimg[_ngcontent-%COMP%]\n{\n    max-height: 100px;\n    object-fit: contain;\n    width: 100%;\n    box-sizing: content-box;\n    transition: transform 450ms;\n    margin-right: 7px;\n}\n\n.rowimg[_ngcontent-%COMP%]:hover\n{\n    transform: scale(1.09);\n    cursor: pointer;\n}\n\n.largeposter[_ngcontent-%COMP%]{\n    max-height: 300px;\n}\n\n.rowposter[_ngcontent-%COMP%]::-webkit-scrollbar\n{\n    display: none;\n}\nbutton[_ngcontent-%COMP%]\n{\n    background-color: #E50914;\n    color: #ffffff;\n}\n\nbutton[_ngcontent-%COMP%]:hover\n{\n    background-color: #E50914;\n    color: #ffffff;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    cursor: pointer;\n}\n\nh5[_ngcontent-%COMP%]\n{\n    color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]\n{\n    color: #E50914;\n    font-weight: bold;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]\n{\n    color: #E50914;\n}\n.form-label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: bold;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm93cG9zdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnJvd2ltZ1xue1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zO1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4ucm93aW1nOmhvdmVyXG57XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYXJnZXBvc3RlcntcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLnJvd3Bvc3Rlcjo6LXdlYmtpdC1zY3JvbGxiYXJcbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuYnV0dG9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDkxNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuYnV0dG9uOmhvdmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDkxNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDVcbntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmZvcm0tZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZFxue1xuICAgIGNvbG9yOiAjRTUwOTE0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rXG57XG4gICAgY29sb3I6ICNFNTA5MTQ7XG59XG4uZm9ybS1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 349:
/*!**********************************************!*\
  !*** ./src/app/service/movie-api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieApiService: () => (/* binding */ MovieApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class MovieApiService {
  constructor(http) {
    this.http = http;
    this.baseurl = "http://www.omdbapi.com";
    this.apikey = "a2d3d680"; // Replace with your actual API key
  }
  // bannerapidata
  bannerApiData() {
    return this.http.get(`${this.baseurl}/?s=trending&apikey=${this.apikey}`);
  }
  // trendingmovieapidata 
  trendingMovieApiData() {
    return this.http.get(`${this.baseurl}/?s=trending&type=movie&apikey=${this.apikey}`);
  }
  // searchmovive
  getMoviesByTitle(title) {
    const params = {
      apikey: this.apikey,
      s: title
    };
    return this.http.get(this.baseurl, {
      params
    });
  }
  // getmoviedatails
  getMovieDetails(data) {
    return this.http.get(`${this.baseurl}/?i=${data}&apikey=${this.apikey}`);
  }
  // getMovieCast
  // getMovieCast(data: any): Observable<any> {
  //   return this.http.get(`${this.baseurl}/?i=${data}&apikey=${this.apikey}`);
  // }
  // action 
  fetchActionMovies() {
    return this.http.get(`${this.baseurl}/?s=action&type=movie&apikey=${this.apikey}`);
  }
  // adventure
  fetchAdventureMovies() {
    return this.http.get(`${this.baseurl}/?s=adventure&type=movie&apikey=${this.apikey}`);
  }
  // animation
  fetchAnimationMovies() {
    return this.http.get(`${this.baseurl}/?s=animation&type=movie&apikey=${this.apikey}`);
  }
  // comedy
  fetchComedyMovies() {
    return this.http.get(`${this.baseurl}/?s=comedy&type=movie&apikey=${this.apikey}`);
  }
  // documentary
  fetchDocumentaryMovies() {
    return this.http.get(`${this.baseurl}/?s=documentary&type=movie&apikey=${this.apikey}`);
  }
  // science-fiction:878
  fetchScienceFictionMovies() {
    return this.http.get(`${this.baseurl}/?s=science fiction&type=movie&apikey=${this.apikey}`);
  }
  // thriller:53
  fetchThrillerMovies() {
    return this.http.get(`${this.baseurl}/?s=thriller&type=movie&apikey=${this.apikey}`);
  }
  fetchMoviesByFilter(genre, rating, year) {
    const params = {
      apikey: this.apikey,
      type: 'movie',
      s: genre,
      y: year
    };
    if (genre) {
      params.genre = genre;
    }
    if (rating) {
      params.imdbRating = `${rating},10`;
    }
    return this.http.get(this.baseurl, {
      params
    });
  }
}
MovieApiService.ɵfac = function MovieApiService_Factory(t) {
  return new (t || MovieApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
MovieApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MovieApiService,
  factory: MovieApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map