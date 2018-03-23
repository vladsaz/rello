import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsService } from '../columns.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {
  private userData: object = undefined;
  private dataLoaded = false;
  private data: object;
  public sampleData: object = {
    '1': 'true'
  };
  private newColumn: object = {
    'id': 10,
    name: 'column_0',
    tasks: [
      {
        name: 'task10'
      },
      {
        name: 'task11'
      }
    ]
};
  options: GridsterConfig;
  dashboard: any;

  constructor(private http: HttpClient, private columnsService: ColumnsService) {
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
              this.http.get('http://localhost:3005/mongo', {headers: headers})
              .subscribe(
                res => {
                  this.dashboard = res[0]['board'];
                  console.log(this.dashboard);
                },
                err => {
                  console.log('Error occured');
                  console.log(err);
                }
              );
  }

  static itemChange(item, itemComponent) {

  }

  static itemResize(item, itemComponent) {

  }

  private scream() {
    console.log('SCREAM');
    this.options.draggable.enabled = true;
    this.options.api.optionsChanged();
   }

   private screamBack() {
    console.log('SCREAM');
    this.options.draggable.enabled = false;
    this.options.api.optionsChanged();
    console.log(this.dashboard);
   }

   private syncData() {
    console.log(this.dashboard);
    this.columnsService.sendData(this.dashboard);
   }

  ngOnInit() {
    this.options = {
      itemChangeCallback: BoardComponent.itemChange,
      itemResizeCallback: BoardComponent.itemResize,
      draggable: {
        enabled: false
      }
    };

    // this.dashboard = [];

    // this.data = this.columnsService.initColumns();
    // const numberOfColumns = this.data['columns'].length;

    // this.data['columns'].forEach(element => {
    //   this.dashboard.push({cols: 1, rows: numberOfColumns, y: 0, x: 0, column: element});
    // });
    // console.log(this.data);
    // return this.http.get('http://localhost:3002/')
    // .toPromise()
    // .then(data => {
    //     this.userData = data;
    //     console.log(this.userData);
    //     this.dataLoaded = true;
    //     return data;
    // });
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  private addColumn() {
    this.data = this.columnsService.initColumns();
    const numberOfColumns = this.data['columns'].length;
    this.dashboard.push({cols: 1, rows: numberOfColumns, y: 0, x: 0, column: this.newColumn});
  }

  removeMovedItem(index, data) {
    data.columns.splice(index, 1);
    console.log('*');
    // this.data.columns[index] = {'name': 'deleted'};
    console.log(this.data);
  }
}
