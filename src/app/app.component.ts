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
    {name:'Tejas Dixit' , role:'Back-End Developer' , path:'../assets/our team/Tejas.jpeg'},
    {name:'Vignesh Gawali' , role:'Full-Stack Developer' , path:'../assets/our team/me-site.png'},
    {name:'Datta Kale' , role:'Full-Stack Developer' , path:'../assets/our team/Datta.jpeg'}
  ];

  projects:Array<project>=[
    {title:'Proj1' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Proj2' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Proj3' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Proj1' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Proj2' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'},

    {title:'Proj3' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at ipsa nesciunt ad, numquam atque perferendis alias deleniti sunt nulla.' , path:'../assets/koi-rocks.jpg'}
  ];

}
