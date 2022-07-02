import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { PruebaspoonacularService } from '../../services/pruebaspoonacular.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 platosVegan:any;
  platosOther:any;
  mensajeError:string;
  id;




  constructor(private auth: AuthService, 
              private router: Router, 
              private spoonacularService:SpoonacularService,
              private pruebaspoonacularService:PruebaspoonacularService
              ) { 


  }

   ngOnInit() {
    

  //  this.platosVegan= this.pruebaspoonacularService.foodVegan();
  
    //this.platosOther= this.pruebaspoonacularService.foodOther();

   
 

    let query='recipes/complexSearch/';
    let  opciones="fillIngredients=true&diet=vegan&number=2";
     this.spoonacularService.foot(query, opciones)
        .subscribe(data=>{
                 console.log("Vegans",data);
                 this.platosVegan= data;
                
                 
              
        });

    query='recipes/complexSearch/';
    opciones="fillIngredients=true&query=meat&diet=&number=2&";
     this.spoonacularService.foot(query, opciones)
        .subscribe(data=>{
                 console.log("Others",data);
                 this.platosOther= data;
                
              
              
        },
        err=>{
          console.log("Error httpClient",err);
          this.mensajeError=err.error.message;
        }
        );


        
        
       console.log("Array datos vegan ",this.platosVegan);
        
  }


  salir(){
      this.auth.logout();
      this.router.navigateByUrl('/login');
  }



  funcGetId(e){
      
    //console.log("Padre",e);

     //filtra los datos del array platosVegans
     let newArr= this.platosVegan.results.filter(data=>
          data.id!=e
        );

       //console.log("New",newArr);
       this.platosVegan.results=newArr;


      //filtra los datos del array platosOther
     let newArr2= this.platosOther.results.filter(data=>
          data.id!=e
        );

       //console.log(newArr2);
       this.platosOther.results=newArr2;

  }

  
  

  

}
