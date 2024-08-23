import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonItem, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { RecipesService } from '../services/recipes.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink,IonButtons, IonMenuButton, IonInput, IonItem, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList]
})




export class MainPage implements OnInit {

  public query:any; //tener en cuenta con recipes service
  
  recipes: any[] = [];

  constructor(public api:RecipesService) { }


  search(){
    this.api.getRecipes(this.query).subscribe((result)=>{
      console.log(result);
      this.recipes = result.hits.map((hit: { recipe: any; }) => hit.recipe);
    });

  }

  encodeURIComponentWrapper(uri: string): string {
    return encodeURIComponent(uri);
  }

  

  ngOnInit() {
    this.search();
  }

}
