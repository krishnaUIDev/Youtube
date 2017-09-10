import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.css']
})
export class SerarchComponent implements OnInit {
  searchLocation = "NewPort Beach";
  searchQuery: string;
 @Input()
 passedQuery: string;
  constructor(private router:Router) { }

  ngOnInit() {

    if(this.passedQuery){
      this.searchQuery=this.passedQuery
    }
  }
  submitSearch(event, formData){
    console.log(event)
    console.log(formData.value)
    let searchedQuery = formData.value['q']
    if(searchedQuery){
      this.router.navigate(['/search', {q: searchedQuery }])
    }


  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }
}
