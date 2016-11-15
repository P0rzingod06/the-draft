import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Manager } from './manager'


@Injectable()
export class ManagerService {
	apiRoot: string = 'http://the-draft-api.herokuapp.com';
	managersRoute: string = '/api/managers';

	managersURL: string = this.apiRoot + this.managersRoute;

    constructor(private http: Http) { }

    getManagers(): Observable<Manager[]> {
        return this.http.get(this.managersURL)
            .map((response: Response) => <Manager[]> response.json())
            .catch(this.handleError);
    }

    createManager(manager: Manager): Observable<Manager[]> {
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post(this.managersURL,manager,headers)
        .map((response: Response) => response.json().data as Manager[]);
    }

    private handleError(error: Response){
        //TODO: Error handling dawwgggg
        return Observable.throw(error.json().error || 'API Error');
    }
}