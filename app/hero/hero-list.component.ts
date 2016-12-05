import {Component} from '@angular/core';

//import { HEROES }      from '../models/mock-heroes';
import {HeroService} from './hero.service';
import {Logger, EvenBetterLogger, UserService} from '../logger.service';

// An object in the shape of the logger service
let silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: () => {}
};


@Component({
    selector:'hero-list',
    template:`
        <div *ngFor="let hero of heroes">
            {{hero.id}} - {{hero.name}}
        </div>
    `,
    //providers:[ HeroService,  Logger]
    //providers:[  UserService, { provide: Logger, useClass: EvenBetterLogger }, HeroService]
    //providers:[{ provide: Logger, useValue: silentLogger }]
})
export class HeroListComponent{
    heroes:any;
    constructor(heroService:HeroService){
        this.heroes = heroService.getHeroes();
    }
}