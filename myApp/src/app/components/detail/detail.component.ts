import {Component, OnDestroy, OnInit} from '@angular/core';
import {IGame} from "../../models/game";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../../services/http.service";
// @ts-ignore
import {Subscription} from "rxjs/dist/types";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit , OnDestroy{

  gameRating = 0 ;
  gameId : string ="" ;
  // @ts-ignore
  public game:IGame ;
  public routeSub : Subscription ;
  public gameSub : Subscription ;

  constructor(
    private  activateRoute : ActivatedRoute ,
    private httpService : HttpService
  ) { }

  //angular api sbscribe
  ngOnInit(): void {
    this.routeSub = this.activateRoute.params.subscribe((param:Params) =>{this.gameId = param['id'] ;
    this.getGameDetail(this.gameId);
    });
  }


  //our service sub
  getGameDetail(id :string):void{
    this.gameSub = this.httpService.getGame(id).subscribe((gameDetail:IGame) =>{
      this.game = gameDetail ;

      setTimeout(()=>{
        this.gameRating = +this.game.metacritic;
      },1000);

    });
      }

  getColor(rate:number):string {
    if(rate>75){
      return "green" ;
    }
    if (rate>50) {
      return "orange";
    }
    else {
      return "yellow";
    }
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
