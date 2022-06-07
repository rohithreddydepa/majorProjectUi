import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(public http: HttpClient) {}
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
