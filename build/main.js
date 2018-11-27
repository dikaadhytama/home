webpackJsonp([6],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page1/page1.module": [
		268,
		5
	],
	"../pages/page2/page2.module": [
		270,
		4
	],
	"../pages/page3/page3.module": [
		269,
		3
	],
	"../pages/page4/page4.module": [
		271,
		2
	],
	"../pages/page5/page5.module": [
		272,
		1
	],
	"../pages/page6/page6.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.FirstPage = function (ket) {
        this.navCtrl.push("Page1Page", { kategori: ket });
    };
    HomePage.prototype.SecondPage = function (ket) {
        this.navCtrl.push("Page2Page", { kategori: ket });
    };
    HomePage.prototype.ThirdPage = function (ket) {
        this.navCtrl.push("Page3Page", { kategori: ket });
    };
    HomePage.prototype.FourthPage = function (ket) {
        this.navCtrl.push("Page4Page", { kategori: ket });
    };
    HomePage.prototype.FifthPage = function (ket) {
        this.navCtrl.push("Page5Page", { kategori: ket });
    };
    HomePage.prototype.SixthPage = function (ket) {
        this.navCtrl.push("Page6Page", { kategori: ket });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\App\helloApp\src\pages\home\home.html"*/'<ion-header>\n\n \n\n   <ion-navbar>\n\n    \n\n     <ion-title>\n\n\n\n 	Menu Utama\n\n     </ion-title>\n\n  \n\n   </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-grid>\n\n\n\n   <ion-row>\n\n	<ion-col (click)= "FirstPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 1</div>\n\n	</ion-col>\n\n	\n\n	<ion-col (click)= "SecondPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 2</div>\n\n	</ion-col>\n\n   </ion-row>\n\n\n\n   <ion-row>\n\n	<ion-col (click)= "ThirdPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 3</div>\n\n	</ion-col>\n\n\n\n	<ion-col (click)= "FourthPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 4</div>\n\n	</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n	<ion-col (click)= "FifthPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 5</div>\n\n	</ion-col>\n\n\n\n	<ion-col (click)= "SixthPage()"> \n\n        <img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 6</div>\n\n	</ion-col>\n\n   </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\App\helloApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page3/page3.module#Page3PageModule', name: 'Page3Page', segment: 'page3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page2/page2.module#Page2PageModule', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page4/page4.module#Page4PageModule', name: 'Page4Page', segment: 'page4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page5/page5.module#Page5PageModule', name: 'Page5Page', segment: 'page5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page6/page6.module#Page6PageModule', name: 'Page6Page', segment: 'page6', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\App\helloApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Work\App\helloApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map