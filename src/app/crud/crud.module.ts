/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { CrudRoutingModule } from './crud-routing.module';

/** Custom Components */
import { ViewCrudComponent } from './View/view-crud/view-crud.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    SharedModule,
    PipesModule,
    CrudRoutingModule
  ],
  declarations: [
    ViewCrudComponent,
    CreateComponent
  ]
})
export class CrudModule { }
