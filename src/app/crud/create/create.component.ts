import { Component, OnInit } from '@angular/core';
import {Benefactor} from '../models/benefactor';
import {crudService} from '../crud.service';

@Component({
  selector: 'mifosx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [crudService]
})
export class CreateComponent implements OnInit {

  benefactor: Benefactor = new Benefactor();
  status = false;
  constructor(private _benefactorService: crudService) { }

  ngOnInit(): void {
  }

  registrar() {
    this.save();
  }

  save() {
    this._benefactorService.createBenefactor(this.benefactor).subscribe(data => {
      console.log(data);
      this.status = true;
    }, error => {
      console.log(error);
    });
    this.benefactor = new Benefactor();
  }
}
