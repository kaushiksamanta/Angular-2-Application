import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  homeTitle = 'welcome to ninja directory';
  myString = 'I like chicken';
  myBoolean = true;

  alertMe(value){
    alert(value)
  }

  ninja = {
    name:'kaushik',
    belt:'black'
  };

  @Input() ninja2;
  constructor() {

  }

  ngOnInit() {

  }

}
