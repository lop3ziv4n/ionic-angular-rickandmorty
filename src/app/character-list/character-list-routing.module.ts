import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharacterListPage} from './character-list.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterListPageRoutingModule {
}
