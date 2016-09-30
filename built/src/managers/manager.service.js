"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ManagerService = (function () {
    function ManagerService(_http) {
        this._http = _http;
        this.apiRoot = 'http://localhost:12345';
        this.managersRoute = '/api/managers';
        this.managersURL = this.apiRoot + this.managersRoute;
    }
    ManagerService.prototype.getManagers = function () {
        return this._http.get(this.managersURL)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ManagerService.prototype.handleError = function (error) {
        //TODO: Error handling dawwgggg
        return Observable_1.Observable.throw(error.json().error || 'API Error');
    };
    ManagerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ManagerService);
    return ManagerService;
}());
exports.ManagerService = ManagerService;
//# sourceMappingURL=manager.service.js.map