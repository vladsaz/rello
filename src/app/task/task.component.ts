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
  this.task.name = this.inputVal;
  console.log(this.task.name);
}

}
