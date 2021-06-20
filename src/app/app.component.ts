import { Component } from '@angular/core';
import { ourteam, project } from './lists'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodderscluB';

  team:Array<ourteam>=[
    {name:'Tejas Dixit' , role:'Back-End Developer' , path:'../assets/our team/person.jpg'},
    {name:'Vignesh Gawali' , role:'Full-Stack Developer' , path:'../assets/our team/person.jpg'},
    {name:'Datta Kale' , role:'Full-Stack Developer' , path:'../assets/our team/person.jpg'}
  ];

  projects:Array<project>=[
    {title:'Koi Rocks' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Red Tree' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/red-tree.jpg'},

    {title:'Elephant' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/elephant.jpg'},

    {title:'Mount' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/win7mount.jpg'},

    {title:'Code' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/code_touch.jpg'},

    {title:'Koi Rocks' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'}
  ];

}
