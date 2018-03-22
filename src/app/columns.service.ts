import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class ColumnsService {

  public columnsList: any = {};

  constructor(private http: HttpClient) {
  }

  public sendData () {
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Access-Control-Allow-Origin', '*');
    // const options = new RequestOptions({headers: myHeaders, body: JSON.stringify(this.columnsList)});
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:3005/mongo',
    JSON.stringify(this.columnsList), {headers: headers})
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
    this.columnsList = {
      'columns': [
        {
            'id': 0,
            'name': 'column_0',
            'tasks': [
              {
                'name': 'task1'
              },
              {
                'name': 'task2'
              }
            ]
        },
        {
            'id': 1,
            'name': 'column_1',
            'tasks': [
              {
                'name': 'task3'
              },
              {
                'name': 'task4'
              }
            ]
        },
        {
          'id': 2,
          'name': 'column_2',
          'tasks': [
            {
              'name': 'task5'
            },
            {
              'name': 'task6'
            }
          ]
        },
        {
          'id': 3,
          'name': 'column_3',
          'tasks': [
            {
              'name': 'task7'
            },
            {
              'name': 'task8'
            }
          ]
       },
       {
        'id': 4,
        'name': 'column_4',
        'tasks': [
          {
            'name': 'task9'
          },
          {
            'name': 'task10'
          }
        ]
     }
     ,
       {
        'id': 5,
        'name': 'column_5',
        'tasks': [
          {
            'name': 'task11'
          },
          {
            'name': 'task12'
          }
        ]
     }
      ]
    };

    return this.columnsList;
  }

}
