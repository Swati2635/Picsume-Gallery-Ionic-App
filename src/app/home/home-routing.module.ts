import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PicDetailComponent } from '../Components/pic-detail/pic-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'PicDetail/:id',
    component: PicDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
