import {Injectable} from '@angular/core';

import {HEROES} from '../models/mock-heroes';
import {Hero} from '../models/hero';
import {Logger} from '../logger.service';

@Injectable()
export class HeroService{
    initHero:Hero;
    constructor(private logger:Logger){
        this.initHero = new Hero();
        this.initHero.id = 101;
        this.initHero.name = new Date().toISOString();
        this.initHero.isSecret = true;
        this.logger.log(`HeroService constructor : ${this.initHero.name}`);
    }
    getHeroes() {
        let heroes:Hero[] = HEROES.slice(0);
        heroes.push(this.initHero);
        this.logger.log(`getHeroes : ${new Date().toISOString()}`);
        return heroes;
    }
}