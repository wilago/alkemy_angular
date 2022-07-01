import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SpoonacularService } from 'src/app/services/spoonacular.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platosVegan:any;
  platosOther:any;
  mensajeError:string;
  constructor(private auth: AuthService, private router: Router, private spoonacularService:SpoonacularService) { 


  }

   ngOnInit() {
    
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
        
  }


  salir(){
      this.auth.logout();
      this.router.navigateByUrl('/login');
  }

  

  

}
