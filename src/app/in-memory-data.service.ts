import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService {
  createDb() {
    const heroes: Hero[] = [
        { id: 11, name: 'Mira' },
        { id: 12, name: 'Ira' },
        { id: 13, name: 'Misha' },
        { id: 14, name: 'Andriy' },
        { id: 15, name: 'Dima' },
        { id: 16, name: 'Olena' },
        { id: 17, name: 'Khrystyna' },
        { id: 18, name: 'Vasyl' },
        { id: 19, name: 'Khrystyna 2' },
        { id: 20, name: 'Vlad' }
    ];
    return {heroes};
  }

  genID(heroes: Hero[]): number {
    return heroes.length > 0 ? heroes.reduce((max, hero) =>
      max > hero.id ? max : hero.id, -Infinity) : 11;
  }

  constructor() { }
}
