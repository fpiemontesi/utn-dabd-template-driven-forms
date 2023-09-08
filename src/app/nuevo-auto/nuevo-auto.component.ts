import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auto } from '../auto';

@Component({
  selector: 'ma-nuevo-auto',
  templateUrl: './nuevo-auto.component.html',
  styleUrls: ['./nuevo-auto.component.css']
})
export class NuevoAutoComponent implements OnInit {
  nombre: string = '';
  modelo: string = '';
  auto: Auto = new Auto();

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(formulario: NgForm) {
    if (formulario.valid) {
      alert('El formulario tiene: ' 
        + JSON.stringify(this.auto))
    }
  }

}
