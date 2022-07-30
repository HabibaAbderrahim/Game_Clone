import { Component, OnInit } from '@angular/core';
import {IGame} from "../../models/game";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IAPIResponse} from "../../models/apiResponse";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort: String | undefined ;
  public game: Array<IGame> | undefined ;


  constructor(
    private httpService:HttpService ,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

     this.activatedRoute.params.subscribe((params: Params) => {
       //see path
      if (params['game-search']) {
        this.fetchGames('metacrit', params['game-search']);
      } else {
        this.fetchGames('metacrit');
      }
    });
  }
//call method from service and subscribe to the observable to use it data gameList
  fetchGames(sort:string , search?:string):void{
    this.httpService.getGameList(sort, search).subscribe((gameList:IAPIResponse<IGame>)=>{
      this.game=gameList.results;
      console.log(gameList);

    });
  }

}
