import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'character-list',
        loadChildren: () => import('../character-list/character-list.module').then(m => m.CharacterListPageModule)
      },
      {
        path: 'character-detail/:id',
        loadChildren: () => import('../character-detail/character-detail.module').then(m => m.CharacterDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
