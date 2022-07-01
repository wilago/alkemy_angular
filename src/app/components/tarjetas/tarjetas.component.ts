import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  



  verPlato( item: any ) {
    //console.log("item",item.id);

    this.router.navigate([ '/menu/plato', item.id ]);

  }


}
