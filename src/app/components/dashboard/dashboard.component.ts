import { Component, OnInit } from '@angular/core';
import { TimerService } from './../../services/timer.service';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public listLogs = [];
  constructor(public timerService : TimerService) { }

  ngOnInit() {
    this.loadLogs();
  }
  loadLogs(){
    this.timerService.listLogs().subscribe(response =>{
      this.listLogs = response;
    })
  }
  reciverFeedback(log) {
    this.listLogs.push(log);
    console.log('Foi emitido o evento e chegou no pai >>>> ', log);
  }


}
