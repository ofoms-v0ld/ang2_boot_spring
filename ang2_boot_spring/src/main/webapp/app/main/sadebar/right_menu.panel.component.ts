import { Component,ViewChild, OnInit, trigger, state, style, transition, animate,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'side-bar-menu',
  templateUrl: 'app/main/sadebar/right_menu.panel.component.html',
  styleUrls: ['app/main/sadebar/right_menu.panel.component.css'],
  animations: [
    trigger('myeffect', [
       state('in', style({
        transform: 'translate3d(0, 0, 0)';
        transform: 'scale(1)';
        opacity:1;
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)';
        transform: 'scale(-2)';
        opacity:-1;
      })),
      transition('in => out', animate('1000ms ease-in-out')),
      transition('out => in', animate('1000ms ease-in-out'))
    ])
  ]
  
})
export class RightMenuPanelComponent implements OnInit {

  itemState:string = 'out';
  @Output() onVoted = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}
  
  toggleItem() {
    // 1-line if statement that toggles the value:
    this.itemState = this.itemState === 'out' ? 'in' : 'out';
  }
  
  
  
  toggleSubItemt(event){
  var rty = event.currentTarget.children[1];
  rty.className = rty.className === 'submenu anim' ? 'submenu anim showl' : 'submenu anim';
  }
  
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    setTimeout(this.toggleItem(),3000);
   // this.voted = true;
  }
  
  
}