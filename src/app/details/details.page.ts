import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  evento: any;

  constructor(public router: Router, 
    public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()) {
        this.evento = this.router.getCurrentNavigation();
        this.evento = this.evento.extras.state.evento;
      }
    });
  }


  
  ngOnInit() {
  }

}
