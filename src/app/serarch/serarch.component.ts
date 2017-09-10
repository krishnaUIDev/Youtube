import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.css']
})
export class SerarchComponent implements OnInit {
  searchLocation = "NewPort Beach"

  constructor() { }

  ngOnInit() {
  }
  submitSearch(event, formData){
    console.log(event)
    console.log(formData.value)

    //this.http.post(endpoint,{{}})
  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }
}
