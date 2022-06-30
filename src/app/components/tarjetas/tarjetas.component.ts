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

    let platoId;

    /*
    if ( item.type === 'artist' ) {
      platoId = item.id;
    } else {
      platoId = item.artists[0].id;
    }
    */
    this.router.navigate([ '/plato', platoId  ]);

  }


}
