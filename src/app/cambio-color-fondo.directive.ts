import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[maCambioColorFondo]'
})
export class CambioColorFondoDirective 
  implements OnInit{
    @Input() color: string = 'red';
    @Input() visible: boolean = true;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    console.log('Directiva Cambio Color Ejecutada')
    console.log(this.elemento)
    this.elemento.nativeElement.style.backgroundColor = this.color;
    this.elemento.nativeElement.style.display = 
      this.visible == true ? 'block' : 'none';
  }

}
