import { Component, OnInit, Input } from '@angular/core';
import { ColumnsService } from '../columns.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})



export class ColumnComponent implements OnInit {
@Input() column: Object;
  // private data: object;

  constructor(private columnsService: ColumnsService, private dragulaService: DragulaService) {
    // dragulaService.setOptions('bag-one', {});
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value);
    });
  }

  private onDropModel(args) {
    // Here, this.playlists contains the elements reordered
}

  ngOnInit() {
    // this.data = this.columnsService.getData();
    // console.log('data is');
    // console.log(this.data);
  }

}
