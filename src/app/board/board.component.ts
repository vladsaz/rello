import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsService } from '../columns.service';
import { DragulaService } from 'ng2-dragula';

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

  constructor(private http: HttpClient, private columnsService: ColumnsService, private dragulaService: DragulaService) {
        // dragulaService.setOptions('bag-one', {});
        dragulaService.dropModel.subscribe((value) => {
          this.onDropModel(value);
        });
  }

  private onDropModel(args) {
    // Here, this.playlists contains the elements reordered
}

  ngOnInit() {
    this.data = this.columnsService.getData();
    console.log(this.data);
    return this.http.get('http://localhost:3002/')
    .toPromise()
    .then(data => {
        this.userData = data;
        console.log(this.userData);
        this.dataLoaded = true;
        return data;
    });
  }

}
