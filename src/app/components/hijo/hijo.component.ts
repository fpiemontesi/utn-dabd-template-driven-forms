import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ma-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent 
  implements OnInit, OnChanges {
  @Input() mensaje: string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges ejecutado')
    console.log(changes)
  }

  ngOnInit(): void {
  }

}
