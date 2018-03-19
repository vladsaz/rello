import { Injectable } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Injectable()
export class ColumnsService {

  private columnsList: object = {};

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value}`);
      console.log(this.columnsList);
      // this.onDrag(value.slice(1));
    });
   }

  getData () {
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
