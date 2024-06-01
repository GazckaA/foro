import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //Importar Router y NavigationExtras para poder redirigir a otras páginas.
import { ApiService } from '../services/api.service'; //Importar ApiService para poder hacer peticiones a la API.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //En esta variable se almacena la información de los eventos del foro. Cada evento se guarda como un objeto con los siguientes atributos:
  //Evento: Nombre del evento.
  //Hora: Objeto con los atributos Inicio y Fin, que indican la hora de inicio y fin del evento.
  //Ubicacion: Arreglo con las ubicaciones del evento.
  //Descripcion: Descripción del evento.
  //imagenes: Arreglo con las rutas de las imágenes del evento.
  //Show: Booleano que indica si el evento se muestra en la lista de eventos por defecto (si este es falso solo se va a mostrar si la hora actual esta dentro del horario del evento o el evento esta por comenzar (en 15 minutos o menos)).
  cronograma = [
    {'Evento': 'Registro de asistencia', 
    'Hora': { 'Inicio': '08:30', 'Fin': '09:00' }, 
    'Ubicacion': ['Entrada'], 
    'Descripcion': '¡Bienvenido al foro! Por favor registra tu asistencia en la entrada del evento.',
    'imagenes': ['registro.png'],
    'Show': true},

    {'Evento': 'Panel de reflexión',
    'Hora': { 'Inicio': '09:00', 'Fin': '10:00' },
    'Ubicacion': ['Auditorio (primer y segundo piso)'],
    'Descripcion': 'La licenciada, profesora, divulgadora filosófica y creadora de contenido, Daniela Estefanía Ayala Córdova, junto con la licenciada y especialista en psicoterapia individual, de pareja y familiar, Rocío del Carmen Saavedra Jiménez, nos comparte sus conocimientos y reflexiones.',
    'imagenes': ['auditorio_pb.png', 'auditorio_p1.png', 'auditorio_p2.png'],
    'Show': true},

    {'Evento': 'Mesa de dialogo 1',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6202'],
    'Descripcion': 'Implicaciones morales de ser adulto o niño.',
    'imagenes': ['6202_pb.png', '6202_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 2',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6201'],
    'Descripcion': 'Biología de ser adulto.',
    'imagenes': ['6202_pb.png', '6201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 3',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4205'],
    'Descripcion': 'Autonomía.',
    'imagenes': ['6202_pb.png', '4205_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 4',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4203'],
    'Descripcion': '¿La vida como adulto tiene que diferenciarse de tu vida como "joven"?',
    'imagenes': ['6202_pb.png', '4203_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 5',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4201'],
    'Descripcion': 'Adultos berrinchudos.',
    'imagenes': ['6202_pb.png', '4201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 6',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6302'],
    'Descripcion': 'Desafíos emocionales en la trancición a la adultez.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6302_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 7',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6301'],
    'Descripcion': '¿Qué tan útil es la edad cómo parámetro de la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6301_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 8',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4305'],
    'Descripcion': 'Diferencia entre adolescencia y adultez a pesar del cambio constante.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4305_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 9',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4304'],
    'Descripcion': 'Madurez emocional y espritual: más allá de la edad y la experiencia.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4304_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 10',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4303'],
    'Descripcion': '¿Qué es la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4303_p2.png'],
    'Show': false},

    {'Evento' : 'Coffe break (receso)',
    'Hora': { 'Inicio': '10:45', 'Fin': '11:30' },
    'Ubicacion': ['Comedor', 'Jardineras', 'Coliseo'],
    'Descripcion': 'Disfruta de un descanso y recarga energías para continuar con el foro.',
    'imagenes': ['coffe_break.png'],
    'Show': true},

    {'Evento': 'Mesa de dialogo 1',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6202'],
    'Descripcion': 'Implicaciones morales de ser adulto o niño.',
    'imagenes': ['6202_pb.png', '6202_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 2',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6201'],
    'Descripcion': 'Biología de ser adulto.',
    'imagenes': ['6202_pb.png', '6201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 3',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4205'],
    'Descripcion': 'Autonomía.',
    'imagenes': ['6202_pb.png', '4205_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 4',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4203'],
    'Descripcion': '¿La vida como adulto tiene que diferenciarse de tu vida como "joven"?',
    'imagenes': ['6202_pb.png', '4203_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 5',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4201'],
    'Descripcion': 'Adultos berrinchudos.',
    'imagenes': ['6202_pb.png', '4201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 6',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6302'],
    'Descripcion': 'Desafíos emocionales en la trancición a la adultez.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6302_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 7',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6301'],
    'Descripcion': '¿Qué tan útil es la edad cómo parámetro de la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6301_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 8',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4305'],
    'Descripcion': 'Diferencia entre adolescencia y adultez a pesar del cambio constante.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4305_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 9',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4304'],
    'Descripcion': 'Madurez emocional y espritual: más allá de la edad y la experiencia.',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4304_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de dialogo 10',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4303'],
    'Descripcion': '¿Qué es la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4303_p2.png'],
    'Show': false},

    {'Evento': 'Cierre',
    'Hora': { 'Inicio': '12:15', 'Fin': '12:30' },
    'Ubicacion': ['Auditorio (primer y segundo piso)'],
    'Descripcion': 'Agradecemos tu participación en el foro, esperamos que hayas disfrutado de las conferencias y actividades.',
    'imagenes': ['auditorio_pb.png', 'auditorio_p1.png', 'auditorio_p2.png'],
    'Show': true},
  ]

  //En esta variable se almacena la información de la cita que se muestra en la parte superior de la página.
  //Es un objeto con los atributos quote y author, que contienen la cita y el autor de la misma respectivamente.
  //Se hace asi para que si la pagina cargo y la API no ha respondido aun, no se muestre error por intentar buscar algo que todavia no esta.
  //A su vez sirve para que si la API no responde y por ende la cita esta vacia no se muestre la carta de la cita.
  Quote: any = {
    'quote': '',
    'author': ''
  };

  //Constructor de la clase, se encarga de inicializar las variables de la clase.
  //Recibe como parametros un objeto de la clase Router y un objeto de la clase ApiService para poder redirigir a otras páginas y hacer peticiones a la API respectivamente.
  constructor(public router: Router,
    public quoteService: ApiService
  ) {}

  // Funcion que se encarga de redirigir a la pagina de detalles de un evento y pasarle la informacion del evento seleccionado.
  details(evento: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        'evento': evento
      }
    }; //Se crea un objeto de la clase NavigationExtras y se le asigna el evento seleccionado. Esto es lo que se va a pasar
    this.router.navigate(['details'], navigationExtras); //Se redirige a la pagina de detalles y se le pasa el objeto con la informacion del evento.
  }

  async ngOnInit() { //Funcion que se ejecuta al cargar la pagina.
    //se usa async para poder llamar a la funcion quote que es asincrona.
    this.quote(); //Se llama a la funcion quote para obtener una cita de la API.
  }

  async quote(){ //Funcion que se encarga de obtener una cita de la API.
    //se usa async para decirle al resto del coidgo que la API puede tardar en responder y que no se detenga la ejecucion del codigo.
    this.quoteService.quotes() //Se llama a la funcion quotes de la clase ApiService para obtener una cita de la API.
    .then((data:any)=>{ //Cuando la API responde...
      this.Quote = data[Math.floor(Math.random() * 128)]; //Se guarda una de las 128 citas que responde la API en la variable Quote de forma aleatoria.
    });
  }

  time(start: string, end: string){ //Funcion que se encarga de verificar si la hora actual esta dentro del horario de un evento. Recibe como parametros la hora de inicio y fin del evento.
    let now = new Date(); //Se obtiene la hora actual.
    let startHour = parseInt(start.slice(0,2)); //Se obtiene la hora de inicio del evento.
    let startMin = parseInt(start.slice(3,5)); //Se obtienen los minutos de inicio del evento.
    let endHour = parseInt(end.slice(0,2)); //Se obtiene la hora de fin del evento.
    let endMin = parseInt(end.slice(3,5)); //Se obtienen los minutos de fin del evento.

    return (
    startHour <= now.getHours() && endHour >= now.getHours() && //Se verifica si la hora actual esta entre la hora de inicio y fin del evento.
    (startHour == now.getHours()? startMin <= now.getMinutes() : true) && //Si la hora actual es igual a la hora de inicio del evento, se verifica si los minutos actuales son mayores o iguales a los minutos de inicio del evento.
    (endHour == now.getHours()? endMin >= now.getMinutes() : true)); //Si la hora actual es igual a la hora de fin del evento, se verifica si los minutos actuales son menores o iguales a los minutos de fin del evento.
    // si todo eso pasa se retorna true, lo que indica que la hora actual esta dentro del horario del evento. Si una sola condicion no se da se retorna false.
  }

  preTime(start: string, end: string){ //Funcion que se encarga de verificar si la hora actual esta a 15 minutos o menos de comenzar un evento. Recibe como parametros la hora de inicio y fin del evento.
    let now = new Date(); //Se obtiene la hora actual.
    let startHour = parseInt(start.slice(0,2)); //Se obtiene la hora de inicio del evento.
    let startMin = parseInt(start.slice(3,5)) - 15; //Se obtienen los minutos de inicio del evento y se le restan 15 minutos.
    if (startMin < 0){ //Si los minutos de inicio del evento menos 15 minutos es menor a 0...
      startMin = 60 + startMin; //Se le suma 60 para obtener los minutos reales.
      startHour -= 1; //Se le resta 1 a la hora de inicio del evento.
    }
    let endHour = parseInt(end.slice(0,2)); //Se obtiene la hora de fin del evento.
    let endMin = parseInt(end.slice(3,5)); //Se obtienen los minutos de fin del evento.

    return (
    startHour <= now.getHours() && endHour >= now.getHours() && //Se verifica si la hora actual esta entre la hora de inicio y fin del evento.
    (startHour == now.getHours()? startMin <= now.getMinutes() : true) && //Si la hora actual es igual a la hora de inicio del evento, se verifica si los minutos actuales son mayores o iguales a los minutos de inicio del evento.
    (endHour == now.getHours()? endMin >= now.getMinutes() : true)); //Si la hora actual es igual a la hora de fin del evento, se verifica si los minutos actuales son menores o iguales a los minutos de fin del evento.
    // si todo eso pasa se retorna true, lo que indica que la hora actual esta a 15 minutos o menos de comenzar el evento. Si una sola condicion no se da se retorna false.
  }

  handleRefresh(event: any) { //Funcion que se encarga de recargar la pagina. Se llama cuando se hace un pull to refresh.
    setTimeout(() => {
      // Any calls to load data go here
      location.reload(); //Se recarga la pagina.
      event.target.complete();
    }, 2000);
  }

}
