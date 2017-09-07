import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "something";
  //videoList = ["item1","item1","item1",]  JSON
  videoList = [
    {name:"item1",
     slug:"Item-1"
    },
    {name:"item2",
      slug:"Item-2"
    },
    {name:"item3",
      slug:"Item-3"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}


//ng g your componentName
