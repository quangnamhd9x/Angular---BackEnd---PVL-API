import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './group/list/list.component';
import {AddComponent} from './group/add/add.component';

const routes: Routes = [
  {path: '', redirectTo: 'groups', pathMatch: 'full'},
  {path: 'groups', component: ListComponent},
  {path: 'groups/create', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
