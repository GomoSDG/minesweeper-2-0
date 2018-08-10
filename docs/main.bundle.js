webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align: center;\">\r\n  <app-screen></app-screen>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_module__ = __webpack_require__("./src/app/game/game.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__game_game_module__["a" /* GameModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screen_screen_component__ = __webpack_require__("./src/app/game/screen/screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__screen_screen_component__["a" /* ScreenComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__screen_screen_component__["a" /* ScreenComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__screen_screen_component__["a" /* ScreenComponent */]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/game/models/GameObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameObject; });
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.transformations = [];
    }
    GameObject.prototype.addTransformation = function (transformation) {
        this.transformations.push(transformation);
    };
    GameObject.prototype.getTransformations = function () {
    };
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());



/***/ }),

/***/ "./src/app/game/models/Playground.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playground; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Square__ = __webpack_require__("./src/app/game/models/Square.ts");

var Playground = /** @class */ (function () {
    function Playground() {
        this.squares = [];
        this.groundWidth = 8, this.groundHeight = 8;
        this.generateGround(this.groundWidth, this.groundHeight);
        this.generateMines(10);
        this.generateNumbers();
    }
    Playground.prototype.toArray = function () {
        return this.squares.reduce(function (a, b) {
            return a.concat(b);
        });
    };
    Playground.prototype.generateGround = function (x, y) {
        for (var cx = 0; cx < x; cx++) {
            this.squares[cx] = [];
            for (var cy = 0; cy < y; cy++) {
                this.squares[cx][cy] = new __WEBPACK_IMPORTED_MODULE_0__Square__["a" /* Square */](cx, cy, 20, 1);
            }
        }
        return this;
    };
    Playground.prototype.generateMines = function (num) {
        for (var x = 0; x < num;) {
            var posX = Math.floor(Math.random() * this.groundWidth);
            var posY = Math.floor(Math.random() * this.groundHeight);
            if (this.squares[posX][posY].putMine()) {
                x++;
            }
        }
    };
    Playground.prototype.cascadeZeroSquare = function (_a) {
        var col = _a.col, row = _a.row;
        for (var y = row - 1; y < row + 3; y++) {
            if (y < 0 || y > this.squares[0].length - 1) {
                continue;
            }
            for (var x = col - 1; x < col + 3; x++) {
                if ((col === x && row === y) || (x < 0 || x > this.squares.length - 1)) {
                    continue;
                }
                var currentSquare = this.squares[x][y];
                var surroundingMines = currentSquare.surroundingMines;
                if (!currentSquare.popped && surroundingMines === 0 && !currentSquare.hasMine) {
                    this.pop(currentSquare.col, currentSquare.row);
                }
            }
        }
    };
    Playground.prototype.pop = function (x, y) {
        var currentSquare = this.squares[x][y];
        var revealInfo = currentSquare.pop();
        if (currentSquare.surroundingMines === 0 && !currentSquare.hasMine) {
            this.cascadeZeroSquare(this.squares[x][y]);
        }
        return revealInfo;
    };
    Playground.prototype.toggleFlag = function (x, y) {
        return this.squares[x][y].toggleFlag();
    };
    Playground.prototype.generateNumbers = function () {
        for (var _i = 0, _a = this.toArray(); _i < _a.length; _i++) {
            var square = _a[_i];
            try {
                var x = square.col;
                var y = square.row;
                square.surroundingMines = this.countMines(square);
            }
            catch (e) {
            }
        }
    };
    Playground.prototype.countMines = function (square) {
        var minX = square.col - 1;
        var minY = square.row - 1;
        var count = 0;
        for (var y = minY; y < minY + 3; y++) {
            if (y < 0 || y > this.squares[0].length - 1) {
                continue;
            }
            for (var x = minX; x < minX + 3; x++) {
                if ((square.col === x && square.row === y) || (x < 0 || x > this.squares.length - 1)) {
                    continue;
                }
                count = this.squares[x][y].hasMine ? count + 1 : count;
            }
        }
        return count;
    };
    Playground.prototype.get = function (x, y) {
        return this.squares[x][y];
    };
    return Playground;
}());



/***/ }),

/***/ "./src/app/game/models/Square.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Square; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameObject__ = __webpack_require__("./src/app/game/models/GameObject.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(col, row, size, margin) {
        var _this = _super.call(this) || this;
        _this.col = col;
        _this.row = row;
        _this.margin = margin;
        _this.template = 'bordered_square';
        _this.size = size;
        _this.hasMine = false;
        _this.popped = false;
        _this.surroundingMines = null;
        _this.generatePosition();
        return _this;
    }
    Square.prototype.generatePosition = function () {
        this.x = this.col * this.size + this.margin * this.col;
        this.y = this.row * this.size + this.margin * this.row;
        this.pos = [this.x, this.y];
    };
    Square.prototype.pop = function () {
        var revealInfo;
        if (!this.hasFlag) {
            revealInfo = this.reveal(true);
            this.popped = true;
            return revealInfo;
        }
        // TODO: Create interface for reveal info.
        return {
            hasMine: this.hasMine,
            isNoneZero: this.surroundingMines > 0 || this.hasMine
        };
    };
    Square.prototype.reveal = function (pop) {
        if (this.hasMine) {
            if (pop) {
                this.template = 'explode_square';
            }
            else {
                this.template = 'mineSquare';
            }
        }
        else {
            this.template = this.surroundingMines + "square";
        }
        return {
            hasMine: this.hasMine,
            isNoneZero: this.surroundingMines > 0 || this.hasMine
        };
    };
    Square.prototype.toggleFlag = function () {
        if (!this.popped) {
            if (!this.hasFlag) {
                this.template = 'flag_square';
            }
            else {
                this.template = 'bordered_square';
            }
            return this.hasFlag = !this.hasFlag;
        }
        return false;
    };
    Square.prototype.putMine = function () {
        if (this.hasMine) {
            // Already has mine
            return false;
        }
        this.surroundingMines = -1;
        // Set hasMine true and change template.
        this.hasMine = true;
        // Put mine successfully.
        return true;
    };
    return Square;
}(__WEBPACK_IMPORTED_MODULE_0__GameObject__["a" /* GameObject */]));



/***/ }),

/***/ "./src/app/game/screen/screen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/screen/screen.component.html":
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 250 250\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <style></style>\r\n  <defs>\r\n    <g id=\"flagged_square\">\r\n      <!-- radius = 10% of the height/width -->\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <use xlink:href=\"#flag\" x=\"20\" y=\"15\" width=\"5\" height=\"5\" transform=\"scale(.2, .2)\"/>\r\n    </g>\r\n    <g id=\"flag\">\r\n      <polygon points=\"35.999,55.5 35.999,16.5 40,16.5 40,55.5 35.999,55.5 \t\t\"/>\r\n      <polygon fill=\"#FF0000\" points=\"40,13.875 19.375,27 40,40.125 \t\t\"/>\r\n      <rect x=\"28.571\" y=\"51.625\" width=\"18.857\" height=\"5.5\"/>\r\n      <rect x=\"20.222\" y=\"56.459\" width=\"35.555\" height=\"7.041\"/>\r\n    </g>\r\n    <g id=\"square\">\r\n      <!-- radius = 10% of the height/width -->\r\n      <rect fill=\"#AAAAAA\" stroke-width=\"0.5\" x=\"1\" y=\"1\" [attr.width]=\"squareSize\" [attr.height]=\"squareSize\" rx=\"2\" ry=\"2\"/>\r\n    </g>\r\n    <g id=\"0square\">\r\n      <!-- radius = 10% of the height/width -->\r\n      <rect fill=\"#AAAAAA\" stroke-width=\"0.5\" x=\"1\" y=\"1\" [attr.width]=\"squareSize\" [attr.height]=\"squareSize\" rx=\"2\" ry=\"2\"/>\r\n    </g>\r\n    <g id=\"bordered_square\">\r\n      <!-- radius = 10% of the height/width -->\r\n      <rect fill=\"#AAAAAA\" stroke-width=\"1\" stroke=\"#4056A1\" x=\"1\" y=\"1\" [attr.width]=\"squareSize\" [attr.height]=\"squareSize\" rx=\"2\" ry=\"2\"/>\r\n    </g>\r\n    <g id=\"flag_square\">\r\n      <!-- radius = 10% of the height/width -->\r\n      <rect fill=\"#AAAAAA\" stroke-width=\"0.5\" stroke=\"#4056A1\" x=\"1\" y=\"1\" [attr.width]=\"squareSize\" [attr.height]=\"squareSize\" rx=\"2\" ry=\"2\"/>\r\n      <use xlink:href=\"#flag\" x=\"20\" y=\"15\" width=\"5\" height=\"5\" transform=\"scale(.2, .2)\"/>\r\n    </g>\r\n    <g id=\"1square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>r\r\n      <text x=\"11\" y=\"16\">1</text>\r\n    </g>\r\n    <g id=\"mineSquare\">\r\n      <use xlink:href=\"#bordered_square\"/>\r\n      <image xlink:href=\"../assets/mine.png\" x=\"5\" y=\"4\" height=\"13\" width=\"13\"/>\r\n    </g>\r\n    <g id=\"2square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">2</text>\r\n    </g>\r\n    <g id=\"3square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">3</text>\r\n    </g>\r\n    <g id=\"4square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">4</text>\r\n    </g>\r\n    <g id=\"5square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">5</text>\r\n    </g>\r\n    <g id=\"6square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">6</text>\r\n    </g>\r\n    <g id=\"7square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">7</text>\r\n    </g>\r\n    <g id=\"8square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <text x=\"11\" y=\"16\">8</text>\r\n    </g>\r\n    <g\r\n      id=\"explosion\"\r\n      transform=\"translate(-107.4078,-172.05911)\">\r\n      <g\r\n        id=\"g7579\"\r\n        transform=\"matrix(29.329979,0,0,29.329979,-12447.671,-15732.122)\">\r\n        <polygon\r\n          style=\"fill:#ed1c24\"\r\n          id=\"polygon7581\"\r\n          points=\"438.161,557.364 435.167,554.676 431.256,555.618 432.888,551.941 428.063,547 434.786,548.926 438.063,542.25 438.238,549.801 444.313,551.25 438.475,553.354 438.161,557.364 \" />\r\n        <polygon\r\n          style=\"fill:#ed1c24\"\r\n          id=\"polygon7583\"\r\n          points=\"443.313,556.5 436.727,554.135 433.563,560 433.908,553.153 430.899,551.584 433.875,550.098 434.319,546.69 436.675,549.193 439.958,548.655 438.438,551.688 443.313,556.5 \" />\r\n      </g>\r\n    </g>\r\n    <g id=\"explode_square\">\r\n      <use xlink:href=\"#square\" x=\"0\" y=\"0\"/>\r\n      <use xlink:href=\"#explosion\" x=\"200\" y=\"170\" transform=\"scale(.025,.025)\"/>\r\n    </g>\r\n  </defs>\r\n\r\n  <g text-anchor=\"middle\" >\r\n    <use (mousedown)=\"mousedown($event, obj.col, obj.row)\" (mouseup)=\"mouseup($event, obj.col, obj.row)\" (contextmenu)=\"false\" *ngFor=\"let obj of gameObjects\"\r\n         [attr.x]=\"obj.x\"\r\n         [attr.y]=\"obj.y\"\r\n         [attr.width]=\"obj.width\"\r\n         [attr.height]=\"obj.height\"\r\n         [attr.transform]=\"obj.getTransformations()\"\r\n         [attr.xlink:href]=\"'#' + obj.template\"\r\n    />\r\n  </g>\r\n</svg>\r\n\r\n"

/***/ }),

/***/ "./src/app/game/screen/screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Playground__ = __webpack_require__("./src/app/game/models/Playground.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenComponent = /** @class */ (function () {
    function ScreenComponent() {
        this.squareSize = 20;
        this.gameObjects = [];
        this.audioDict = {};
    }
    ScreenComponent.prototype.ngOnInit = function () {
        this.playground = new __WEBPACK_IMPORTED_MODULE_1__models_Playground__["a" /* Playground */];
        this.gameObjects = this.playground.toArray();
        this.audioDict['explosion'] = new Audio();
        this.audioDict['explosion'].src = '../../../assets/sounds/explosion.ogg';
        this.audioDict['explosion'].load();
    };
    ScreenComponent.prototype.mouseup = function (e, x, y) {
        if (e.button === 2) {
            // Can have sounds for when pitching flag.
            this.playground.toggleFlag(x, y);
        }
        else {
            var hasMine = this.playground.pop(x, y).hasMine;
            if (hasMine) {
                this.audioDict['explosion'].play();
                var currentMine_1 = this.playground.get(x, y);
                this.playground
                    .toArray()
                    .filter(function (e) { return e.hasMine && e.pos !== currentMine_1.pos; })
                    .forEach(function (mine) { return mine.reveal(false); });
            }
        }
    };
    ScreenComponent.prototype.mousedown = function (e, x, y) {
    };
    ScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-screen',
            template: __webpack_require__("./src/app/game/screen/screen.component.html"),
            styles: [__webpack_require__("./src/app/game/screen/screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenComponent);
    return ScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map