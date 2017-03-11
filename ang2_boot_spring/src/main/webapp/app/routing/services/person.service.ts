import { Injectable } from '@angular/core';

import { Person } from './person';
import { PERSON } from './mock-person';

@Injectable()
export class PersonService {

  getPersons(): Promise<Person[]> {
    return Promise.resolve(PERSON);
  }
  
  getPerson(id: number): Promise<Person> {
    return this.getPersons()
               .then(persons => persons.find(person => person.id === id));
  }
}