import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoService } from '../videos/videos.service';
import {VideoItem} from '../videos/video';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  providers: [VideoService]
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
   private routeSub: any;
   private req: any;
   slug: string;
   video: VideoItem;
  constructor(private route: ActivatedRoute, private _video: VideoService) { }

  ngOnInit() {
   this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
     this.req = this._video.get(this.slug).subscribe(data => {
       this.video = data as VideoItem
     })
    })

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }
  getEmbedUrl(x) {
    return 'https://www.youtube.com/embed/' + x.embed
  }
}
