import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeroListComponent } from './hero/hero-list.component';
import {HeroService} from './hero/hero.service';
import {Logger, EvenBetterLogger, UserService, eventBetterLoggerFactory, loggerProvider} from './logger.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ],
  //providers:[HeroService, Logger]
  //providers:[ UserService, { provide: Logger, useClass: EvenBetterLogger, deps: [UserService] }, HeroService]
  // providers:[ UserService, 
  //   { provide: Logger, 
  //     useFactory: eventBetterLoggerFactory, 
  //     deps: [UserService] }, 
  //   HeroService]
  providers:[HeroService, UserService, loggerProvider]

})
export class AppModule { }
