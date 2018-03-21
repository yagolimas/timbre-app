import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Store } from "./store/store.model";

import { JSON_SERVER } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StoresService{

    constructor(private http: Http){}

    getStores() : Observable<Store[]> {
        return this.http.get(`${JSON_SERVER}/stores`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }
}