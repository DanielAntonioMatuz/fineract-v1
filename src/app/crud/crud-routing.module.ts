import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { ViewCrudComponent } from './View/view-crud/view-crud.component';
import { CreateComponent } from './create/create.component';

/** Custom Resolvers */
import { GetOfficesResolver } from '../collections/individual-collection-sheet/get-offices.resolver';

const routes: Routes = [
  Route.withShell([
    {
      path: 'collections',
      children: [
        {
          path: 'view',
          data: { title: extract('View data from Crud test'), breadcrumb: 'View data from Crud test', routeParamBreadcrumb: false },
          component: ViewCrudComponent,
          resolve: {
            officesData: GetOfficesResolver
          }
        },
        {
          path: 'create',
          data: { title: extract('Create data from Crud test'), breadcrumb: 'Create data from Crud test', routeParamBreadcrumb: false },
          component: CreateComponent,
          resolve: {
            officesData: GetOfficesResolver
          }
        },
      ]
    },
    {
      path: 'create-api',
      component : CreateComponent,
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [GetOfficesResolver],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
