import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // prevented = false;
  homeImageList = [
    {image: "assets/images/natrue/1.jpg",title: "Image 1",link: "videos/video-1"},
    {image: "assets/images/natrue/2.jpg",title: "Image 1",link: "videos/video-2"},
    {image: "assets/images/natrue/3.jpg",title: "Image 1",link: "videos/video-3"}

  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  preventNormal(event:MouseEvent, image:any){
    if(!image.prevented){
      event.preventDefault()
      //console.log(image.getAttribute("href"))
     // image.setAttribute("href","/videos")
      //image.link = "/videos"
     // image.prevented = true;
      this.router.navigate(['./videos'])

    }
    //console.log(event)
  }
}
