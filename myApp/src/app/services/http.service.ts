import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import {IGame} from "../models/game";
import {IAPIResponse} from "../models/apiResponse";
import {Observable} from "rxjs";
import {forkJoin, map, pipe} from "rxjs";

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

    return this.http.get<IAPIResponse<IGame>>(`${env.BASE_URL}/games`, {
      params: parms,
    });


  }

  getGame(id: string): Observable<IGame> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      })
    );
  }

}
