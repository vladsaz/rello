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
    name: 'New Column',
    tasks: []
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
    this.options.draggable.enabled = true;
    this.options.api.optionsChanged();
   }

   private screamBack() {
    this.options.draggable.enabled = false;
    this.options.api.optionsChanged();
   }

   private syncData() {
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

  private addColumn() {
    const newNumberOfColumns = this.dashboard.length + 1;
    this.dashboard.forEach(element => {
      element.rows = newNumberOfColumns;
    });
    this.dashboard.push(
      {cols: 1, rows: newNumberOfColumns, y: 0, x: newNumberOfColumns - 1, column: JSON.parse(JSON.stringify(this.newColumn))}
    );
    this.changedOptions();
    /*this.dashboard = [];
    this.data = this.columnsService.initColumns();
    const numberOfColumns = this.data['columns'].length;

    this.data['columns'].forEach(element => {
      this.dashboard.push({cols: 1, rows: numberOfColumns, y: 0, x: 0, column: element});
    });*/
  }

  removeMovedItem(index, data) {
    data.columns.splice(index, 1);
  }
}
