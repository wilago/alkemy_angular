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
  constructor(private auth: AuthService, private router: Router, private spoonacularService:SpoonacularService) { 


  }

   ngOnInit() {
    
    let query='recipes/complexSearch/';
    let  opciones="query=&diet=vegan&number=2&fillIngredients=true";
     this.spoonacularService.foot(query, opciones)
        .subscribe(data=>{
                 console.log("Vegans",data['results']);
                 this.platosVegan= data['results'];
                 
              
        });

    query='recipes/complexSearch/';
    opciones="query=meat&type=main course&diet=&number=2&fillIngredients=true";
     this.spoonacularService.foot(query, opciones)
        .subscribe(data=>{
                 console.log("Others",data['results']);
                 this.platosOther= data['results'];
              
              
        })
        
  }


  salir(){
      this.auth.logout();
      this.router.navigateByUrl('/login');
  }


  

}
