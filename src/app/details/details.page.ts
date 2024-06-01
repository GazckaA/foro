import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //Se agrega para poder recibir parametros desde otra pagina (recibir que evento se desea ver)

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  evento: any; //Variable donde se va a guardar todos los detalles del evento como un objeto

  constructor(public router: Router, //en el constructor se inyecta el router y el route para poder recibir parametros (lo que se pone entre parentesis despues de "constructor")
    public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()) {
        this.evento = this.router.getCurrentNavigation(); //Se recibe el mensaje completo que viene desde la pagina anterior
        this.evento = this.evento.extras.state.evento; //Se guarda en la variable evento solo el objeto de interes
      }
    }); //Se recibe el evento que se desea ver y se guarda en la variable evento
  }


  
  ngOnInit() {
  }

}
