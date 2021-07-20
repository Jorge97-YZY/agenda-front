import { UpdateComponent } from './components/agenda/update/update.component';
import { CreateComponent } from './components/agenda/create/create.component';
import { ReadAllCloseComponent } from './components/agenda/read-all-close/read-all-close.component';
import { ReadAllComponent } from './components/agenda/read-all/read-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list', component: ReadAllComponent
  },
  {
    path: 'close', component: ReadAllCloseComponent
  },
  {
    path: 'nova', component: CreateComponent
  },
  {
    path: 'update/:id', component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
