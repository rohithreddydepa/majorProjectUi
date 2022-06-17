import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.baseUrl;
  private theme = new Subject<boolean>();
  getTheme(): Observable<boolean> {
    return this.theme.asObservable();
  }
  setTheme(data: boolean) {
    this.theme.next(data);
  }
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public http: HttpClient
  ) {
    this.theme.next(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  public get(url: string, body?: any) {
    return this.http.get(`${this.baseUrl}${url}`, body);
  }
  public post(url: string, data: any, options?: any) {
    const headers = { 'content-type': 'text/html' };
    const body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}${url}`, body, { headers: headers });
  }
  public put(url: string, data: any, options?: any) {}
}
