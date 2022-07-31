import {Component, OnDestroy, OnInit} from '@angular/core';
import {IGame} from "../../models/game";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IAPIResponse} from "../../models/apiResponse";

// @ts-ignore
import {Subscription} from "rxjs/dist/types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  public sort: string ="" ;
  public game: Array<IGame> | undefined ;
  game_search:string="" ;
  private routeSub : Subscription;
  private gameSub : Subscription ;


  constructor(
    private httpService:HttpService ,
    private router:Router ,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

     this.routeSub =this.activatedRoute.params.subscribe((params: Params) => {
       //see path
      if (params['game_search']) {
        this.fetchGames('metacrit', this.game_search=params['game_search']);
      } else {
        this.fetchGames('metacrit');
      }
    });
  }
//call method from service and subscribe to the observable to use it data gameList
  fetchGames(sort:string , search?:string):void{
    this.gameSub =this.httpService.getGameList(sort, search).subscribe((gameList:IAPIResponse<IGame>)=>{
      this.game=gameList.results;
      console.log(gameList);

    });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy():void
  {
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
