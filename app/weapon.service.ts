import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeaponService {


    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    sword(slash: string): string {
        return slash;
    }


    hammer(): string {
        return "Strike";
    }

    spear(): string {
        return "Pearce";
    }

}