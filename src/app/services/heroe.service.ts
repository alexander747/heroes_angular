import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  url:string ="https://syscalad.com/heroes";

  constructor(private http:HttpClient) { }

   getHeroes(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
    });
    const urlheroes = 'heroes/heroes.php';
    // this.http.get(urlheroes, {headers}).subscribe(data=>{
    //   return data;
    // });

    // return this.http.get(urlheroes, {headers});
    return this.http.get(urlheroes, {headers}).pipe(map(data=>{
      return data["data"];
    }));
  

  }

  votar(id:string, like:string, dislike:string, plike:string, pdislike:string){
    const headers = new HttpHeaders({
      // 'Content-Type':'application/json',

    });

    const formulario = new FormData();
        
        formulario.append("id", id);
        formulario.append("like",like);
        formulario.append("dislike",dislike);
        formulario.append("plike",plike);
        formulario.append("pdislike",pdislike);

        const urlheroes = 'heroes/votar.php';
        return this.http.post(urlheroes, formulario, {headers});
  }

}
