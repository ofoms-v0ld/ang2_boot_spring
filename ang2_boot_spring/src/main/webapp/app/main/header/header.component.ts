import { Component } from '@angular/core';
import { TrackScrollDirective } from '../../shared/directives/trackscroll.directive';

@Component({
    selector:'other-header',
    templateUrl: 'app/main/header/header.component.html',
    styleUrls: ['app/main/header/header.component.css'],
    directives: [TrackScrollDirective]
})
export class HeaderComponent{
    shrinkCssClass : string = '';
    shrink : string = 'fa-3x';

    onScrolled(yPos : number) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
        this.shrink = yPos ? "fa-1x" : "fa-3x";
    }
}
