import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Laddoo", "Laddoos are made of boondi","https://recipes.timesofindia.com/photo/55048059.cms")
  ];
  constructor() { }

  ngOnInit() {

  }
  

}
