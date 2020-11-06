import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Play} from '../app/play'

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songlist: Play[];
  url: string;
  httpOptions: object;
  genData: any;

  constructor(private http: HttpClient, private toast: ToastrService) {
    this.songlist = [];
    this.url = 'http://localhost:3000/songlists';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }

   fetchsonglist() {
    this.http.get<Play[]>(this.url).subscribe((songlists: Play[]) => {
      //debugger;
      this.songlist = songlists;
    });
  }

  addSongs(title: any, duration: any, gen: any) {
    if(gen.slow){
      var slow = 'slow';
    } else {
      var slow = '';
    }
    if(gen.romance){
      var romance = 'romance';
    } else {
      var romance = '';
    }
    if(gen.remix){
      var remixed = 'remixed';
    } else {
      var remixed = '';
    }
    this.genData = slow+' '+romance+' '+remixed; 
    const songlist: Play = new Play(title, duration, this.genData);
    this.http.post<Play>(this.url, {
      title: songlist.title,
      duration: songlist.duration,
      gen: songlist.gen
    }, this.httpOptions).subscribe((songlists: Play) => {
      this.songlist.push(songlists);
    });  
  
  }

  removeSonglist(id){
    this.http.delete(this.url+'/'+id).subscribe((playlists: Play[]) => {
     // debugger;
     this.toast.success('Playlist Deleted Successfully!!', 'Alert');
    this.fetchsonglist();
    });
  }
}
