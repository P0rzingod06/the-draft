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
var manager_service_1 = require('./manager.service');
var ManagerListComponent = (function () {
    function ManagerListComponent(ManagerService) {
        var _this = this;
        this.ManagerService = ManagerService;
        this.ManagerService.getManagers().subscribe(function (managers) { return _this.managers = managers; }, function (error) { return _this.errorMessage = error; });
    }
    ;
    ManagerListComponent = __decorate([
        core_1.Component({
            selector: 'manager-list',
            templateUrl: 'app/managers/manager-list.component.html',
            // styleUrls: ['app/managers/manager-list.component.css']
            providers: [manager_service_1.ManagerService]
        }), 
        __metadata('design:paramtypes', [manager_service_1.ManagerService])
    ], ManagerListComponent);
    return ManagerListComponent;
}());
exports.ManagerListComponent = ManagerListComponent;
//# sourceMappingURL=managerList.component.js.map