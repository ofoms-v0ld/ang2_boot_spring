import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Books } from '../model/books';
import { BooksService } from '../../services/books.service';



@Component({
	  selector:'books-subone',
	  template: `
	    <h1>{{title}}</h1>
	    <div id="main" class="container main">
		    <div id="patterns" class="row">
			    <div class="col-md-3 col-md-push-9">
			    <div class="row">
			    <div class="col-md-12 col-sm-6">
			    <div class="sidebar-list-header checkbox">
			     <input type="checkbox" id="checkbox_allcats" checked="">
			      <label for="checkbox_allcats"> Categories </label>
			       <span class="amount-badge"> 11 </span>
			    </div>
			       <div class="sidebar-list-item checkbox" >
				        <input type="checkbox"  checked="">
				        <label>
				         <i class="fa fa-building-o" aria-hidden="true"></i> Architectural 
				         <span class="amount-badge"> 7 </span>
				          </label>
		          </div>
			          <div class="sidebar-list-item checkbox" category="Behavioral"> <input type="checkbox" id="checkbox_Behavioral" checked=""> <label for="checkbox_Behavioral"> <i class="fa fa-cogs" aria-hidden="true"></i> Behavioral <span class="amount-badge"> 17 </span> </label></div><div class="sidebar-list-item checkbox" category="Business Tier"> <input type="checkbox" id="checkbox_Business Tier" checked=""> <label for="checkbox_Business Tier"> <i class="fa fa-briefcase" aria-hidden="true"></i> Business Tier <span class="amount-badge"> 1 </span> </label></div><div class="sidebar-list-item checkbox" category="Concurrency"> <input type="checkbox" id="checkbox_Concurrency" checked=""> <label for="checkbox_Concurrency"> <i class="fa fa-comments" aria-hidden="true"></i> Concurrency <span class="amount-badge"> 12 </span> </label></div><div class="sidebar-list-item checkbox" category="Creational"> <input type="checkbox" id="checkbox_Creational" checked=""> <label for="checkbox_Creational"> <i class="fa fa-plus" aria-hidden="true"></i> Creational <span class="amount-badge"> 15 </span> </label></div><div class="sidebar-list-item checkbox" category="Integration"> <input type="checkbox" id="checkbox_Integration" checked=""> <label for="checkbox_Integration"> <i class="fa fa-sign-in" aria-hidden="true"></i> Integration <span class="amount-badge"> 3 </span> </label></div><div class="sidebar-list-item checkbox" category="Other"> <input type="checkbox" id="checkbox_Other" checked=""> <label for="checkbox_Other"> <i class="fa fa-question" aria-hidden="true"></i> Other <span class="amount-badge"> 12 </span> </label></div><div class="sidebar-list-item checkbox" category="Persistence Tier"> <input type="checkbox" id="checkbox_Persistence Tier" checked=""> <label for="checkbox_Persistence Tier"> <i class="fa fa-database" aria-hidden="true"></i> Persistence Tier <span class="amount-badge"> 3 </span> </label></div><div class="sidebar-list-item checkbox" category="Presentation Tier"> <input type="checkbox" id="checkbox_Presentation Tier" checked=""> <label for="checkbox_Presentation Tier"> <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i> Presentation Tier <span class="amount-badge"> 4 </span> </label></div><div class="sidebar-list-item checkbox" category="Structural"> <input type="checkbox" id="checkbox_Structural" checked=""> <label for="checkbox_Structural"> <i class="fa fa-university" aria-hidden="true"></i> Structural <span class="amount-badge"> 11 </span> </label></div><div class="sidebar-list-item checkbox" category="Testing"> <input type="checkbox" id="checkbox_Testing" checked=""> <label for="checkbox_Testing"> <i class="fa fa-list-ul" aria-hidden="true"></i> Testing <span class="amount-badge"> 1 </span> </label></div></div><div class="col-md-12 col-sm-6 top20"><div class="sidebar-list-header checkbox"> <input type="checkbox" id="checkbox_alltags" checked=""> <label for="checkbox_alltags"> Tags </label> <span class="amount-badge"> 13 </span></div> <!--<div class="sidebar-list-item"><div class="btn-group-sm centerContents" role="group"> <button id="allTagsButton" type="button" class="btn btn-primary" style="width: 40%;">All</button> <button id="noTagsButton" type="button" class="btn btn-default" style="width: 40%;">None</button></div></div>--><div class="sidebar-list-item checkbox" tag="Apache Camel™"> <input type="checkbox" id="checkbox_Apache Camel™" checked=""> <label for="checkbox_Apache Camel™"> Apache Camel™ <span class="amount-badge"> 2 </span> </label></div><div class="sidebar-list-item checkbox" tag="Difficulty-Beginner"> <input type="checkbox" id="checkbox_Difficulty-Beginner" checked=""> <label for="checkbox_Difficulty-Beginner"> Difficulty-Beginner <span class="amount-badge"> 38 </span> </label></div><div class="sidebar-list-item checkbox" tag="Difficulty-Expert"> <input type="checkbox" id="checkbox_Difficulty-Expert" checked=""> <label for="checkbox_Difficulty-Expert"> Difficulty-Expert <span class="amount-badge"> 4 </span> </label></div><div class="sidebar-list-item checkbox" tag="Difficulty-Intermediate"> <input type="checkbox" id="checkbox_Difficulty-Intermediate" checked=""> <label for="checkbox_Difficulty-Intermediate"> Difficulty-Intermediate <span class="amount-badge"> 40 </span> </label></div><div class="sidebar-list-item checkbox" tag="EIP" data-toggle="tooltip" data-placement="left" title="" data-original-title="Enterprise Integration Patterns"> <input type="checkbox" id="checkbox_EIP" checked=""> <label for="checkbox_EIP"> EIP <span class="amount-badge"> 2 </span> </label></div><div class="sidebar-list-item checkbox" tag="Functional"> <input type="checkbox" id="checkbox_Functional" checked=""> <label for="checkbox_Functional"> Functional <span class="amount-badge"> 7 </span> </label></div><div class="sidebar-list-item checkbox" tag="Gang Of Four"> <input type="checkbox" id="checkbox_Gang Of Four" checked=""> <label for="checkbox_Gang Of Four"> Gang Of Four <span class="amount-badge"> 23 </span> </label></div><div class="sidebar-list-item checkbox" tag="I/O"> <input type="checkbox" id="checkbox_I/O" checked=""> <label for="checkbox_I/O"> I/O <span class="amount-badge"> 3 </span> </label></div><div class="sidebar-list-item checkbox" tag="Idiom"> <input type="checkbox" id="checkbox_Idiom" checked=""> <label for="checkbox_Idiom"> Idiom <span class="amount-badge"> 8 </span> </label></div><div class="sidebar-list-item checkbox" tag="Java"> <input type="checkbox" id="checkbox_Java" checked=""> <label for="checkbox_Java"> Java <span class="amount-badge"> 86 </span> </label></div><div class="sidebar-list-item checkbox" tag="Performance"> <input type="checkbox" id="checkbox_Performance" checked=""> <label for="checkbox_Performance"> Performance <span class="amount-badge"> 8 </span> </label></div><div class="sidebar-list-item checkbox" tag="Reactive"> <input type="checkbox" id="checkbox_Reactive" checked=""> <label for="checkbox_Reactive"> Reactive <span class="amount-badge"> 7 </span> </label></div><div class="sidebar-list-item checkbox" tag="Spring"> <input type="checkbox" id="checkbox_Spring" checked=""> <label for="checkbox_Spring"> Spring <span class="amount-badge"> 4 </span> </label></div></div></div>
			    </div>
			    <div class="col-md-9 col-md-pull-3">
				    <div class="content-area">
					    <div class="list-item-search">
						    <div class="input-group">
							     <i class="fa fa-search input-group-addon" aria-hidden="true" data-toggle="tooltip" data-placement="left" title=""></i>
							     <input type="text" class="form-control" id="searchBox" placeholder="logging...">
						     </div>
					    </div>
				    <div class="post-list-body">
				    	<div>
				    		<div *ngFor="let book of books" class="list-item" href="/patterns/api-gateway/" cats="All;Architectural" tags="All;Java;Difficulty-Intermediate;Spring">
					    		<a class="list-item-url" href="/patterns/api-gateway/">
					    		 	<span class="list-item-title">{{book.name}}</span>
					    		</a>
				    			<div class="float-right">
				    			   <span class="tags">
					    			   	<a href="javascript:;" class="tag-label" tag="Difficulty-Intermediate">Difficulty-Intermediate</a>
					    			   	<a href="javascript:;" class="tag-label" tag="Java">Java</a>
					    			   	<a href="javascript:;" class="tag-label" tag="Spring">Spring</a>
				    			   	</span>
				    			   	<span class="cats">
				    			   		<a href="javascript:;" class="cat-label" category="Architectural"> <i class="fa fa-building-o" aria-hidden="true"></i> Architectural</a>
				    			   	</span>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				    </div>
			    </div>
		    </div>
	    </div>
    	`,
  	  	styleUrls: ['./app/other/components/css/books.subone.component.css'],
  	  	providers: [BooksService]
})

export class BooksSuboneComponent implements OnInit {
  title = 'Http Service';
  books: Books[];
  
  constructor(private booksService: BooksService,private router: Router) { }
  
  getBooks(): void {
    this.booksService.getBooks().then(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
    console.log('TEST '+this.books);
  }
  
}


