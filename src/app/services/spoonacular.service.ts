import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  
  apiKey="apiKey=08ea48cd759849bbacf7dfea728c073f";


  constructor(private http: HttpClient) { }



  foot(query:string){

    // Se crean las contantes  de cabecera y body para realizar el consumo de la api de login
   
      const url=this.getUrl(query)
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
