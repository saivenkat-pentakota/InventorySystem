import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {
  basepath = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  public getShops(){
    let path:any = this.basepath+'/shops';
    return this.http.get(path);
  }
}
