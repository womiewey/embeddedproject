// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class Provider {
  static get parameters() {
    return [[Http]];
  }
  constructor(public http: Http) {
    console.log('Success!!');
  }
  loadusers(){
    var url = "http://127.0.0.1:8000/"; //url ng django web server para magamit db
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
