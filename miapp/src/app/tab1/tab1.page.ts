import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  // Datos para los slides
  projects = [
    {
      img: 'assets/project1.png',
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.'
    },
    {
      img: 'assets/project2.png',
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.'
    },
    {
      img: 'assets/project3.png',
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3.'
    }
  ];

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Descargar',
      handler: () => {
        this.descargarCurriculum();
      }
    }
  ];

  descargarCurriculum() {
    // Suponiendo que el archivo PDF está en la carpeta 'assets'
    const link = document.createElement('a');
    link.href = 'assets/curriculum.pdf';  // Ruta al archivo PDF en tu proyecto
    link.download = 'curriculum_yuver.pdf';  // Nombre con el que se descargará el archivo
    link.click();
  }
  
  constructor() {}
}
