import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {MessageService} from './message.service';

import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';


@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  // getTestHeroes():Observable<Hero[]>{
  //   return HEROES;
  // }

  getHeroes():Observable<Hero[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id:Number):Observable<Hero>{
    this.messageService.add(`HeroService: fetched id ${id}`);

    return of(HEROES.find(hero=>hero.id===id));
  }

}
