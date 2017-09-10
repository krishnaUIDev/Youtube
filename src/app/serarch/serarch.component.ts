import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.css']
})
export class SerarchComponent implements OnInit {
  searchLocation = "NewPort Beach"

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitSearch(event, formData){
    console.log(event)
    console.log(formData.value)
    let query = formData.value['q']
    if(query){
      this.router.navigate(['/search', {q: query }])
    }

    //this.http.post(endpoint,{{}})
  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }
}
