import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Rug } from './rug';

@Injectable()
export class RugService {

  // get url by the path we set on "service.js" and "api.js"
  private _getUrl = '/api/rugs';
  private _postUrl = 'api/rug';

  // dependency injection to get and instance of Http
  constructor(private _http: Http) { }


  getRugsFromHttp() {
    // Get response mapped to JSON
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  addRug(rug: Rug) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});
    // Mapped response to JSON and pass JSON stringify file to DataBase
    return this._http.post(this._postUrl, JSON.stringify(rug), options).map((response: Response) => response.json());
  }

}


