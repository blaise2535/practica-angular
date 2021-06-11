import { Component, OnInit } from '@angular/core';
import { Profesor } from '../models/Profesores';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
  profesorSelecionado?: Profesor;
  
  public titulo = 'Profesores';

  public profesores: Profesor[] = [
    {
      id: 1,
      nombre: 'pablo',
      segundo_nombre: 'martinez',
      telefono: 12345,
      especialidad: 'fisica',
    },
    {
      id: 2,
      nombre: 'andres',
      segundo_nombre: 'aguedo',
      telefono: 1234,
      especialidad: 'quimica',
    },
    {
      id: 3,
      nombre: 'geraldine',
      segundo_nombre: 'perez',
      telefono: 2345,
      especialidad: 'ingles',
    },
  ];

  profesorSelect(prof: Profesor) {
    this.profesorSelecionado = prof;
  }

  volver() {
    this.profesorSelecionado = undefined;
  }

  constructor() {}

  ngOnInit(): void {}
}
