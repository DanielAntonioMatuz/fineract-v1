
import {Component} from '@angular/core';
import {UsersService} from '../../../users/users.service';
import {crudService} from '../../crud.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cliente Azure en MERCADO ', weight: 1.0079, symbol: 'MXN'},
  {position: 2, name: 'Cliente Azure en MERCADO ', weight: 4.0026, symbol: 'US'},
  {position: 3, name: 'Cliente Azure en MERCADO ', weight: 6.941, symbol: 'GB'},
  {position: 4, name: 'Cliente Azure en MERCADO ', weight: 9.0122, symbol: 'JPN'},
  {position: 5, name: 'Cliente Azure en MERCADO ', weight: 10.811, symbol: 'CHN'},
  {position: 6, name: 'Cliente Azure en MERCADO ', weight: 12.0107, symbol: 'ARG'},
  {position: 7, name: 'Cliente Azure en MERCADO ', weight: 14.0067, symbol: 'BRS'},
  {position: 8, name: 'Cliente Azure en MERCADO ', weight: 15.9994, symbol: 'ALM'},
  {position: 9, name: 'Cliente Azure en MERCADO ', weight: 18.9984, symbol: 'FRA'},
  {position: 10, name: 'Cliente Azure en MERCADO ', weight: 20.1797, symbol: 'ES'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'mifosx-view-crud',
  templateUrl: './view-crud.component.html',
  styleUrls: ['./view-crud.component.scss'],
  providers: [crudService],
})
export class ViewCrudComponent {
  displayedColumns: string[] = ['mercado', 'nombre', 'ancho inversión', 'región'];
  dataSource = ELEMENT_DATA;
  data: any[] = [];
  constructor(
    private _benefactorData: crudService,
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.forCycle();
    this.getDataTest();
  }

  forCycle() {
    for (let i = 0; i < 100; i++) {
      this.data.push({'number': i});
    }
  }

  getDataTest() {
      this._benefactorData.getBenefactorList().subscribe((data) => {
        console.log(data);
      });
  }
}
