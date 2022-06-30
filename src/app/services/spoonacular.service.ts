import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  
  apiKey="apiKey=36b65f334cca44d89f35c680d0c95092";


  constructor(private http: HttpClient) { }



  foot(query:string, opciones=""){

    // Se crean las contantes  de cabecera y body para realizar el consumo de la api de login
   
      const url=this.getUrl(query, opciones)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    //se retorna el observable
    return this.http.get(url, {headers})
                    
                    

}


getUrl(query:string,opciones:string=""){

  const url = `https://api.spoonacular.com/${query}?${this.apiKey}&${opciones}`
  return url;

}



}
