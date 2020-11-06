import { Component,EventEmitter,Output,OnInit } from '@angular/core';
import{SongsService} from '../songs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  
  title:String;
  duration:String;
  genre:any={};

  

  //@Output()
  //resultdata: EventEmitter<object>;

  constructor(private songservice:SongsService,private toast:ToastrService) { 
    //this.resultdata = new EventEmitter<object>();
  }

   ngOnInit(): void {
  }

  onSave(){
    if(this.title == '' || this.duration == '' || this.title == null || this.duration == null){
      this.toast.error('Please Fill all the Fields!!', 'Alert');
    }else {
      const {title, duration, genre} = this;
      this.songservice.addSongs(title, duration, genre);
      this.toast.success('Playlist Added Successfully!!', 'Alert');
      this.title = null;
      this.duration = null;
      this.genre = [];

      // this.resultdata.emit({
      //   title: title,
      //   duration: duration,
      //   genre: genre,
      // });

    }
    
  }
  remove(data){
    
  }

}
