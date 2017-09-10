import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
   private routeSub:any;
   slug:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.routeSub = this.route.params.subscribe(params => {
      //console.log(params)
      this.slug = params['slug']
    })

  }
  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }
}
