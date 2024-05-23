import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  quotes(){
    // let url = `https://philosophyapi.pythonanywhere.com/api/ideas/`;
    let url = `https://philosophy-quotes-api.glitch.me/quotes`;
    return new Promise(resolve=>{
      this.http.get(url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}
