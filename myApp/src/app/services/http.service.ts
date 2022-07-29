import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import {IGame} from "../models/game";
import {IAPIResponse} from "../models/apiResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  //GET LIST GAMES
  getGameList(ordering:string , search?:string):Observable<IAPIResponse<IGame>>{
    let parms = new HttpParams().set("ordering",ordering);

    if(search){
      parms=new HttpParams().set('ordering',ordering).set('search',search);
    }

    return this.http.get<IAPIResponse<IGame>>('${env.BASE_URL}/games',{
      params:parms,
    });


  }


}
