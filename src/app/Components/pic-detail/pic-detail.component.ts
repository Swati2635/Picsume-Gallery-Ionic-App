import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicsumServiceService } from 'src/app/Service/picsum-service.service';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.scss'],
})
export class PicDetailComponent implements OnInit {
  id: any;
  imgInfo: any;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private picsumService: PicsumServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params, this.id, ' this.id');
      this.getImageInfo();
    });
    console.log('PicDetailComponent');
  }
  getImageInfo() {
    this.picsumService.getImageDetails(this.id).subscribe(
      (data: any) => {
        this.imgInfo = data;
        console.log(data, 'data');
      },
      (error: any) => {
        console.log(error, 'error');
      }
    );
  }
  backClicked() {
    this.location.back();
  }
}
