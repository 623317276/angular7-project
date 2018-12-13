import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './page/index/index.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'index', component: IndexComponent },
	// { path: 'heroes', component: HeroListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
