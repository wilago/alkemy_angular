import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= new UsuarioModel();
  recuerdame=true;
  errorMessage: string = "";
  token;

  constructor(private router: Router,
             private authService:AuthService,
             ) { }

  ngOnInit(): void {

    if(this.recuerdame){ 
      this.usuario.email=localStorage.getItem('email')
      this.recuerdame=true;
    }
    //this.usuario.email="challenge@alkemy.org";
    //this.usuario.password="react";
  }

      



    onSubmit( form:NgForm ) {
              
                    // Si la validacio no es correcta no hace nada
                  if(form.invalid){ return; }
        
                  Swal.fire({
                    allowOutsideClick:false,
                    icon: 'info',
                    text:'Epere porfavor',
                  });
        
                  Swal.showLoading();
        
                   // se consume el servicio
                  this.authService.loginUser(this.usuario)
                    .subscribe(data=>{
                      Swal.close();
                      if(this.recuerdame){ 
                        localStorage.setItem('email',this.usuario.email)
                      } else{
                        localStorage.setItem('email','');

                      }



                      this.router.navigate(['/menu']);
          
                     }, 
                     (err)=> {
                       console.log("Error",err.error.error);
                      this.errorMessage = "Login Incorrecto!";
                      Swal.fire({
                        title: "Error de autenticacion",
                        icon: 'error',
                        text:'Login Incorrecto!',
                      });
                     });
           


      
        } 

}
