import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  
  title = 'Welcome do Timbre';

  constructor() { }

  ngOnInit() {
  }
}
