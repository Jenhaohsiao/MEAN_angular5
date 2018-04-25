import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Rug } from '../models/rug.model';

@Injectable()
export class RugService {
  readonly rugApi = `${environment.url}/api/rugs`;
  private headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) {}


  getRugs(): Observable< Rug[]> {
    return this.httpClient.get<Rug[]>(this.rugApi);
  }

  addRug(rug: Rug): Observable<Rug> {
    return this.httpClient.post<Rug>(this.rugApi, rug, { headers: this.headers });
  }

  updateRug(rug: Rug): Observable<void > {
    return this.httpClient.put<void>(`${this.rugApi}/${rug._id}`, rug, { headers: this.headers });
  }

  deleteRug(id: string): Observable<void > {
    return this.httpClient.delete<void>(`${this.rugApi}/${id}`);
  }

}


