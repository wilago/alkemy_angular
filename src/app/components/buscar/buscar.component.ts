import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private spoonacularService:SpoonacularService) { }

  platos;
  ngOnInit(): void {
  }


  buscar(termino: string) {
    console.log(termino); 
    let query='recipes/complexSearch/';
    let  opciones=`query=${termino}&number=10&maxFat=25`;
    //this.loading = true;
    this.spoonacularService.foot(query, opciones )
          .subscribe( (data: any) => {
            console.log("data",data);
            this.platos = data;
            //this.loading = false;
          });
  }

}
