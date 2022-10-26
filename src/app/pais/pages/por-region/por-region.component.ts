import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  `
  ]
})
export class PorRegionComponent  {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises:Country[] = [];

  constructor(private paisService: PaisService) { }

  getClassCss(region:string){
    return (region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'; 
  };
  activarRegion(region:string){

    if(region===this.regionActiva) return;

    this.paises= [];
    this.regionActiva = region;
    this.paisService.getPiasPorRegion(region).subscribe(paises=>this.paises = paises);
  }

}
