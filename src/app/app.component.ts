import { Component, VERSION,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular variable';
  mydata=["orange","apple","banana","pineapple"];
  isLogin=false;
   todaydate = new Date(); 
   x = {name:'abc', age:'25', address:{a1:'Pune', a2:'Mumbai'}}; 
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
      "Sept", "Oct", "Nov", "Dec"]; 
  ngOnInit(){
     console.log(document.getElementById('heading').innerHTML);
  }

  myMethod(){
  document.getElementById('mypara').innerHTML="MY DATA FROM METHOD";
  }


  
}
