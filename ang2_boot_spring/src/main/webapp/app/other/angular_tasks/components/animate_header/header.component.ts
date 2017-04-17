import { Component } from '@angular/core';
import { TrackScrollDirective } from './directives/trackscroll.directive';

@Component({
    selector:'other-header',
    templateUrl: 'app/other/angular_tasks/components/animate_header/header.component.html',
    styleUrls: ['app/other/angular_tasks/components/animate_header/header.component.css'],
    directives: [TrackScrollDirective]
})
export class HeaderComponent{
    shrinkCssClass : string = '';

    onScrolled(yPos : number) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
    }
}