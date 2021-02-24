import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'aaaaaaa',
    apellido: 'aaaaaa',
    correo: 'a@a.com',
    pais: '',
    genero: 'M'
  }

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    // peticion
    this.paisService.getPaises()
      .subscribe (paises => {
        // console.log(paises); // listo todos los paises al iniciar el proyecto
        this.paises = paises;
        this.paises.unshift({
          nombre: '[ Seleccione Pais]',
          codigo:''
        }); // agregar a la primera posicion un elemento
        console.log(this.paises);
      })
  }

  guardar (forma: NgForm) {
    //console.log(forma);

    if (forma.invalid) {

      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();

      });
      return;
    }
    console.log(forma.value);
  }

}
