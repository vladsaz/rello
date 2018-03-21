import { Component, OnInit, Input } from '@angular/core';
import { ColumnsService } from '../columns.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
@Input() column: Object;

  private itemsDropped: Array<any> = [];
  private newTask: object = {
    'name': 'new one'
  };

  constructor(private columnsService: ColumnsService) {

  }

  ngOnInit() {

  }

  private onMove($event, position: number) {
    console.log($event);
    // console.log(number);
 }

  private removeMovedItem(index, column) {
    column.tasks.splice(index, 1);
    // column.tasks[index] = {'name': 'deleted'};
    console.log('*');
 }

 private addTask() {
  this.column.tasks.push(this.newTask);
 }

}
