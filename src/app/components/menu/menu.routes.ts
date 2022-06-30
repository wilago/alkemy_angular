import { Routes, } from '@angular/router';

import { HomeComponent } from '../home/home.component';


export const MENU_ROUTES: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component : HomeComponent  },
    {path:'**', pathMatch:'full', redirectTo:'home'  }

];



