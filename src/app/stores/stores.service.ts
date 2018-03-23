import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { JSON_SERVER } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

import { Store } from "./store/store.model";
import { MenuItem } from '../store-detail/menu-item/menu-item.model';

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

    getStoreById(id: string) : Observable<Store>{
        return this.http.get(`${JSON_SERVER}/stores/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }

    reviewsOfStore(id: string) : Observable<any>{
        return this.http.get(`${JSON_SERVER}/stores/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }

    menuOfStore(id: string) : Observable<MenuItem[]>{
        return this.http.get(`${JSON_SERVER}/stores/${id}/instruments`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }
}