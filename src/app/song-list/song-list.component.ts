import { Component,Input, OnInit } from '@angular/core';
import {SongsService} from '../songs.service'

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input()
  gettitle:String;

  @Input()
  getduration:String;

  @Input()
  getgenre:any={};

  constructor(public songservice : SongsService) { 

  }
ngOnInit(): void {
    //for fetch playlist from service
    this.songservice.fetchsonglist();
  }

  fetchplaylist(){
    this.songservice.fetchsonglist();
  }

  remove(id){
    this.songservice.removeSonglist(id);
  }

}


