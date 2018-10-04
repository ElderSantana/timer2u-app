import { Component, OnInit , Input } from '@angular/core';
import { TimerService } from './../../../services/timer.service';

@Component({
  selector: '[app-logs]',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  @Input() listLogs;
  @Input() listLogsAux; 
  p: number = 1;
  public search;

  constructor(public timerService : TimerService) { }

  ngOnInit() {
  }
  deleteLog(id){
    this.timerService.deleteLog(id).subscribe(result => {
      this.listLogs.forEach(element => {
        if(element.id == id){
         let index = this.listLogs.indexOf(element);
         this.listLogs.splice(index, 1);
        }
      });
    })
  }
  filterTable(){
    this.listLogs = this.listLogsAux;
    this.listLogs = this.listLogs.filter( log => log.description.includes(this.search));
  }
}
