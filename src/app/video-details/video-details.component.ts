import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';
@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
   private routeSub:any;
   private req:any;
   slug:string;
   video:any;
  constructor(private route: ActivatedRoute, private http:Http) { }

  ngOnInit() {
   this.routeSub = this.route.params.subscribe(params => {
      //console.log(params)
      this.slug = params['slug']
     this.http.get('assets/JSON/videos.json').subscribe(data => {
       data.json().filter(item=>{
         console.log(item)
         if(item.slug == this.slug){
           this.video = item
         }
       })
     })
    })

  }
  ngOnDestroy(){
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }
}
