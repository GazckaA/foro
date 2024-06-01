// Toda la carpeta de services incluyendo sus archivos son creados usando el comando "ionic ng generate service api" y despues se modifican los archivos para que queden como se muestra a continuación.

import { HttpClient } from '@angular/common/http'; // Importar el modulo HttpClient para poder hacer peticiones a la API
import { Injectable } from '@angular/core'; // Importar el modulo Injectable 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { } // Inyectar el modulo HttpClient en el constructor

  quotes(){ // Crear una funcion llamada quotes que hace una peticion a la API 
    let url = `https://philosophy-quotes-api.glitch.me/quotes`; // Definir la URL de la API
    return new Promise(resolve=>{ // Crear una promesa
      this.http.get(url).subscribe(data=>{ // Hacer una peticion GET a la API
          resolve(data); // Resolver la promesa con los datos de la API (regresa los datos de la API)
      },error=>{ // Si hay un error en la peticion
        console.log(error); // Imprimir el error en la consola
      });
    });
  }
}
