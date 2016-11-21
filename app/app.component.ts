import { Component } from '@angular/core';

/**
 * Production mode
 * import { enableProdMode } from '@angular/core';
enableProdMode();*/

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
   <fire-ice>Born Under a Bleeding Star....</fire-ice>
   <unburnt>Mother of Dragons...</unburnt>
  `,
  styleUrls: ['app.component.css'],
  
})

export class AppComponent {
  title = `The Game of Thrones 
  - You Win or you Die`;
}
