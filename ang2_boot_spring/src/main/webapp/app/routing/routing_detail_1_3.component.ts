import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Person }         from './services/person';
import { PersonService }  from './services/person.service';

@Component({
  moduleId: module.id,
  selector: 'my-person-external-detail',
  templateUrl: './routing_detail_1_3.component.html'
  //,styleUrls: [ './hero-detail.component.css' ]
})
export class PersonExternalDetailComponent implements OnInit {
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.personService.getPerson(+params['id']))
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/