import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppTableRowComponent } from './components/app-table-row/app-table-row.component';
import { AppChildTableComponent } from './components/app-child-table/app-child-table.component';
import { AppColumnColorComponent } from './components/app-column-color/app-column-color.component';
import { AppService } from './services/app/app.service';
import { BigFloatPipe } from './pipes/big-float/big-float.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppTableComponent,
    AppTableRowComponent,
    AppChildTableComponent,
    AppColumnColorComponent,
    BigFloatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
