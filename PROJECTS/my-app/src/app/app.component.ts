import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language:string='';
  listOflanguage: String[]=['English','Hindi','spanish'];
  

  addlanguage(){
  alert("entered into addlanguage method")
  this.listOflanguage.push(this.language);
  console.log(this.listOflanguage);
  }
}
