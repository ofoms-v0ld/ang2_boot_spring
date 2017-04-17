import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';

@Component({
	  selector:'module_angular',
	  templateUrl: 'app/other/angular_tasks/components/angular.tasks.component.html',
	  animations:[
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
      ]
})

export class AgularTasksComponent {
 constructor(){
 	
 }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/