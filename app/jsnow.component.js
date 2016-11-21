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
var weapon_service_1 = require('./weapon.service');
var JsnowComponent = (function () {
    function JsnowComponent(weaponService) {
        this.weaponService = weaponService;
    }
    JsnowComponent.prototype.ngOnInit = function () {
        this.slash = "obliterated the White Walkers";
        this.destiny = 'Lead the living against the DEAD!!!';
        this.weapon = this.weaponService.sword("Slash");
    };
    JsnowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fire-ice',
            templateUrl: 'jsnow.component.html'
        }), 
        __metadata('design:paramtypes', [weapon_service_1.WeaponService])
    ], JsnowComponent);
    return JsnowComponent;
}());
exports.JsnowComponent = JsnowComponent;
//# sourceMappingURL=jsnow.component.js.map