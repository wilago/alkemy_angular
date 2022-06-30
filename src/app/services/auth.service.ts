import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 token:any;
 
  credential={
    "email": "challenge@alkemy.org",
    "password":"react"
  };

  constructor(private http: HttpClient) { }

    async  loginUser(){

          // Se crean las contantes  de cabecera y body para realizar el consumo de la api de login
          const url = `http://challenge-react.alkemy.org/`
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
  

      const body= this.credential// JSON.stringify(this.credential); //
  
      this.http.post<any>(url,body, {headers})
                    .subscribe(data=>{
                     console.log(data);
                     ///return data;
                     this.token=data;
                     console.log("token",this.token.token);
                     localStorage.setItem("token",this.token.token);
                     return new Promise((accept, reject) => {
                      if (this.token.token) {
    
                        accept("Login correcto");
                      } else {
                        reject("login incorrecto");
                      }
                    });
                      

                    })


    }


}
