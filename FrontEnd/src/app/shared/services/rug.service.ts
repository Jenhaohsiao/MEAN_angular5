import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Rug } from '../models/rug.model';

@Injectable()
export class RugService {
  readonly rugApi = `${environment.url}/api/rugs`;
  readonly defaultImageUrl = '../assets/images/no_image.png';
  private headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getRugs(): Observable<Rug[]> {
    return this.httpClient.get<Rug[]>(this.rugApi);
  }

  addRug(rug: Rug): Observable<Rug> {
    return this.httpClient.post<Rug>(this.rugApi, rug, { headers: this.headers });
  }

  updateRug(rug: Rug): Observable<void> {
    return this.httpClient.put<void>(`${this.rugApi}/${rug._id}`, rug, { headers: this.headers });
  }

  deleteRug(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rugApi}/${id}`);
  }

  uploadImage(id: string, filesToUpload: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('image', filesToUpload, filesToUpload['name']);
    return this.httpClient.post<any>(`${this.rugApi}/${id}/upload`, formData);
  }

  getSafeResourceUrl(rug: Rug): SafeResourceUrl {
    if (rug.imagePath) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.url}/${rug.imagePath}`);
    }

    return this.defaultImageUrl;
  }
}


