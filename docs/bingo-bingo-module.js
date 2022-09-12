(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bingo-bingo-module"],{

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_selected_grid_box_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/selected-grid-box.directive */ "Sucv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_selected_grid_box_directive__WEBPACK_IMPORTED_MODULE_1__["SelectedGridBoxDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_directives_selected_grid_box_directive__WEBPACK_IMPORTED_MODULE_1__["SelectedGridBoxDirective"]] }); })();


/***/ }),

/***/ "SkTo":
/*!***********************************************!*\
  !*** ./src/app/bingo/bingo-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BingoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingoRoutingModule", function() { return BingoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bingo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bingo.component */ "fhih");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "amuJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _bingo_component__WEBPACK_IMPORTED_MODULE_1__["BingoComponent"] },
    { path: 'grid', component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"] },
];
class BingoRoutingModule {
}
BingoRoutingModule.ɵfac = function BingoRoutingModule_Factory(t) { return new (t || BingoRoutingModule)(); };
BingoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BingoRoutingModule });
BingoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BingoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sucv":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/selected-grid-box.directive.ts ***!
  \******************************************************************/
/*! exports provided: SelectedGridBoxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedGridBoxDirective", function() { return SelectedGridBoxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelectedGridBoxDirective {
    constructor(el) {
        this.el = el;
    }
}
SelectedGridBoxDirective.ɵfac = function SelectedGridBoxDirective_Factory(t) { return new (t || SelectedGridBoxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SelectedGridBoxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SelectedGridBoxDirective, selectors: [["", "appSelectedGridBox", ""]] });


/***/ }),

/***/ "a1Fe":
/*!***************************************!*\
  !*** ./src/app/bingo/bingo.module.ts ***!
  \***************************************/
/*! exports provided: BingoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingoModule", function() { return BingoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bingo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bingo-routing.module */ "SkTo");
/* harmony import */ var _bingo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bingo.component */ "fhih");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid/grid.component */ "amuJ");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BingoModule {
}
BingoModule.ɵfac = function BingoModule_Factory(t) { return new (t || BingoModule)(); };
BingoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BingoModule });
BingoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _bingo_routing_module__WEBPACK_IMPORTED_MODULE_1__["BingoRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BingoModule, { declarations: [_bingo_component__WEBPACK_IMPORTED_MODULE_2__["BingoComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _bingo_routing_module__WEBPACK_IMPORTED_MODULE_1__["BingoRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ }),

/***/ "amuJ":
/*!**********************************************!*\
  !*** ./src/app/bingo/grid/grid.component.ts ***!
  \**********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function GridComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", header_r2.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r2, " ");
} }
const _c0 = function (a0) { return { free: a0 }; };
function GridComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", card_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, card_r6.startsWith("*")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r6, " ");
} }
function GridComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_div_4_div_1_Template, 2, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cards_r4);
} }
class GridComponent {
    constructor() {
        this.grid = [];
        this.gridHeaders = 'BINGO'.split('');
    }
    ngOnInit() { }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { grid: "grid" }, decls: 5, vars: 2, consts: [[1, "border", "grid-container", "card", "mb-2", "col"], [1, "m-2"], ["id", "gridHeaders", 1, "row"], ["class", "col text-center font-bold grid-block grid-header", 3, "id", 4, "ngFor", "ngForOf"], ["id", "cards", "class", "row", 4, "ngFor", "ngForOf"], [1, "col", "text-center", "font-bold", "grid-block", "grid-header", 3, "id"], ["id", "cards", 1, "row"], ["class", "col grid-block text-center font-bold border", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "col", "grid-block", "text-center", "font-bold", "border", 3, "id", "ngClass"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridHeaders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".grid-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.free[_ngcontent-%COMP%] {\n  background-color: #72FFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZnJlZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyRkZGRjtcbn0iXX0= */"] });


/***/ }),

/***/ "fhih":
/*!******************************************!*\
  !*** ./src/app/bingo/bingo.component.ts ***!
  \******************************************/
/*! exports provided: BingoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingoComponent", function() { return BingoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "amuJ");



function BingoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bingo!You won!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BingoComponent_ng_container_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bitcoinImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BingoComponent_ng_container_6_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draw random balls to fill in the blocks..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BingoComponent_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remaining Balls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BingoComponent_ng_container_6_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onDraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Draw!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.balls.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.selectedBall);
} }
function BingoComponent_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remaining Balls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r9.balls));
} }
function BingoComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BingoComponent_ng_container_6_p_2_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BingoComponent_ng_container_6_div_3_Template, 12, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BingoComponent_ng_container_6_div_5_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.bingo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.bingo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("grid", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.bingo);
} }
function BingoComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Game Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You ran out of balls to draw from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BingoComponent_ng_container_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class BingoComponent {
    constructor() {
        this.grid = [];
        this.balls = [];
        this.characters = 'BINGO';
        this.selectedBall = 0;
        this.bingoDraw = Array.from(Array(75).keys());
        this.gameOver = false;
        this.bingo = false;
        this.bitcoinImg = 'assets/svg/bitcoin.svg';
    }
    ngOnInit() {
        this.generateInitialGrid();
        this.generateBalls();
    }
    onReset() {
        this.bingo = false;
        this.grid = [];
        this.balls = [];
        this.gameOver = false;
        this.selectedBall = 0;
        this.bingoDraw = Array.from(Array(75).keys());
        this.generateInitialGrid();
        this.generateBalls();
    }
    /**
     * Initial display of the populated grid
     */
    generateInitialGrid() {
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let k = 0; k < 5; k++) {
                if (i === 2 && k === 2) {
                    row.push('*');
                }
                else {
                    row.push(`${Math.floor(Math.random() * 100)}`);
                }
            }
            this.grid.push(row);
        }
    }
    /**
     * Generate balls to draw from
     */
    generateBalls() {
        for (let index = 0; index < this.bingoDraw.length; index++) {
            this.balls.push(Math.floor(Math.random() * this.bingoDraw.length));
        }
    }
    onDraw() {
        if (this.balls.length > 1) {
            const random = Math.floor(Math.random() * this.balls.length);
            this.selectedBall = this.balls[random];
            this.balls.splice(random, 1);
            for (let i = 0; i < this.grid.length; i++) {
                const cards = this.grid[i];
                for (let j = 0; j < cards.length; j++) {
                    const card = cards[j];
                    if (Number(card) === this.selectedBall) {
                        cards[j] = `*${cards[j]}`;
                    }
                }
            }
        }
        else {
            this.gameOver = true;
        }
        this.bingo =
            this.getBingoVerticalRows ||
                this.getBingoHorizontalRows ||
                this.getBingoDiagonalRows;
    }
    get getBingoVerticalRows() {
        let result = false;
        for (let i = 0; i < this.grid.length; i++) {
            const cards = this.grid[i];
            for (let j = 0; j < cards.length; j++) {
                if (cards.every((card) => String(card).startsWith('*'))) {
                    result = true;
                }
                else {
                    result = false;
                    break;
                }
            }
            if (result)
                break;
        }
        return result;
    }
    get getBingoHorizontalRows() {
        let result = false;
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i][0].startsWith('*') &&
                this.grid[i + 1][0].startsWith('*') &&
                this.grid[i + 2][0].startsWith('*') &&
                this.grid[i + 3][0].startsWith('*') &&
                this.grid[i + 4][0].startsWith('*')) {
                result = true;
                break;
            }
        }
        return result;
    }
    get getBingoDiagonalRows() {
        let result = false;
        for (let i = 0; i < this.grid.length; i++) {
            if (i == 0 &&
                this.grid[i][0].startsWith('*') &&
                this.grid[i + 1][1].startsWith('*') &&
                this.grid[i + 2][2].startsWith('*') &&
                this.grid[i + 3][3].startsWith('*') &&
                this.grid[i + 4][4].startsWith('*')) {
                result = true;
                break;
            }
            else if (i == 4 &&
                this.grid[i][0].startsWith('*') &&
                this.grid[i + 1][3].startsWith('*') &&
                this.grid[i + 2][2].startsWith('*') &&
                this.grid[i + 3][1].startsWith('*') &&
                this.grid[i + 4][0].startsWith('*')) {
                result = true;
                break;
            }
        }
        return result;
    }
}
BingoComponent.ɵfac = function BingoComponent_Factory(t) { return new (t || BingoComponent)(); };
BingoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BingoComponent, selectors: [["app-bingo"]], decls: 8, vars: 3, consts: [[1, "grid-container", "col-12"], ["id", "title", 1, "text-center", "text-white", "m-3"], [1, "mt-4"], [1, "container"], [4, "ngIf"], ["bingo", ""], [1, "text-center", "mb-4"], [1, "text-white", "font-weight-bold"], ["id", "bitcoinImg", "height", "200px", 3, "src"], [1, "text-center", "mt-2"], ["id", "resetBtn", 1, "btn", "spin-btn", 3, "click"], ["gameNotOver", ""], ["id", "headerText", "class", "text-center text-white m-3 title", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "grid"], ["class", "card", 4, "ngIf"], ["id", "headerText", 1, "text-center", "text-white", "m-3", "title"], [1, "row"], [1, "col"], ["id", "remainingBalls", 1, "text-center", "text-white", "m-3"], ["id", "remainingBallsTitle", 1, "text-center", "text-white", "m-3"], ["id", "selectedBall", 1, "text-center", "text-white", "m-3"], [1, "text-center"], ["id", "drawBtn", 1, "btn", "spin-btn", "m-2", 3, "click"], [1, "card"], ["id", "remainingBallsCardTitle", 1, "text-center", "m-3"], ["id", "remainngBallsJson"], ["gameOver", ""], ["id", "title", 1, "text-center", "text-danger", "m-3"], ["id", "errorMsg", 1, "text-center", "text-white", "m-3", "text-center"], ["id", "resetBtn", 1, "btn", "spin-btn", "m-2", 3, "click"]], template: function BingoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let's Play!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BingoComponent_ng_container_5_Template, 9, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BingoComponent_ng_container_6_Template, 6, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BingoComponent_ng_container_7_Template, 9, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameOver && ctx.bingo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameOver && !ctx.bingo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: [".spin-btn[_ngcontent-%COMP%] {\n  background-color: #72FFFF;\n  font-size: 24px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JpbmdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImJpbmdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW4tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB3aWR0aDogMjUwcHg7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=bingo-bingo-module.js.map