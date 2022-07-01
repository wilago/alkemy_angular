import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];
  @Output() idPlato= new EventEmitter();
  constructor(private router: Router) {

   

   }

  



  verPlato( item:any ) {

      this.router.navigate([ '/menu/plato', item.id ]);
      console.log("ver plato" ,item);

  }


  getIdPlato(data:any ){

      this.idPlato.emit(data.id);

      console.log("item",data)

  }


}
