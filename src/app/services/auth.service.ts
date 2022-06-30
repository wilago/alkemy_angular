import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 token:any;
 
 /*
  credential={
    "email": "challenge@alkemy.org",
    "password":"react"
  };
  */

  constructor(private http: HttpClient) {

    this.leerToken();

   }
   
   logout(){

    localStorage.removeItem("token");

   }
      
   // fundion que permite el logueo del usuario
   loginUser(credential){

          // Se crean las contantes  de cabecera y body para realizar el consumo de la api de login
          const url = `http://challenge-react.alkemy.org/`
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });

          const body= credential// JSON.stringify(this.credential); //
          //se retorna el observable
          return this.http.post(url,body, {headers})
                          .pipe(
                            map(resp => {
                              //console.log("Entro en map")
                                this.guardarToken(resp['token']);
                                return resp;
                            })
                          )

    }
    


    guardarToken(token:string){
        this.token= token;
        localStorage.setItem("token", token);
            
    }


    leerToken(){
        if (localStorage.getItem("token")){
            this.token= localStorage.getItem("token");
 
        } else {
          this.token= "";
        }
        return this.token;

    }


  //  valida que el token existe y que tenga mas de 2 caracteres
    estaAutenticado():boolean {
      //console.log('paso',this.token.length > 2);
      return this.token.length > 2;
    }


}
