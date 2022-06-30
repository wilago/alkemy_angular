import { Routes, } from '@angular/router';
import { BuscarComponent } from '../buscar/buscar.component';
import { HomeComponent } from '../home/home.component';
import { PlatoComponent } from '../plato/plato.component';


export const MENU_ROUTES: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component : HomeComponent  },
    {path:'buscar', component : BuscarComponent  },
    {path:'plato/:id', component : PlatoComponent  },
    {path:'**', pathMatch:'full', redirectTo:'home'  }

];



