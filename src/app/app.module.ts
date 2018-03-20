import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsService } from './columns.service';
import { AuthorizationService } from './authorization.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ColumnsService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
