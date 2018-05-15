webpackJsonp([0],{

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\statroute\visitorManagement1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\statroute\visitorManagement1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\statroute\visitorManagement1\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\statroute\visitorManagement1\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\statroute\visitorManagement1\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\statroute\visitorManagement1\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_service__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, formBuilder, viewCtrl, service, http, appCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.http = http;
        this.appCtrl = appCtrl;
        this.status = false;
        this.employee = false;
        this.details = false;
        this.pass = false;
        this.image = '';
        this.today = Date.now();
        this.fixedTimezone = '2015-06-15T09:03:01+0900';
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.searchResult = [];
        this.todo = {};
        this.searchTerm.valueChanges
            .debounceTime(400)
            .subscribe(function (data) {
            _this.service.search_word(data).subscribe(function (response) {
                console.log(response);
                _this.searchResult = response;
            });
        });
    }
    HomePage.prototype.logForm = function () {
        console.log('submit form');
        this.status = true;
        this.employee = true;
        this.details = false;
    };
    HomePage.prototype.photoPage = function () {
        console.log('photo form');
        this.status = true;
        this.employee = false;
        this.details = true;
    };
    HomePage.prototype.printPreview = function () {
        console.log('print form');
        this.status = true;
        this.employee = false;
        this.details = false;
        this.pass = true;
    };
    HomePage.prototype.capture = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            quality: 100,
            destinationType: 0,
            sourceType: 1,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetWidth: 200,
            targetHeight: 200,
            encodingType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].EncodingType.PNG,
            mediaType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].MediaType.PICTURE
        }).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log("ERROR -> " + JSON.stringify(err));
        });
        // });
    };
    HomePage.prototype.sendEmail = function () {
        var email = this.todo.email;
        this.http.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDAi4IYxh4mSTyCJhkg5Opz7ZW2OBLyovI", email).
            subscribe(function (data) {
            console.log('data');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\statroute\visitorManagement1\src\pages\home\home.html"*/'<ion-header class="bg-header">\n\n  <ion-navbar>\n\n    <ion-title>Vistors Management Portal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="containerDiv">\n\n<div *ngIf="!status" class="fullWidth">\n\n<ion-card class="mt5p mb5p">\n\n  <ion-card-header class="page-title">\n\n    About yourself\n\n  </ion-card-header>\n\n\n\n<!--<form (ngSubmit)="logForm()">-->\n\n\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="todo.name" name="name"></ion-input>\n\n    </ion-item>\n\n      <ion-item>\n\n      <ion-label floating>Company</ion-label>\n\n      <ion-input type="text" [(ngModel)]="todo.company" name="company"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Phone #</ion-label>\n\n      <ion-input type="number" [(ngModel)]="todo.number" name="number"></ion-input>\n\n    </ion-item>\n\n       <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="todo.email" name="email"></ion-input>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n      <ion-label floating>ID Card Type</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>-->\n\n    <ion-item>\n\n      <ion-label floating>ID Proof #</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="todo.proof" name="proof"></ion-input>\n\n    </ion-item>\n\n  <!--<hr/>\n\n    <ion-card-header>\n\n      Employee Details\n\n    </ion-card-header>\n\n    <ion-item>\n\n      <ion-label floating>Emp. Email</ion-label>\n\n      <ion-input type="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Emp. Mob No.</ion-label>\n\n      <ion-input type="number"></ion-input>\n\n    </ion-item>-->\n\n    <ion-item class="reg-btnitem">\n\n      <button ion-button class="register-btn"  (click)="logForm()">Register</button>\n\n    </ion-item>\n\n    <!-- <form [formGroup]="credentialsForm">\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input [formControl]="credentialsForm.controls[\'email\']"\n\n            type="email"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input [formControl]="credentialsForm.controls[\'password\']"\n\n            type="password"></ion-input>\n\n      </ion-item>      \n\n    \n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <button ion-button block color="secondary" (click)="onSignIn()">\n\n            Sign in\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <button ion-button clear color="light" (click)="onForgotPassword()">\n\n            Forgot your password?\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n    </form> -->\n\n<!--</form>-->\n\n \n\n</ion-card>\n\n</div>\n\n<div *ngIf="employee" class="fullWidth">\n\n<ion-card class="mt5p mb5p">\n\n  <ion-card-header class="page-title">\n\n    Whom do you want to visit?\n\n  </ion-card-header>\n\n\n\n<!--<form (ngSubmit)="logForm()">-->\n\n<form class="example-form">\n\n  <mat-form-field class="example-full-width">\n\n    <label for="employee1">Employee Name</label>\n\n    <input type="text" id="employee1" placeholder="search word" aria-label="Number" matInput [formControl]="searchTerm" [matAutocomplete]="auto" [(ngModel)]="todo.host">\n\n    <mat-autocomplete #auto="matAutocomplete">\n\n      <mat-option *ngFor="let item of searchResult" [value]="item">\n\n        {{ item }}\n\n      </mat-option>\n\n    </mat-autocomplete>\n\n  </mat-form-field>\n\n</form>\n\n    <ion-item class="reg-btnitem">\n\n      <button ion-button class="register-btn"  (click)="photoPage()">Register</button>\n\n    </ion-item>\n\n</ion-card>\n\n</div>\n\n<div *ngIf="details" class="fullWidth">\n\n<ion-card class="mt5p mb5p details-card">\n\n  <ion-card-header class="page-title">\n\n    Capture your photo\n\n  </ion-card-header>\n\n\n\n<ion-grid>\n\n    <ion-row class="img-cont">\n\n    <img src="../../assets/imgs/user.png" class=""/>\n\n     <img src={{image}} class=""/>\n\n    <button ion-button class="" (click)="capture()">Capture</button>\n\n  </ion-row>\n\n  <ion-row>\n\n     <button ion-button class="" (click)="printPreview()">Print Preview</button>\n\n    </ion-row>\n\n</ion-grid>\n\n</ion-card>\n\n</div>\n\n\n\n<div *ngIf="pass" class="fullWidth">\n\n<ion-card class="mt5p mb5p details-card">\n\n  <ion-card-header class="page-title">\n\n    Print Preview\n\n  </ion-card-header>\n\n\n\n<div class="pass-header">Visitor Pass</div>\n\n<div class="center-align"><img src={{image}} class="capture-img"/></div>\n\n<div class="pass-details">\n\n  <div><span>Visitor Name</span><span class="pass-value"> {{todo.name}}</span> </div>\n\n   <div><span>Company Name</span><span class="pass-value"> {{todo.company}}</span> </div>\n\n    <div><span>Host Name</span><span class="pass-value"> {{todo.host}}</span> </div>\n\n     <div><span>Date</span><span class="pass-value"> {{ today | date }}</span> </div>\n\n      <div><span>Time</span><span class="pass-value"> {{today | date:\'shortTime\'}}</span> </div>\n\n   </div>\n\n   <ion-grid>\n\n     <ion-row>\n\n          <ion-col>\n\n   <div> <button ion-button class="" (click)="sendEmail()">Send Notification to Host</button> </div>\n\n       </ion-col>\n\n       <ion-col>\n\n   <div> <button ion-button class="" (click)="print()">Print</button> </div>\n\n       </ion-col>\n\n     </ion-row>\n\n   </ion-grid>\n\n</ion-card>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"E:\statroute\visitorManagement1\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_auto_complete__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng_auto_complete__["a" /* NgAutoCompleteModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\statroute\visitorManagement1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\statroute\visitorManagement1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://api.datamuse.com/words?ml=';
    }
    AppService.prototype.search_word = function (term) {
        return this.http.get(this.url + term).map(function (res) {
            return res.json().map(function (item) {
                return item.word;
            });
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], AppService);
    return AppService;
    var _a;
}());

//# sourceMappingURL=home.service.js.map

/***/ })

},[422]);
//# sourceMappingURL=main.js.map