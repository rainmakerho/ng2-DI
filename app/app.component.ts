import { Component , Inject, OpaqueToken } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import {HeroService} from './hero/hero.service';
import {Logger, EvenBetterLogger, UserService} from './logger.service';


const randomFac = () => { console.log('randomFac'); return Math.random();  };
const randomF = new OpaqueToken('Random');
const randomV = new OpaqueToken('Random');
// randomF === randomV => false

@Component({
    selector: 'my-app',
    template: `
    r:{{this.r}}<hr>
    v:{{this.v}}<hr>
    f:{{this.f}}<hr>
    <hero-list></hero-list>
    
    `,
    //providers:[Logger]
    providers:[{ provide: 'Random', useValue: 101 },
            { provide: 'Random', useFactory: randomFac }, 
            {provide:randomF, useFactory:randomFac}, 
            {provide:randomV, useValue:103}
    ]
})
export class AppComponent {
    constructor(logger:Logger
    , @Inject('Random') private r:number,
     @Inject(randomV) private v:number,
     @Inject(randomF) private f:number ) {
        logger.log(`AppComponent constructor : ${new Date().toISOString()}`);
        console.log(`randomF === randomV: ${randomF === randomV}`);
    }
 }
/*
<div *ngFor="let hero of heroService.getHeroes()">
            {{hero.id}} - {{hero.name}}
        </div>
    <hr>

*/