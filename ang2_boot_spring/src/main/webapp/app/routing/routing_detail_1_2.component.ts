import { Component, Input } from '@angular/core';
import { Person } from './services/person';

@Component({
  selector: 'my-person-detail',
  template: `
    <div *ngIf="person">
      <h2>{{person.name}} details!</h2>
      <div>
        <label>id: </label>{{person.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="person.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class PersonDetailComponent {
  @Input() person: Person;
}