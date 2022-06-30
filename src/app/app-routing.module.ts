import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MENU_ROUTES } from './components/menu/menu.routes';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'', component:LoginComponent  },
  //{path:'**', pathMatch:'full', redirectTo:'home'  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component : LoginComponent  },
  {path:"menu", 
      component : MenuComponent,
      children: MENU_ROUTES,
      canActivate: [LoginGuard]
  },
//{path:'**', pathMatch:'full', redirectTo:'login'  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
