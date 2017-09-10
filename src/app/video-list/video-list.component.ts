import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Orange Songs";
  someItem = "<h1>Song </h1>";
  todayDate;
  //videoList = ["item1","item1","item1",]  JSON
  videoList = [
    {name:"Hello Rammante",
     slug:"Item-1",
      ID:"1",
      embed: `IwXzH693uUQ`,
    },
    {name:"Nenu Nuvvantu",
      slug:"Item-2",
      ID:"2",
      embed: `3oEgEnX5AE4`,
       },
    {name:"Sydney Nagaram",
      slug:"Item-3",
      ID:"3",
      embed: `YezHNoi-C-c`,
    },
    {name:" Rooba Rooba",
      slug:"Item-4",
      ID:"4",
      embed: `DRd47VKrJwY`,
    },
    {name:"item3",
      slug:"Item-3",
      ID:"3",
      embed: null,
        }

  ]
  constructor() { }

  ngOnInit() {
    this.todayDate = new Date()
  }
   /* getEmbedUrl(x){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www/youtube.com/embed/' + x.embed)
  }*/
  getEmbedUrl(x){
    return 'https://www.youtube.com/embed/' + x.embed
  }

}


//ng g your componentName
