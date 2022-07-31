import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search :string="";

  constructor(private router : Router ,  private httpService:HttpService ,
              private activatedRoute:ActivatedRoute


  ) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    //search is the name of input html what's taped by the user see router
    //this.httpService.getGameList('metacrit',this.search=f.value.search)
    this.router.navigate(['search-page' , this.search])

  }
}
