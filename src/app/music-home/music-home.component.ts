import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-home',
  templateUrl: './music-home.component.html',
  styleUrls: ['./music-home.component.scss']
})
export class MusicHomeComponent implements OnInit {

  constructor() { }
  
  title:String;
  duration:String;
  genre:any={};

  

  

  ngOnInit(): void {
  }

  
}
