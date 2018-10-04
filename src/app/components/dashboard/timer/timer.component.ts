import { Component, OnInit  , ViewEncapsulation , Output, EventEmitter } from '@angular/core';
import { TimerService } from './../../../services/timer.service';

@Component({
  selector: '[app-timer]',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimerComponent implements OnInit {
  public timerStarted ;
  public timerCurrent ; 
  public timerStoped ;
  public singleTime;
  public list = [] ; 
  public hours = 0;
  public minutes = 0;
  public seconds  = 0 ;
  @Output() log = new EventEmitter();

  constructor(public timerService : TimerService) {
  
  }

  ngOnInit() {
    this.refreshTimer();
  }

  refreshTimer(){
    this.singleTime = {
      description : "",
      time : ""
    }
  }
  timer(){
    if(this.timerStarted){
      // get paused value
      this.timerStoped = this.hours + ":" + this.minutes + ":" + this.seconds;
      this.timerStarted = 0;
    }else{
      // restart values
      this.timerStarted = new Date().getTime();
      this.timerStoped = 0
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      // start clock
      setInterval(() => {
        this.timerCurrent = new Date().getTime() - this.timerStarted; // milliseconds elapsed since start
        // format time to display
        this.hours = Math.floor((this.timerCurrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((this.timerCurrent % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds =  Math.floor((this.timerCurrent % (1000 * 60)) / 1000) ;
      }, 1000); // update about every second
    }  
  }

  saveLog(){
    this.singleTime.time = this.timerStoped;
    this.timerService.addLog(this.singleTime.description , this.singleTime.time).subscribe(result =>{
      this.log.emit(result);
    })
    console.log(this.list);
    this.refreshTimer();
  }

} 
