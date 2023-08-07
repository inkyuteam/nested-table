import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedTableComponent } from './components/nested-table/nested-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'nested-table', component: NestedTableComponent },
  { path: '', redirectTo: '/nested-table', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
