import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Manager } from './manager'


@Injectable()
export class ManagerService {
	apiRoot: string = 'http://localhost:12345';
	managersRoute: string = '/api/managers';

	managersURL: string = this.apiRoot + this.managersRoute;

    constructor(private _http: Http) { }

    getManagers();

    getManagers(): Observable<Manager[]> {
        return this._http.get(this.managersURL)
            .map((response: Response) => <Manager[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        //TODO: Error handling dawwgggg
        return Observable.throw(error.json().error || 'API Error');
    }
}