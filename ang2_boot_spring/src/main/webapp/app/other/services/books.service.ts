import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Books } from '../model/books';

@Injectable()
export class BooksService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private booksUrl = 'books_module/books/subone/api/books/';  // URL to web api
	
	constructor(private http: Http){}

  getBooks(): Promise<Books[]> {
    return this.http.get(this.booksUrl)
               .toPromise()
               .then(response => response.json() as Books[])
               .catch(this.handleError);
  }
}