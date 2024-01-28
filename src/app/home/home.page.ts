import { Component, OnInit } from '@angular/core';
import { PicsumServiceService } from '../Service/picsum-service.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ImgdetailPopoverComponent } from '../Components/imgdetail-popover/imgdetail-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  images: any[] = [];
  filteredImages: any[] = [];
  searchId: string = '';
  imgInfo: any;
  isEmplty: boolean = false;
  loading: boolean = true;
  constructor(
    private picsumService: PicsumServiceService,
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.picsumService.getImages().subscribe(
      (data) => {
        this.images = data;
        console.log(data, 'data');
        this.images.forEach((image) => (image.loaded = false));
        this.filteredImages = [...this.images];
        this.isEmplty = this.filteredImages.length === 0 ? true : false;
      },
      (error) => {
        console.error('Error fetching images: ', error);
      }
    );
  }

  filterImages() {
    if (!this.searchId.trim()) {
      this.filteredImages = [...this.images];

      return;
    }
    console.log(this.searchId, !this.searchId.trim(), 'searchId');
    this.filteredImages = this.images.filter(
      (img: any) => img.id === this.searchId
    );
  }
  showMore(imgId: any) {
    this.router.navigate([`/PicDetail/${imgId}`]);
  }
  handleImgLoad(img: any) {
    img.loaded = true;
    this.loading = false;
  }

  async showImageInfo(ev: any, imageId: string) {
    const popover = await this.popoverController.create({
      component: ImgdetailPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        imgId: imageId,
      },
    });
    await popover.present();
  }

  handleRefresh(ev: any) {
    setTimeout(() => {
      this.filteredImages = [];
      this.loadImages();
      ev.target.complete();
    }, 1000);
  }
}
