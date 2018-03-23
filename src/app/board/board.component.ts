import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsService } from '../columns.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { AuthorizationService } from '../authorization.service';

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

  constructor(private http: HttpClient, private columnsService: ColumnsService, private auth: AuthorizationService) {
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
              this.http.get('http://localhost:3005/mongo', {headers: headers})
              .subscribe(
                res => {
                  this.dashboard = res[0]['board'];
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
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  private addColumn() {
    this.dashboard = this.dashboard || [];
    const newNumberOfColumns = this.dashboard.length + 1;
    this.dashboard.forEach(element => {
      element.rows = newNumberOfColumns;
    });
    this.dashboard.push(
      {cols: 1, rows: newNumberOfColumns, y: 0, x: newNumberOfColumns - 1, column: JSON.parse(JSON.stringify(this.newColumn))}
    );
    this.changedOptions();
  }

  removeMovedItem(index, data) {
    data.columns.splice(index, 1);
  }
}
