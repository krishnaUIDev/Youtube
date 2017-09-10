import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "something";
  someItem = "<h1>something</h1>";
  //videoList = ["item1","item1","item1",]  JSON
  videoList = [
    {name:"item1",
     slug:"Item-1",
      embed: `IwXzH693uUQ`,
    },
    {name:"item2",
      slug:"Item-2",
      embed: `IwXzH693uUQ`,
       },
    {name:"item3",
      slug:"Item-3",
      embed: null,
        }

  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
 /* getEmbedUrl(x){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www/youtube.com/embed/' + x.embed)
  }*/
  getEmbedUrl(x){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + x.embed)
  }

}


//ng g your componentName
