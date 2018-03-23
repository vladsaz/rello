import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class ColumnsService {

  public columnsList: any = {};
  public board: any = {};

  constructor(private http: HttpClient) {
  }

  public sendData (board) {
    board = {board: board};
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:3005/mongo',
    JSON.stringify(board), {headers: headers})
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
          console.log(err);
        }
      );
  }

  public getData () {
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
    this.http.get('http://localhost:3005/mongo', {headers: headers})
      .subscribe(
        res => {
          this.board = res;
        },
        err => {
          console.log('Error occured');
          console.log(err);
        }
      );
    return this.columnsList;
  }


  public initColumns () {
    return {
      'columns': [
        {
          name: 'col1',
          tasks: [
            {name: 'task1'},
            {name: 'task2'}
          ]
        },
        {
          name: 'col2',
          tasks: [
            {name: 'task3'},
            {name: 'task4'}
          ]
        },
        {
          name: 'col3',
          tasks: [
            {name: 'task5'},
            {name: 'task6'}
          ]
        }
      ]
    };
  }

}
