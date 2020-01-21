import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl :any = "";
  getContent:any = "";

  constructor() { 
    this.baseUrl = "https://api.flickr.com";
    this.getContent = "/services/feeds/photos_public.gne?format=json";
  }
}
