import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {DirectoryComponent} from '../directory/directory.component';

const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'directory',
    component:DirectoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
