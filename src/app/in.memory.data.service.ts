import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Brand' },
      { id: 12, name: 'Bagel' },
      { id: 13, name: 'Morgana' },
      { id: 14, name: 'Teemo' },
      { id: 15, name: 'Twitch' },
      { id: 16, name: 'Corki' },
      { id: 17, name: 'Fizz' },
      { id: 18, name: 'Braum' },
      { id: 19, name: 'Kalista' },
      { id: 20, name: 'Xin Zhao' }
    ];
    return {heroes};
  }
}