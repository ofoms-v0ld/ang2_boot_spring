import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Person } from './services/person';
import { PersonService } from './services/person.service';
import { Router } from '@angular/router';


@Component({
	  selector:'my-rout',
	  template: `
	    <h1>{{title}}</h1>
	    <ul>
	      <li *ngFor="let person of persons" (click)="onSelect(person)">
	        <span>{{person.id}}</span> {{person.name}}{{person.flat}}
	      </li>
	    </ul>
	    <div *ngIf="selectedPerson">
		  <h2>
		    {{selectedPerson.name | uppercase}} 
		  </h2>
		  <button (click)="gotoDetail()">View Details</button>
		</div>
		<hr>
	     <my-person-detail [person]="selectedPerson"></my-person-detail>
    	`
})

export class RoutigDetailComponent implements OnInit {
  title = 'Mock Services';
  persons: Person[];
  selectedPerson: Person;
  
  constructor(private personService: PersonService,private router: Router) { }
  
  getPersons(): void {
    this.personService.getPersons().then(persons => this.persons = persons);
  }
  ngOnInit(): void {
    this.getPersons();
  }
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/rout_module/optrout/detail_1/detail_2', this.selectedPerson.id]);
  }
}


