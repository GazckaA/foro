import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cronograma = [
    {'Evento': 'Registro de Asistencia', 
    'Hora': { 'Inicio': '08:30', 'Fin': '09:00' }, 
    'Ubicacion': ['Entrada'], 
    'Descripcion': '¡Bienvenido al foro! Por favor registra tu asistencia en la entrada del evento.',
    'imagenes': ['registro.png'],
    'Show': true},

    {'Evento': 'Panel de reflexión',
    'Hora': { 'Inicio': '09:00', 'Fin': '10:00' },
    'Ubicacion': ['Auditorio (primer y segundo piso)'],
    'Descripcion': 'La licenciada, profesora, divulgadora filosófica y creadora de contenido, Daniela Estefanía Ayala Córdova, junto con la licenciada y especialista en psicoterapia individual, de pareja y familiar, Rocío del Carmen Saavedra Jiménez, nos comparte sus conocimientos y reflexiones',
    'imagenes': ['auditorio_pb.png', 'auditorio_p1.png', 'auditorio_p2.png'],
    'Show': true},

    {'Evento': 'Mesa de Dialogo 1',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6202'],
    'Descripcion': 'Implicaciones morales de ser adulto o niño',
    'imagenes': ['6202_pb.png', '6202_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 2',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6201'],
    'Descripcion': 'Biología de ser adulto',
    'imagenes': ['6202_pb.png', '6201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 3',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4205'],
    'Descripcion': 'Autonomía',
    'imagenes': ['6202_pb.png', '4205_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 4',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4203'],
    'Descripcion': '¿La vida como adulto tiene que diferenciarse de tu vida como "joven"?',
    'imagenes': ['6202_pb.png', '4203_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 5',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4201'],
    'Descripcion': 'Adultos berrinchudos',
    'imagenes': ['6202_pb.png', '4201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 6',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6302'],
    'Descripcion': 'Desafíos emocionales en la trancición a la adultez',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6302_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 7',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 6301'],
    'Descripcion': '¿Qué tan útil es la edad cómo parámetro de la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6301_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 8',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4305'],
    'Descripcion': 'Diferencia entre adolescencia y adultez a pesar del cambio constante',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4305_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 9',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4304'],
    'Descripcion': 'Madurez emocional y espritual: más allá de la edad y la experiencia',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4304_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 10',
    'Hora': { 'Inicio': '10:05', 'Fin': '10:45' },
    'Ubicacion': ['Salón 4303'],
    'Descripcion': '¿Qué es la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4303_p2.png'],
    'Show': false},

    {'Evento' : 'Coffe Break (Receso)',
    'Hora': { 'Inicio': '10:45', 'Fin': '11:30' },
    'Ubicacion': ['Comedor', 'Jardineras', 'Coliseo'],
    'Descripcion': 'Disfruta de un descanso y recarga energías para continuar con el foro.',
    'imagenes': ['coffe_break.png'],
    'Show': true},

    {'Evento': 'Mesa de Dialogo 1',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6202'],
    'Descripcion': 'Implicaciones morales de ser adulto o niño',
    'imagenes': ['6202_pb.png', '6202_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 2',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6201'],
    'Descripcion': 'Biología de ser adulto',
    'imagenes': ['6202_pb.png', '6201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 3',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4205'],
    'Descripcion': 'Autonomía',
    'imagenes': ['6202_pb.png', '4205_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 4',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4203'],
    'Descripcion': '¿La vida como adulto tiene que diferenciarse de tu vida como "joven"?',
    'imagenes': ['6202_pb.png', '4203_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 5',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4201'],
    'Descripcion': 'Adultos berrinchudos',
    'imagenes': ['6202_pb.png', '4201_p1.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 6',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6302'],
    'Descripcion': 'Desafíos emocionales en la trancición a la adultez',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6302_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 7',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 6301'],
    'Descripcion': '¿Qué tan útil es la edad cómo parámetro de la madurez?',
    'imagenes': ['6202_pb.png', '6302_p1.png', '6301_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 8',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4305'],
    'Descripcion': 'Diferencia entre adolescencia y adultez a pesar del cambio constante',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4305_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 9',
    'Hora': { 'Inicio': '11:35', 'Fin': '12:15' },
    'Ubicacion': ['Salón 4304'],
    'Descripcion': 'Madurez emocional y espritual: más allá de la edad y la experiencia',
    'imagenes': ['6202_pb.png', '6302_p1.png', '4304_p2.png'],
    'Show': false},

    {'Evento': 'Mesa de Dialogo 10',
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

  Quote: any = {
    'quote': '',
    'author': ''
  };

  constructor(public router: Router,
    public quoteService: ApiService
  ) {}

  details(evento: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        'evento': evento
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

  async ngOnInit() {
    this.quote();
  }

  async quote(){
    this.quoteService.quotes().then((data:any)=>{
      this.Quote = data[Math.floor(Math.random() * 128)];
    });
  }

  time(start: string, end: string){
    let now = new Date();
    let startHour = parseInt(start.slice(0,2));
    let startMin = parseInt(start.slice(3,5));
    let endHour = parseInt(end.slice(0,2));
    let endMin = parseInt(end.slice(3,5));

    return (
    startHour <= now.getHours() && endHour >= now.getHours() &&
    (startHour == now.getHours()? startMin <= now.getMinutes() : true) &&
    (endHour == now.getHours()? endMin >= now.getMinutes() : true));
  }

  preTime(start: string, end: string){
    let now = new Date();
    let startHour = parseInt(start.slice(0,2));
    let startMin = parseInt(start.slice(3,5)) - 15;
    if (startMin < 0){
      startMin = 60 + startMin;
      startHour -= 1;
    }
    let endHour = parseInt(end.slice(0,2));
    let endMin = parseInt(end.slice(3,5));

    return (
    startHour <= now.getHours() && endHour >= now.getHours() &&
    (startHour == now.getHours()? startMin <= now.getMinutes() : true) &&
    (endHour == now.getHours()? endMin >= now.getMinutes() : true));
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      location.reload();
      event.target.complete();
    }, 2000);
  }

}
