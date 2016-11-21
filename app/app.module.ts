import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { JsnowComponent } from './jsnow.component';
import { DaniComponent } from './dani.component';
import { WeaponService } from './weapon.service';
import { IronViewService } from './ironview.service';


//import './rxjs-extensions';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,    // components here - create {{}} thingies
        JsnowComponent,
        DaniComponent
    ],

    providers: [WeaponService, IronViewService],       // services here - services registry

    bootstrap: [AppComponent]   /** only bootstrap components with anugular tags on index.html <my-app></my-app>
                                    should be for AppComponent only, other components add tags to template directive */
})
export class AppModule { }
