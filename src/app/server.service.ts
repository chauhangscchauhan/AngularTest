import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/observable/of';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http, public global: GlobalService) { }

  getData() {
    return this.http.get(this.global.baseUrl + this.global.getContent)
    .map((res: Response) => res.text());

  }
}
