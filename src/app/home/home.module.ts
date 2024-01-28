import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PicDetailComponent } from '../Components/pic-detail/pic-detail.component';
import { ImgdetailPopoverComponent } from '../Components/imgdetail-popover/imgdetail-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [HomePage, PicDetailComponent, ImgdetailPopoverComponent],
})
export class HomePageModule {}
