import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

import { VideoService} from "../videos/videos.service";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
  private req:any;
  title = "Orange Songs";
  someItem = "<h1>Song </h1>";
  todayDate;
  //videoList = ["item1","item1","item1",]  JSON
  videoList :[any];

  constructor(private http:Http, private _video:VideoService) { }

  ngOnInit() {
    this.todayDate = new Date()
    this.req = this._video.list().subscribe(data =>{
      //console.log(data)
      this.videoList = data as [any];
    })
  }
  ngOnDestroy(){
    this.req.unsubscribe()
  }

  getEmbedUrl(x){
    return 'https://www.youtube.com/embed/' + x.embed
  }

}


//ng g your componentName
