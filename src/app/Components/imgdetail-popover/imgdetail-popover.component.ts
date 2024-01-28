import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PicsumServiceService } from 'src/app/Service/picsum-service.service';

@Component({
  selector: 'app-imgdetail-popover',
  templateUrl: './imgdetail-popover.component.html',
  styleUrls: ['./imgdetail-popover.component.scss'],
})
export class ImgdetailPopoverComponent implements OnInit {
  @Input() imgId: any;
  imgInfo: any;
  constructor(
    private popoverController: PopoverController,
    private picsumService: PicsumServiceService
  ) {
    console.log(this.imgId, 'imgInfo');
  }

  closePopover() {
    this.popoverController.dismiss();
  }

  ngOnInit() {
    console.log('popover');

    this.getImageInfo();
  }
  getImageInfo() {
    this.picsumService.getImageDetails(this.imgId).subscribe((data: any) => {
      this.imgInfo = data;
      console.log(data, 'data');
    });
  }
}
