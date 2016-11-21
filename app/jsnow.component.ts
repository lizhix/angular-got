import { Component, Input, OnInit } from '@angular/core';
import { WeaponService } from './weapon.service';


@Component({
    moduleId: module.id,
    selector: 'fire-ice',
    templateUrl: 'jsnow.component.html'
    //styleUrls: ['app.component.css']
})

export class JsnowComponent implements OnInit {
    destiny: string;
    slash: string;
    weapon: string;

    constructor(
        private weaponService: WeaponService
    ) { }

    ngOnInit(): void {

        this.slash = "obliterated the White Walkers";
        this.destiny = 'Lead the living against the DEAD!!!';
        this.weapon = this.weaponService.sword("Slash");

    }


}
