import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public id: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id'] })
  }
  ngOnInit() {
  }

}