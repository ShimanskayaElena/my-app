webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"../../../../../src/app/about/about.module.ts"
	],
	"app/admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts"
	],
	"app/authorization/authorization.module": [
		"../../../../../src/app/authorization/authorization.module.ts"
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'about/:id', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AboutRoutingModule);

//# sourceMappingURL=about-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\r\n  margin: 4% 8%;\r\n}\r\n\r\nh3 {\r\n  margin: 3% 0;\r\n  text-align: center;\r\n}\r\n\r\n.min-thumb {\r\n  max-width: 50%;\r\n  float: left;\r\n  padding-right: 45px;\r\n}\r\n\r\n.clearfix {\r\n  clear: both;\r\n  margin-bottom: 3%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"news\" class=\"about\">\r\n  <h3>{{news.heading}}</h3>\r\n  <img *ngIf=\"news.src\" [src]=\"'assets/images/' + news.src\" class=\"min-thumb\"> <!--img-rounded -->\r\n  <p>{{news.body}}</p>\r\n  <div class=\"clearfix\"></div>\r\n  <button class=\"btn\" (click)=\"back()\">Back to news list</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_news_service__ = __webpack_require__("../../../../../src/app/core/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(newsService, router, route) {
        this.newsService = newsService;
        this.router = router;
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.newsService.getNews(+params['id']); })
            .subscribe(function (news) { _this.news = news; }, function (error) { _this.errorMessage = error; });
    };
    AboutComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routing_module__ = __webpack_require__("../../../../../src/app/about/about-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__about_routing_module__["a" /* AboutRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
        providers: []
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: "\n    <p>Dashboard</p>\n  "
    })
], AdminDashboardComponent);

//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_news_all_news_component__ = __webpack_require__("../../../../../src/app/admin/all-news/all-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_component__ = __webpack_require__("../../../../../src/app/admin/news/news.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__["a" /* AdminDashboardComponent */] },
            { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_6__news_news_component__["a" /* NewsComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__all_news_all_news_component__["a" /* AllNewsComponent */] }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(adminRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n}\r\n\r\na:link {\r\n    color: #eac1e4;\r\n}\r\n\r\na:visited {\r\n    color: #eac1e4;\r\n}\r\n\r\na:hover {\r\n    color: #b176b1;\r\n}\r\n\r\na.active {\r\n    color: #7b356d;\r\n}\r\n\r\ndiv {\r\n    padding: 5px 5%;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Editing a news block</h2>\r\n  <nav class=\"navbar\" role=\"navigation\">\r\n    <a class=\"btn\" routerLink=\"./\" routerLinkActive=\"active\"\r\n        [routerLinkActiveOptions]=\"{ exact: true }\">Edit News</a>\r\n    <a class=\"btn\" routerLink=\"./dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n  </nav>\r\n  <alert></alert>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    })
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_news_all_news_component__ = __webpack_require__("../../../../../src/app/admin/all-news/all-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_component__ = __webpack_require__("../../../../../src/app/admin/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__["a" /* AdminRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__["a" /* AdminDashboardComponent */], __WEBPACK_IMPORTED_MODULE_4__all_news_all_news_component__["a" /* AllNewsComponent */], __WEBPACK_IMPORTED_MODULE_5__news_news_component__["a" /* NewsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */]],
        providers: []
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/all-news/all-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n}\r\n\r\nli:hover {\r\n    color: #b176b1;\r\n}\r\n\r\n.btn-right {\r\n    float: right;\r\n    margin: 0 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/all-news/all-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ul>\r\n        <li *ngFor=\"let news of pagedItems\"  class=\"well well-small\">\r\n            {{news.heading}}\r\n            <button class=\"btn btn-right\" (click)=\"deleteNews(news); $event.stopPropagation()\">Delete</button>\r\n            <button class=\"btn btn-right\" (click)=\"editNews(news)\">Edit</button>\r\n        </li>\r\n        <button (click)=\"addNews()\" class=\"btn\">Add News</button>\r\n    </ul>\r\n\r\n    <!-- pager -->\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/all-news/all-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pager_service__ = __webpack_require__("../../../../../src/app/core/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_news_service__ = __webpack_require__("../../../../../src/app/core/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_alert_service__ = __webpack_require__("../../../../../src/app/core/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllNewsComponent = (function () {
    function AllNewsComponent(router, route, newsService, pagerService, alertService) {
        this.router = router;
        this.route = route;
        this.newsService = newsService;
        this.pagerService = pagerService;
        this.alertService = alertService;
        this.pager = {}; // объект, отвечающий за реализацию пагинации
    }
    AllNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // получаем массив всех новостей с сервера
        this.newsService.getAllNews().subscribe(function (news) {
            _this.allNews = news.reverse();
            _this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
        }, function (error) { return _this.errorMessage = error; });
    };
    AllNewsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // настраиваем объект, отвечающий за реализацию пагинации с помощью сервиса PagerService
        var length = this.allNews.length;
        this.pager = this.pagerService.getPager(length, page);
        // получаем массив заголовков новостей, который будет на странице при её инициализации
        this.pagedItems = this.allNews.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AllNewsComponent.prototype.editNews = function (news) {
        this.router.navigate(['/admin/news', news.id], { relativeTo: this.route });
    };
    AllNewsComponent.prototype.deleteNews = function (news) {
        var _this = this;
        var removalNews = window.confirm('Are you sure you want to remove the news?');
        if (removalNews) {
            this.newsService.delete(news.id)
                .subscribe(function () {
                _this.allNews = _this.allNews.filter(function (n) { return n !== news; });
                _this.pagedItems = _this.pagedItems.filter(function (n) { return n !== news; });
                var currentPage = _this.pager.currentPage;
                _this.setPage(currentPage);
                _this.alertService.success('Data was successfully deleted from the database!', true);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    AllNewsComponent.prototype.addNews = function () {
        this.router.navigate(['/admin/news', '0'], { relativeTo: this.route });
    };
    return AllNewsComponent;
}());
AllNewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'all-news',
        template: __webpack_require__("../../../../../src/app/admin/all-news/all-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/all-news/all-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_news_service__["a" /* NewsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_pager_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_pager_service__["a" /* PagerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__core_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], AllNewsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=all-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Заменяем кнопку \"Выберите файл\" на кастомный вариант*/\r\n.input {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.input + label {\r\n    font-size: 1.25em;\r\n    font-weight: 700;\r\n    color: #eac1e4;\r\n    background-color: #7b356d;\r\n    display: inline-block;\r\n    cursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n/*при навигации по сайту с помощью клавиш*/\r\n.input:focus + label {\r\n\toutline: 1px dotted #7b356d;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.input:focus + label,\r\n.input + label:hover {\r\n    background-color: #b176b1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"news\">\r\n  <form class=\"form-horizontal\" #newsForm=\"ngForm\" (ngSubmit)=\"save(newsForm)\" novalidate >\r\n   <div class=\"form-group\">\r\n\r\n     <label class=\"col-md-3 control-label\" for=\"heading\" >Headline news: </label> \r\n\r\n     <div class=\"col-md-5\">\r\n\r\n       <!-- pattern=\"^[a-z0-9_-]{3,40}$\"-->\r\n\r\n       <input class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" [(ngModel)]=\"news.heading\" #heading=\"ngModel\" required minlength=\"3\" maxlength=\"40\" />\r\n\r\n       <div *ngIf=\"heading.errors && (heading.dirty || heading.touched)\" class=\"alert alert-danger\">\r\n\r\n         <div [hidden]=\"heading.valid\" class=\"alert\">\r\n           Heading is required!\r\n         </div>\r\n         <div [hidden]=\"!heading.errors.minlength\">\r\n            Heading must be at least 3 characters long.\r\n         </div>\r\n         <div [hidden]=\"!heading.errors.maxlength\">\r\n           Heading cannot be more than 40 characters long.\r\n         </div>\r\n\r\n       </div>\r\n\r\n     </div>  \r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n\r\n     <label class=\"col-md-3 control-label\" for=\"text\" >Text news: </label> \r\n\r\n     <div class=\"col-md-5\">\r\n\r\n       <textarea class=\"form-control\" name=\"body\" id=\"text\" wrap=\"hard\" cols=\"80\" rows=\"15\" [(ngModel)]=\"news.body\" #body=\"ngModel\" required minlength=\"6\" maxlength=\"1000\"></textarea>\r\n\r\n       <div *ngIf=\"body.errors && (body.dirty || body.touched)\" class=\"alert alert-danger\">\r\n         <div [hidden]=\"body.valid\" class=\"alert\">\r\n           Text is required!\r\n         </div> \r\n         <div [hidden]=\"!body.errors.minlength\">\r\n           Text must be at least 6 characters long.\r\n         </div>\r\n         <div [hidden]=\"!body.errors.maxlength\">\r\n           Text cannot be more than 1000 characters long.\r\n         </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n<!--<img *ngIf=\"news.src\" src=\"app/images/{{news.src}}\" >-->\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-offset-3 col-md-5\">\r\n      <img class=\"img-responsive\" *ngIf=\"news.src\" [src]=\"'assets/images/' + news.src\">\r\n    </div>\r\n  </div>\r\n   \r\n  <div class=\"form-group\">\r\n\r\n    <div class=\"col-md-offset-3 col-md-5\">\r\n\r\n      <input *ngIf=\"!news.src\" type=\"file\" id=\"input1\" accept=\"image/*\" #newsImage (change)=\"getImageName()\" class=\"input\" />\r\n      <label *ngIf=\"!news.src\" for=\"input1\">Upload  photo</label>\r\n    \r\n      <input *ngIf=\"news.src\" type=\"file\" id=\"input2\" accept=\"image/*\" #newsImage (change)=\"getImageName()\" class=\"input\" />\r\n      <label  *ngIf=\"news.src\" for=\"input2\">Replace photo</label>\r\n\r\n      <button *ngIf=\"news.src\" (click)=\"deleteImage()\" >Delete Image</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-offset-3 col-md-5\">\r\n      <button class=\"btn-large\" type=\"submit\" [disabled]=\"!newsForm.form.valid\" >Save</button>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"col-md-offset-3 col-md-5\">\r\n  <button class=\"btn-large\" (click)=\"goBack()\">Back</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_news_model__ = __webpack_require__("../../../../../src/app/home/news.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_news_service__ = __webpack_require__("../../../../../src/app/core/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_alert_service__ = __webpack_require__("../../../../../src/app/core/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsComponent = (function () {
    function NewsComponent(newsService, alertService, route, location, router) {
        this.newsService = newsService;
        this.alertService = alertService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // извлекаем id товости, которую выбрали для редактирования
        var id = this.route.snapshot.params.id;
        if (id !== '0') {
            this.route.params
                .switchMap(function (params) { return _this.newsService.getNews(+params['id']); })
                .subscribe(function (news) { _this.news = news; }, function (error) { _this.errorMessage = error; });
        }
        else {
            this.news = new __WEBPACK_IMPORTED_MODULE_4__home_news_model__["a" /* News */](0, '', '', '');
        }
    };
    // получить имя выбраного файла с изображением
    NewsComponent.prototype.getImageName = function () {
        // получаем массив файлов, загруженных с помощью input with type="file"
        var fileList = this.newsImage.nativeElement.files;
        // если изображение было загружено
        if (fileList.length) {
            var imgSize = fileList[0].size;
            if (imgSize <= 100000) {
                // извлекаем название файла с загруженным изображением
                this.news.src = fileList[0].name;
            }
            else {
                window.alert('The size of the uploaded file is more than the allowed value. Please upload another photo.');
            }
        }
        else {
            // если админ решит не загружать изображение
            this.news.src = '';
        }
        return this.news.src;
    };
    NewsComponent.prototype.deleteImage = function () {
        this.news.src = '';
    };
    // сохранить отредактированные данные
    NewsComponent.prototype.save = function (form) {
        var _this = this;
        if (this.news.id !== 0) {
            this.newsService.update(this.news).subscribe(function (news) { _this.news = news; }, function (error) { _this.errorMessage = error; });
            this.alertService.success('Data edited successfully', true);
        }
        else {
            this.newsService.create(this.news.heading, this.news.body, this.news.src).subscribe(function (news) { _this.news = news; }, function (error) { _this.errorMessage = error; });
            this.alertService.success('Data was successfully saved in the database', true);
        }
        // вернуться к списку новостей
        this.router.navigate(['../admin/']);
    };
    // вернуться назад к списку новостей без редактирования новости
    NewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return NewsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('newsImage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], NewsComponent.prototype, "newsImage", void 0);
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'news',
        template: __webpack_require__("../../../../../src/app/admin/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__core_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__core_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], NewsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about/:id', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'authorization', loadChildren: 'app/authorization/authorization.module#AuthorizationModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__shared_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide {\r\n    display: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n}\r\n\r\na:link {\r\n    color: #eac1e4;\r\n}\r\n\r\na:visited {\r\n    color: #eac1e4;\r\n}\r\n\r\na:hover {\r\n    color: #b176b1;\r\n}\r\n\r\na.active {\r\n    color: #7b356d;\r\n}\r\n\r\nnav {\r\n    margin-left: 7%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1 [myHighlight] = \"color\">\n        NEWS\n    </h1>\n</div>\n<current-user></current-user>\n\n<nav  class=\"navbar\" role=\"navigation\">\n    <a class=\"btn\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n\n    <a class=\"btn\" routerLink=\"admin\" routerLinkActive=\"active\">Admin</a>\n\n    <a class=\"btn\" routerLink=\"authorization\"  routerLinkActive=\"active\">Authorization</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_localStorage_service__ = __webpack_require__("../../../../../src/app/core/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.color = '#b176b1';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__core_localStorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]],
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authorization_authorization_module__ = __webpack_require__("../../../../../src/app/authorization/authorization.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__["AdminModule"],
            __WEBPACK_IMPORTED_MODULE_8__home_home_module__["HomeModule"],
            __WEBPACK_IMPORTED_MODULE_9__about_about_module__["AboutModule"],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__authorization_authorization_module__["AuthorizationModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authorization/authorization-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_component__ = __webpack_require__("../../../../../src/app/authorization/authorization.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthorizationRoutingModule = (function () {
    function AuthorizationRoutingModule() {
    }
    return AuthorizationRoutingModule;
}());
AuthorizationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'authorization', component: __WEBPACK_IMPORTED_MODULE_2__authorization_component__["a" /* AuthorizationComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AuthorizationRoutingModule);

//# sourceMappingURL=authorization-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n}\r\n.alert {\r\n  color: red;\r\n}\r\nform {\r\n  margin: 0 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\r\n<form (ngSubmit)=\"onSubmit(authorizationForm)\" #authorizationForm=\"ngForm\" novalidate class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label for=\"login\" class=\"col-sm-5 control-label\">Login</label>\r\n    <input type=\"text\" id=\"name\" required [(ngModel)]=\"user.name\" name=\"name\" #name=\"ngModel\"  pattern=\"^[a-z0-9_-]{3,16}$\">\r\n    <div [hidden]=\"name.valid || name.untouched\" class=\"alert alert-danger\">\r\n    Name is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\" class=\"col-sm-5 control-label\">Password</label>\r\n    <input type=\"password\" id=\"password\" required [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\"  pattern=\"^[a-z0-9_-]{3,16}$\">\r\n    <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\r\n    Password is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-5 col-sm-7\">\r\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!authorizationForm.form.valid\" >Submit</button>\r\n      &nbsp;&nbsp;\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"authorizationForm.reset();\">Reset</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"col-sm-offset-5 col-sm-7\">\r\n  <button class=\"btn btn-default\" type=\"button\" (click)=\"goOut()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_alert_service__ = __webpack_require__("../../../../../src/app/core/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizationComponent = (function () {
    function AuthorizationComponent(authenticationService, alertService, router) {
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.get();
    };
    // регистрация пользователя на сайте
    AuthorizationComponent.prototype.onSubmit = function (form) {
        this.user.name = form.value.name;
        this.user.password = form.value.password;
        this.user = this.authenticationService.set(this.user);
        form.reset();
        if (this.user.access) {
            this.router.navigate(['/admin']);
        }
        else {
            this.alertService.success('Authorization was successful!', true);
        }
    };
    // отмена пользователем регистрации на сайте
    AuthorizationComponent.prototype.goOut = function () {
        this.router.navigate(['/home']);
    };
    return AuthorizationComponent;
}());
AuthorizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/authorization/authorization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authorization/authorization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthorizationComponent);

var _a, _b, _c;
//# sourceMappingURL=authorization.component.js.map

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_component__ = __webpack_require__("../../../../../src/app/authorization/authorization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authorization_routing_module__ = __webpack_require__("../../../../../src/app/authorization/authorization-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function() { return AuthorizationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthorizationModule = (function () {
    function AuthorizationModule() {
    }
    return AuthorizationModule;
}());
AuthorizationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__authorization_routing_module__["a" /* AuthorizationRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__authorization_component__["a" /* AuthorizationComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__authorization_component__["a" /* AuthorizationComponent */]],
        providers: []
    })
], AuthorizationModule);

//# sourceMappingURL=authorization.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false; // Сохранить после изменения навигации
        // Очистить сообщение об изменении маршрута
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // Сохранить только для одного изменения местоположения
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        var _this = this;
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        window.setTimeout(function () { _this.delete(); }, 3000);
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        var _this = this;
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        window.setTimeout(function () { _this.delete(); }, 3000);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    // удаляем  сообщение через 3 секунды
    AlertService.prototype.delete = function () {
        return this.subject.next();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.user = this.authenticationService.get();
        if (this.user.access) {
            // пользователь вошёл на сайт как администратор
            return true;
        }
        else {
            // пользователь не является администратором поэтому перенаправляется на главную стнаницу с URL-адресом возврата
            this.router.navigate(['/authorization'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorage_service__ = __webpack_require__("../../../../../src/app/core/localStorage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(localStorageService) {
        this.localStorageService = localStorageService;
        this.currentUser = 'current user'; // имя свойства, в которым будут сохранены данные о вошедшем пользователе в LocalStorage браузера
    }
    // предоставление данных о пользователе
    AuthenticationService.prototype.get = function () {
        return this.localStorageService.get(this.currentUser);
    };
    // при выходе пользователя из регистрации на сайте
    AuthenticationService.prototype.remove = function () {
        this.localStorageService.remove(this.currentUser);
        return this.get();
    };
    // сохранение данных о пользователе, зарегистрировавшемся на сайте
    AuthenticationService.prototype.set = function (user) {
        this.user = user;
        if (this.user.name === 'admin' && this.user.password === '1234') {
            this.user.access = true;
        }
        else {
            this.user.access = false;
        }
        this.localStorageService.set(this.currentUser, this.user);
        return this.get();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__localStorage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__localStorage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__in_memory_data_service__ = __webpack_require__("../../../../../src/app/core/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_service__ = __webpack_require__("../../../../../src/app/core/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localStorage_service__ = __webpack_require__("../../../../../src/app/core/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__news_service__ = __webpack_require__("../../../../../src/app/core/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pager_service__ = __webpack_require__("../../../../../src/app/core/pager.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__in_memory_data_service__["a" /* InMemoryDataService */])
        ],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_10__pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_5__alert_service__["a" /* AlertService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var news = [
            { id: 11, heading: 'title_11', body: 'text_11', src: 'img_1.jpg' },
            { id: 12, heading: 'title_12', body: 'text_12', src: 'img_2.jpg' },
            { id: 13, heading: 'title_13', body: 'text_13', src: 'img_3.jpg' },
            { id: 14, heading: 'title_14', body: 'text_14', src: 'img_4.jpg' },
            { id: 15, heading: 'title_15', body: 'text_15', src: 'img_5.jpg' },
            { id: 16, heading: 'title_16', body: 'text_16', src: 'img_1.jpg' },
            { id: 17, heading: 'title_17', body: 'text_17', src: 'img_2.jpg' },
            { id: 18, heading: 'title_18', body: 'text_18', src: 'img_3.jpg' },
            { id: 19, heading: 'title_19', body: 'text_19', src: 'img_4.jpg' },
            { id: 20, heading: 'title_20', body: 'text_20', src: 'img_5.jpg' },
            { id: 21, heading: 'title_21', body: 'text_21', src: 'img_1.jpg' },
            { id: 22, heading: 'title_22', body: 'text_22', src: 'img_2.jpg' },
            { id: 23, heading: 'title_23', body: 'text_23', src: 'img_3.jpg' },
            { id: 24, heading: 'title_24', body: 'text_24', src: 'img_4.jpg' },
            { id: 25, heading: 'title_25', body: 'text_25', src: 'img_5.jpg' },
            { id: 26, heading: 'title_26', body: 'text_26', src: 'img_1.jpg' },
            { id: 27, heading: 'title_27', body: 'text_27', src: 'img_2.jpg' },
            { id: 28, heading: 'title_28', body: 'text_28', src: 'img_3.jpg' },
            { id: 29, heading: 'title_29', body: 'text_29', src: 'img_4.jpg' },
            { id: 30, heading: 'title_30', body: 'text_30', src: 'img_5.jpg' },
            { id: 31, heading: 'title_31', body: 'text_31', src: 'img_1.jpg' },
            { id: 32, heading: 'title_32', body: 'text_32', src: 'img_2.jpg' },
            { id: 33, heading: 'title_33', body: 'text_33', src: 'img_3.jpg' },
            {
                id: 34,
                heading: 'Никола Тесла – самый загадочный ученый в мире',
                body: 'Достижения Н. Теслы остаются научной загадкой для современных ученых. Этот человек смог достигнуть таких познаний, до которых нашим ученым еще расти и расти. К сожалению, большая часть его изобретений до наших дней не сохранилась, так как он предпочел лично уничтожить свои наработки, считая, что до таких технологий мы пока не доросли.',
                src: 'img_2.jpg'
            },
            {
                id: 35,
                heading: 'Самые известные мифические города',
                body: 'В многочисленных древних трактатах Тибета и Азии упоминается страна под названием Шамбала, которая якобы существует и ныне где-то в параллельной вселенной. Согласно некоторым теориям, именно там родился Калка. Шамбалу обосновал царь Сучандры, но по другим приданиям она являлась частью Азии. Невидимым для человеческого взора данное царство стало после вторжения мусульман на территории С.Азии, что произошло в четвертом веке. Считается, что только самые добрые, открытые, «чистые» душевно люди смогут найти туда дорогу.',
                src: 'img_1.jpg'
            },
            {
                id: 36,
                heading: 'Астронавты – люди суеверные',
                body: 'Астронавтов принято считать самыми суеверными людьми. Дело в том, что полеты в космос очень опасны. Чтобы защитить себя эти люди готовы пойти на все. Нередко перед полетом они совершают своеобразные ритуалы. Некоторые из них выглядят нелепо и даже смешно, но астронавты продолжают верить в то, что это убережет их от беды. К примеру, в космос астронавты всегда берут с собой полынь – выносливое растение, которое на протяжении длительного времени сохраняет свой запах, напоминая членам экипажа о родной планете. На стартовую площадку астронавтов всегда провожают под музыкальное произведение «Земля в иллюминаторе».',
                src: 'img_1.jpg'
            }
        ];
        return { news: news };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/localStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_model__ = __webpack_require__("../../../../../src/app/shared/user/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.set = function (property, value) {
        localStorage.setItem(property, JSON.stringify(value));
    };
    LocalStorageService.prototype.remove = function (property) {
        localStorage.removeItem(property);
    };
    LocalStorageService.prototype.get = function (property) {
        if (localStorage.getItem(property)) {
            return JSON.parse(localStorage.getItem(property));
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__shared_user_user_model__["a" /* User */]('Visitor', '', false);
        }
    };
    LocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], LocalStorageService);

//# sourceMappingURL=localStorage.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = 'app/news'; // URL to web API
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.selectedNews = {
            id: 0,
            heading: '',
            body: '',
            src: ''
        };
    }
    NewsService.prototype.getAllNews = function () {
        return this.http
            .get(this.newsUrl)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /* getAllNews(): Promise<News[]> {
       return this.http.get(this.newsUrl)
         .toPromise()
         .then(response => response.json().data)
         .catch(this.handleError);
     }*/
    NewsService.prototype.getNews = function (id) {
        var url = this.newsUrl + "/" + id;
        return this.http
            .get(url)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /* getNews(id: number): Promise<News> {
      const url = `${this.newsUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
    }*/
    NewsService.prototype.create = function (heading, body, src) {
        return this.http
            .post(this.newsUrl, JSON.stringify({ heading: heading, body: body, src: src }), { headers: this.headers })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /* create(heading: string, body: string, src: string): Promise<News> {
      return this.http
        .post( this.newsUrl, JSON.stringify({ heading: heading, body: body, src: src}), {headers: this.headers})
        .toPromise()
        .then( response => response.json().data)
        .catch(this.handleError);
    }*/
    NewsService.prototype.update = function (news) {
        var url = this.newsUrl + "/" + news.id;
        return this.http
            .put(url, JSON.stringify(news), { headers: this.headers })
            .map(function () { return news; })
            .catch(this.handleError);
    };
    /* update(news: News): Promise<News> {
      const url = `${this.newsUrl}/${news.id}`;
      return this.http
        .put( url, JSON.stringify(news), {headers: this.headers})
        .toPromise()
        .then(() => news )
        .catch(this.handleError);
    }*/
    NewsService.prototype.delete = function (id) {
        var url = this.newsUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .map(function () { return null; })
            .catch(this.handleError);
    };
    /* delete(id: number): Promise<void> {
      const url = `${this.newsUrl}/${id}`;
      return this.http.delete( url, {headers: this.headers})
      .toPromise()
      .then( () => null)
      .catch(this.handleError);
    }*/
    NewsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    /* private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }*/
    NewsService.prototype.setSelectedNews = function (news) {
        this.selectedNews = news;
    };
    NewsService.prototype.getSelectedNews = function () {
        return this.selectedNews;
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagerService = (function () {
    function PagerService() {
    }
    // Pagination Example with logic like Google
    // currentPage: number = 1
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (pageSize === void 0) { pageSize = 10; }
        // Рассчитать общее количество страниц
        var totalPages = Math.ceil(totalItems / pageSize);
        // определяем номер первой и последней страницы в зависимости от общего количества страниц
        var startPage, endPage;
        if (totalPages <= 10) {
            // если общее количество страниц меньше 10
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // в случае, если всего страниц оказалось больше 10
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // вычислить начальный и конечный индексы элементов в списке
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // создать массив номеров страниц для их отображения на странице
        var pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
        // возвращаемый объект содержить все свойства  PagerService, необходимые для настройки и работы
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages // массив номеров страниц
        };
    };
    return PagerService;
}());
PagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], PagerService);

//# sourceMappingURL=pager.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  text-align: center;\r\n  margin:  3% 10%;\r\n}\r\n\r\ndiv {\r\n    padding: 5px 5%;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.selected {\r\n    color: #eac1e4;\r\n    font-size: 16px;\r\n    background-color: #efebe8;\r\n}\r\n\r\nli.selected:hover {\r\n    color: #eac1e4;\r\n}\r\n\r\n/*li:link {\r\n\r\n}*/\r\n\r\n/*li:visited {\r\n    \r\n}*/\r\n\r\nli:hover {\r\n    color: #b176b1;\r\n}\r\n\r\n/*li:active {\r\n    \r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 [myHighlight]=\"color\">Welcome to the news block!</h2>\r\n<div>\r\n\r\n    <ul>\r\n        <li *ngFor=\"let news of pagedItems\" [class.selected]=\"news.id === selectedNews.id\" (click)=\"onSelect(news)\" class=\"well well-small\">\r\n         {{news.heading}}\r\n        </li>\r\n    </ul>\r\n\r\n    <!-- pager -->\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_news_service__ = __webpack_require__("../../../../../src/app/core/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pager_service__ = __webpack_require__("../../../../../src/app/core/pager.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, newsService, pagerService) {
        this.router = router;
        this.newsService = newsService;
        this.pagerService = pagerService;
        this.pager = {}; // объект, отвечающий за реализацию пагинации
        this.color = '#eac1e4'; // цвет для выделения заголовка блока
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // получаем массив всех новостей с сервера
        this.newsService.getAllNews().subscribe(function (news) {
            _this.allNews = news.reverse();
            _this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
        }, function (error) { return _this.errorMessage = error; });
        this.selectedNews = this.newsService.getSelectedNews();
    };
    /* ngOnInit(): void {
      // получаем массив всех новостей с сервера
      this.newsService
      .getAllNews()
      .then(news => {
        this.allNews = news.reverse();
        this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
      });
      this.selectedNews = this.newsService.getSelectedNews();
    }*/
    // инициализация списка новостей на странице
    HomeComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // настраиваем объект, отвечающий за реализацию пагинации с помощью сервиса PagerService
        var length = this.allNews.length;
        this.pager = this.pagerService.getPager(length, page);
        // получаем массив заголовков новостей, который будет на странице при её инициализации
        this.pagedItems = this.allNews.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    HomeComponent.prototype.onSelect = function (news) {
        this.selectedNews = news;
        this.newsService.setSelectedNews(news);
        this.router.navigate(['/about', news.id]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_pager_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_pager_service__["a" /* PagerService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/news.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News(id, heading, body, src) {
        this.id = id;
        this.heading = heading;
        this.body = body;
        this.src = src;
    }
    return News;
}());

//# sourceMappingURL=news.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_alert_service__ = __webpack_require__("../../../../../src/app/core/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'alert',
        template: "\n      <div *ngIf=\"message\"\n            [ngClass]=\"{ 'alert': message, 'alert-success':   message.type === 'success', 'alert-danger': message.type === 'error' }\">\n         {{message.text}}\n      </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        // console.log(`* highlight called for ${el.nativeElement.tagName}`);
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor);
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('myHighlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Directive */])({ selector: '[myHighlight]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: '<h2>404 - Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlight_directive__ = __webpack_require__("../../../../../src/app/shared/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_component__ = __webpack_require__("../../../../../src/app/shared/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("../../../../../src/app/shared/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__highlight_directive__["a" /* HighlightDirective */],
            __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_5__alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__highlight_directive__["a" /* HighlightDirective */],
            __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_5__alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide {\r\n    display: none;\r\n}\r\n\r\ndiv {\r\n    text-align: right;\r\n    font-size: 24px;\r\n    margin-right: 6%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.hide = false; // отвечает за визуализацию кнопки 'Go out'
    }
    UserComponent.prototype.ngOnInit = function () {
        return this.user = this.authenticationService.get();
    };
    UserComponent.prototype.ngDoCheck = function () {
        this.user = this.authenticationService.get();
        if (this.user.name === 'Visitor') {
            this.hide = true;
        }
        else {
            this.hide = false;
        }
        return this.user;
    };
    // зарегистрироваться на сайте
    UserComponent.prototype.logIn = function () {
        this.router.navigate(['../authorization']);
    };
    // отменить регистрацию на сайте
    UserComponent.prototype.goOut = function () {
        this.authenticationService.remove();
        this.router.navigate(['../home']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'current-user',
        template: "\n    <div>\n        Hello, <strong>{{user.name}}</strong>!\n        <button class=\"btn btn-default\" [class.hide]=\"!hide\" (click)=\"logIn()\">Log in</button>\n        <button class=\"btn btn-default\" [class.hide]=\"hide\" (click)=\"goOut()\">Go out</button>\n    </div>",
        styles: [__webpack_require__("../../../../../src/app/shared/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, password, access) {
        this.name = name;
        this.password = password;
        this.access = access;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map