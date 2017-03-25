import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { PostsService } from '../services/posts.services';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers:[PostsService]
})

export class HomeComponent implements OnInit {

  homeTitle : string;
  myString : string;
  myBoolean : boolean;
  hobbies: string[];
  showhobbies: boolean;
  allposts:postsObj[];

  alertMe(value){
    alert(value)
  }

  ninja:ninjaobj;


  @Input() ninja2;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  addHobby(value){
    this.hobbies.push(value);
  }

  deleteHobby(index){
    this.hobbies.splice(index,1);
  }

  constructor(private postsService : PostsService) {
    this.ninja = {
      name:'kaushik',
      belt:'black'
    };
    this.homeTitle = 'welcome to ninja directory';
    this.myString = 'I like chicken';
    this.myBoolean = true;
    this.hobbies = ['asda0','asdas','zxdsf','asdasd'];
    this.showhobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.allposts = posts;
    })
  }

  ngOnInit() {

  }

}

interface ninjaobj{
  name:string,
  belt:string
}

interface postsObj{
  body:string,
  id:number,
  title:string,
  userId:number
}
