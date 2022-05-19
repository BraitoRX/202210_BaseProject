import { Component, OnInit } from '@angular/core';
import { banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {
  Bandas:banda[]=[];
  selectedBanda!: banda;
  promedio=0;
  activate:Boolean=false;
  onSelected(banda: banda): void {
    this.activate = true;
    this.selectedBanda = banda;
  }
  constructor(private bandaService: BandaService) { }
  getBandas(): void {
    this.bandaService.getBandas().subscribe(bandas => this.funcion(bandas));
  }
  promedioPuntuacion(bandas: banda[]): number {
    let suma: number = 0;
    for (let banda of bandas) {
      suma += banda.numberOfMembers;
    }

    return Math.round(suma / bandas.length);
  }
  funcion(bandas: banda[]) {
    this.Bandas = bandas;
    this.promedio=this.promedioPuntuacion(bandas);
  }
  ngOnInit() {
    this.getBandas();
  }

}
