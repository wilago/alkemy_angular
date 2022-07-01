import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent  {

  plato;
  id: string;

  constructor(private router:ActivatedRoute , private  spoonacularService: SpoonacularService) {

        
    this.router.params.subscribe( params => {
        
      console.log(params['id']);
      this.getPlato(params['id'])
    });


   }

  

   getPlato(id:string){


    //https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
    let query=`recipes/${id}/information`;
    let  opciones="includeNutrition=false";
     this.spoonacularService.foot(query, opciones)
        .subscribe(data=>{
                 console.log("Plato",data);
                 this.plato= data;
                 
              
        });

   }




}
