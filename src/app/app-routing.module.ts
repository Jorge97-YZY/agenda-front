import { ReadAllCloseComponent } from './components/agenda/read-all-close/read-all-close.component';
import { ReadAllComponent } from './components/agenda/read-all/read-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ReadAllComponent
  },
  {
    path: 'close', component: ReadAllCloseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
