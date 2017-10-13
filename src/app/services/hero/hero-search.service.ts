import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../../components/heroes/hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http.get(`api/heroes/?name=${term}`)
            .map(response => response.json().data as Hero[]);
    }
}

/**In ES2015, template literals are string literals allowing embedded expressions. 
 * They are enclosed by the back-tick (` `) instead of double or single quotes. 
 * Template literals can contain place holders. These are indicated by the Dollar 
 * sign and the curly braces (${term}) for example.
 * Typescript borrows this feature from ES2015 as well.
*/