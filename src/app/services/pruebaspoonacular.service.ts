import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaspoonacularService {

  constructor() { }



foodVegan(){


      return {
        "offset": 0,
        "number": 2,
        "results": [
            {
                "id": 716429,
                "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
                "calories": 584,
                "carbs": "84g",
                "fat": "20g",
                "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
                "imageType": "jpg",
                "protein": "19g"
            },
            {
                "id": 715538,
                "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
                "calories": 521,
                "carbs": "69g",
                "fat": "10g",
                "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
                "imageType": "jpg",
                "protein": "35g"
            }
        ],
        "totalResults": 86
    }


}



foodOther(){


  return {
    "offset": 0,
    "number": 2,
    "results": [
        {
            "id": 716420,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "calories": 584,
            "carbs": "84g",
            "fat": "20g",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
            "protein": "19g"
        },
        {
            "id": 715521,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "calories": 521,
            "carbs": "69g",
            "fat": "10g",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
            "protein": "35g"
        }
    ],
    "totalResults": 86
}


}


}
