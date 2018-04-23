import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RugService {

  // get url by the path we set on "service.js" and "api.js"
  private _getUrl = '/api/rugs';
  // dependency injection to get and instance of Http
  constructor(private _http: Http) { }

  // Get response mapped to JSON
  getRugsFromHttp() {
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

}


