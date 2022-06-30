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

  constructor(private auth: AuthService, private router: Router, private spoonacular:SpoonacularService) { }

  ngOnInit(): void {
    const query='food/search/';
    this.spoonacular.foot(query)
        .subscribe(data=>{
                 console.log("data",data);
              
        })
  }

  salir(){
      this.auth.logout();
      this.router.navigateByUrl('/login');
  }


  

}
