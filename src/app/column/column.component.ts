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

  constructor(private columnsService: ColumnsService) {

  }

  ngOnInit() {
  }

}
