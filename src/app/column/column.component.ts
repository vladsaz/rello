import { Component, OnInit, Input } from '@angular/core';
import { ColumnsService } from '../columns.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
@Input() column: any;
@Input() options: any;

  private inputVal: string;
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
 }

 private scream() {
  this.options.draggable.enables = false;
 }

 private addTask() {
  this.column.tasks.push(this.newTask);
 }

 private updateColumnName() {
  console.log(this.column);
}

}
