import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'app works!';

  ninjacks = {
    name:'asda',
    belt:'afa'
  };

  yell(e){
    alert("i am yelling");
    console.log(e);
  }

}
