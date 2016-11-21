import { Component, Input, OnInit } from '@angular/core';
import { WeaponService } from './weapon.service';


@Component({
    moduleId: module.id,
    selector: 'unburnt',
    templateUrl: 'dani.component.html'
    //styleUrls: ['app.component.css']
})

export class DaniComponent implements OnInit {
    destiny: string;
    slash: string;
    weapon: string;

    constructor(
        private weaponService: WeaponService
    ) { }

    ngOnInit(): void {

        this.slash = "Unite the Iron Throne";
        this.destiny = `Put Cersi's head on a spike`;
        this.weapon = this.weaponService.sword("Stab");

    }


}
