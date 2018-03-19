import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsService } from './columns.service';
import { DragulaModule } from 'ng2-dragula';
import { DragulaService } from 'ng2-dragula';



import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    DragulaModule
  ],
  providers: [ColumnsService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
