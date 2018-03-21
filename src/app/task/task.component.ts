import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Object;

  private inputVal: string;

  constructor() { }

  ngOnInit() {
  }

  private updateTaskName() {
    console.log(this.task);
  }

}
