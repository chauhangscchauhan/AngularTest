import { Component, OnInit, HostListener } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';


import {GlobalService} from './global.service';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'problem-statement';
  feedData:any = [];
  

  constructor( private http: Http,public server: ServerService,private router: Router, public global: GlobalService) { }

  ngOnInit() {
    this.getContentData();
  }

  getContentData() {
    this.server.getData().subscribe(content => {
      var res = content.substr(15,content.length-2);
      if (res != null && res.length > 0 && res.charAt(res.length - 1) == ')') {
          res = res.substring(0, res.length - 1);
      }
      var data = JSON.parse(res);
      this.feedData.push(...data.items);
      // console.log(this.feedData)
    });
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          this.getContentData();
      }
  }
}
