import {Component, Input, OnInit} from '@angular/core';
import {IGame} from "../../models/game";

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  //get the parent var
  // @ts-ignore
  @Input() gameT: IGame;
  constructor() { }

  ngOnInit(): void {
  }

}
