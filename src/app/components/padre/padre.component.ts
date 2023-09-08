import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  mensaje: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onMensajeChange(evento: any) {
    this.mensaje = evento.target.value;
  }

}
